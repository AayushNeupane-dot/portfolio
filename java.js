document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Message sent! Thank you for reaching out.');
    });
});
