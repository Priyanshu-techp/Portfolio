document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => {
        document.querySelectorAll('.nav-links a').forEach(x => x.classList.remove('active'));
        a.classList.add('active');
    })
})

document.querySelector(".form").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.querySelector('input[placeholder="Your Name"]').value;
    var email = document.querySelector('input[placeholder="Your Email"]').value;
    var message = document.querySelector('textarea').value;

    var phone = "6399256546";

    var whatsappURL =
        "https://wa.me/" + phone +
        "?text=" +
        "Name: " + name + "%0A" +
        "Email: " + email + "%0A" +
        "Message: " + message;

    window.open(whatsappURL, "_blank");
});