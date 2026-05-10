function scrollToContact() {
    document.getElementById("contact").scrollIntoView();
}

document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await res.json();
    alert(result.message);
    document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Form submitted successfully!");

    form.reset();
  });
});
});