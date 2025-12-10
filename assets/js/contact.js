/* ============================
   CONTACT FORM SUBMIT
============================ */
document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="NAME..."]').value;
    const email = document.querySelector('input[placeholder="EMAIL..."]').value;
    const phone = document.querySelector('input[placeholder="PHONE..."]').value;
    const message = document.querySelector('textarea[placeholder="MESSAGE..."]').value;

    try {
        const res = await fetch("https://explore-realty-ux8g.vercel.app/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, message })
        });

        const data = await res.json();
        alert(data.message);
        e.target.reset();

    } catch (err) {
        alert("Error sending message");
    }
});


/* ============================
   SUBSCRIBE FORM SUBMIT
============================ */
const subscribeForm = document.getElementById("subscribeForm");

if (subscribeForm) {
    subscribeForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("subscribeEmail").value;

        try {
            const res = await fetch("http://localhost:5000/subscriber", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });

            const text = await res.text(); // <-- IMPORTANT
            let data = {};

            // Try converting only if JSON
            try {
                data = JSON.parse(text);
            } catch {
                data = { message: text };
            }

            document.getElementById("subscribeMsg").innerText = data.message;

        } catch (err) {
            console.error("Subscribe error:", err);
            document.getElementById("subscribeMsg").innerText = "Server error!";
        }
    });
}
