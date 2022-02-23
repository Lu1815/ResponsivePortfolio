const myForm = document.querySelector(".contact__form"),
    name = document.querySelector(".name").value,
    email = document.querySelector(".email").value,
    subject = document.querySelector(".subject").value,
    message = document.querySelector(".message").value;

document.querySelector(".formBtn").addEventListener("onClick", sendEmail(name, email, subject, message));

function sendEmail(n, e, p, m) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "luisfelipece17@gmail.com",
        Password: "77927919Luis",
        To: 'luisfelipece17@gmail.com',
        From: `${e}`,
        Subject: `${p}`,
        Body: `Name: ${n} <br/> Email: ${e} <br/> Message: ${m}`
    }).then((message) => alert("Mail sent successfully!"))
}