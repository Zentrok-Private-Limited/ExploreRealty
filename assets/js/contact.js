/* ============================
   CONTACT FORM SUBMIT
============================ */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.querySelector('input[placeholder="NAME..."]').value.trim();
        const email = document.querySelector('input[placeholder="EMAIL..."]').value.trim();
        const phone = document.querySelector('input[placeholder="PHONE..."]').value.trim();
        const message = document.querySelector('textarea[placeholder="MESSAGE..."]').value.trim();

        // ✅ Validation
        if (!name || !email || !phone || !message) {
            alert("Please fill all fields!");
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Enter a valid email!");
            return;
        }

        try {
            // ✅ Dev vs Production URL
            const url = window.location.hostname === "localhost"
                ? "http://localhost:5000/contact"
                : "https://explore-realty-backend.vercel.app/contact";

            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, message })
            });

            const text = await res.text();
            let data = {};
            try { data = JSON.parse(text); } catch { data = { message: text }; }

            alert(data.message);
            contactForm.reset();

        } catch (err) {
            console.error("Contact error:", err);
            alert("Error sending message! Please try again later.");
        }
    });
}


/* ============================
   SUBSCRIBE FORM SUBMIT
============================ */
const subscribeForm = document.getElementById("subscribeForm");

if (subscribeForm) {
    subscribeForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("subscribeEmail").value.trim();
        const msgEl = document.getElementById("subscribeMsg");

        // ✅ Simple Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            msgEl.innerText = "Enter a valid email!";
            return;
        }

        try {
            const url = window.location.hostname === "localhost"
                ? "http://localhost:5000/subscriber"
                : "https://explore-realty-backend.vercel.app/subscriber";

            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });

            const text = await res.text();
            let data = {};
            try { data = JSON.parse(text); } catch { data = { message: text }; }

            msgEl.innerText = data.message;
            subscribeForm.reset();

        } catch (err) {
            console.error("Subscribe error:", err);
            msgEl.innerText = "Server error! Please try again later.";
        }
    });
}
