/* Moralis init code */
const serverUrl = "https://ynxef7bnorq4.usemoralis.com:2053/server";
const appId = "3zcgZ9rsrJjwChyaOHEKrUexr20bQpid3Qkl7n6e";
Moralis.start({ serverUrl, appId });

/* TODO: Add Moralis Authentication code */


submit = document.querySelector("[name=valid_form]");

username_input = document.querySelector("[name=Identifiant]");

birthday_input = document.querySelector("[name=birthday]");

genre_input = document.querySelector(".genreInput")

email_input = document.querySelector("[name=email]")

pin_input = document.querySelector("[name=pin]")

console.log(submit)

// submit.onclick = addUser(username_input.value, birthday_input.value, genre_input.value, "wip", email_input.value, pin_input.value)

// function addUser(username, date, genre, status, email, pin) {
//     console.log("adduser function")
//     const user = new Moralis.User();
//     user.set("username", username);
//     user.set("birthday", date);
//     user.set("genre", genre);
//     user.set("status", status);
//     user.set("email", email);
//     user.set("password", pin);
//     user.signUp();
// }

function signUp(username, date, genre, status, email, pin) {
    const user = new Moralis.User();
    user.set("username", username);
    user.set("birthday", date);
    user.set("genre", genre);
    user.set("status", status);
    user.set("email", email);
    user.set("password", pin);

    user.signUp();
    console.log("Sign up successfull for ", username)
}

submit.addEventListener("click", signUp(username_input.value, birthday_input.value, genre_input.value, "wip", email_input.value, pin_input.value))