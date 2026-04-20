function handleSubmit(e, type) {
  e.preventDefault();

  const form = e.target;
  const data = Object.fromEntries(new FormData(form));

  data.formType = type;

  fetch("http://localhost:5000/api/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(() => {

    // ✅ Different messages
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
  });
}