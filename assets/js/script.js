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

  // 🔥 Disable button
  const btn = form.querySelector("button[type='submit']");
  btn.disabled = true;
  btn.innerText = "Submitting...";

  // ✅ Dynamic API URL
  const API_URL = `https://explore-backend-sax4.onrender.com/api/${type}`;

  fetch(API_URL, {
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
    else if (type === "enquiry") {
      alert("Enquiry sent successfully!");
    } 
    else {
      alert("Submitted successfully!");
    }

    form.reset();
  })
  .catch(() => {
    alert("Error submitting form");
  })
  .finally(() => {
    btn.disabled = false;
    btn.innerText = "Submit";
  });
}