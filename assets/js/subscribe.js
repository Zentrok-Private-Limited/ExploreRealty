/* ============================
   SUBSCRIBE FORM SUBMIT
============================ */
const subscribeForm = document.getElementById("subscribeForm");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("subscribeEmail").value;
    const msgEl = document.getElementById("subscribeMsg");

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      msgEl.innerText = "Please enter a valid email!";
      return;
    }

    try {
      const url =
        window.location.hostname === "localhost"
          ? "http://localhost:5000/subscriber"
          : "https://api-vert-omega-98.vercel.app/api/subscriber";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const text = await res.text();
      let data = {};

      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text };
      }

      msgEl.innerText = data.message;
    } catch (err) {
      console.error("Subscribe error:", err);
      msgEl.innerText = "Server error! Please try again later.";
    }
  });
}
