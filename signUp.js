
const serverUrl = "https://ynxef7bnorq4.usemoralis.com:2053/server";
const appId = "3zcgZ9rsrJjwChyaOHEKrUexr20bQpid3Qkl7n6e";
Moralis.start({ serverUrl, appId });

submit = document.querySelector("[name=valid_form]");

username_input = document.querySelector("[name=Identifiant]");

birthday_input = document.querySelector("[name=birthday]");

genre_input = document.querySelector(".genreInput")

email_input = document.querySelector("[name=email]")

pin_input = document.querySelector("[name=pin]")


console.log(submit)

async function signUp(username, date, genre, status, email, pin) {
    const user = new Moralis.User();
    user.set("username", username);
    user.set("birthday", date);
    user.set("genre", genre);
    user.set("status", status);
    user.set("email", email);
    user.set("password", pin);

    try {
    await user.signUp();
    await popUpSignUp();
    } catch (error) {
    // Show the error message somewhere and let the user try again.
    Swal.fire("Error: " + error.code + " " + error.message);
    }
}
submit.onclick = () => signUp(username_input.value, birthday_input.value, genre_input.value, "wip", email_input.value, pin_input.value)

// submit.onclick = () => for (username_input.value != "" && birthday_input.value != "" && email_input.value != ""  && pin_input.value) {
//     submit.onclick = () => popUpSignUp()
// }


function popUpSignUp() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: 'Inscription réussie'
    })
}