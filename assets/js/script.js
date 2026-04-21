function handleSubmit(e, type) {
  e.preventDefault();

  const form = e.target;
  const data = Object.fromEntries(new FormData(form));

  // 🔥 Basic validation
  if (type !== "newsletter") {
    if (!data.name || data.name.trim().length < 2) {
      alert("Please enter valid name");
      return;
    }

    if (!data.phone || !/^[0-9]{10}$/.test(data.phone)) {
      alert("Enter valid 10-digit phone number");
      return;
    }
  }

  if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) {
    alert("Enter valid email");
    return;
  }

  // 🔥 Disable button (prevent double click)
  const btn = form.querySelector("button[type='submit']");
  btn.disabled = true;
  btn.innerText = "Submitting...";

  data.formType = type;

  fetch("https://explore-backend-sax4.onrender.com/api/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(() => {

    // ✅ Success messages
    if (type === "newsletter") {
      alert("Subscribed successfully!");
    } 
    else if (type === "contact") {
      alert("Message sent successfully!");
    } 
    else {
      alert("We will contact you soon!");
    }

    form.reset();
  })
  .catch(() => {
    alert("Error submitting form");
  })
  .finally(() => {
    // 🔥 Enable button back
    btn.disabled = false;
    btn.innerText = "Submit";
  });
}