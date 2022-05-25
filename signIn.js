
const serverUrl = "https://ynxef7bnorq4.usemoralis.com:2053/server";
const appId = "3zcgZ9rsrJjwChyaOHEKrUexr20bQpid3Qkl7n6e";
Moralis.start({ serverUrl, appId });

submit = document.querySelector("[name=valid_form]");

username_input = document.querySelector("[name=Identifiant]");

pin_input = document.querySelector("[name=pin]")


console.log(submit)

async function signIn(username, pin) {
    try {
    const user = await Moralis.User.logIn(username, pin)
    await popUpSignIn();
    console.log(user.get('email'))
    window.location.href='https://www.troovel.gq'
    } catch (error) {
    Swal.fire("Error: " + error.code + " " + error.message);
    }
}
submit.onclick = () => signIn(username_input.value, pin_input.value)



function popUpSignIn() {
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
        title: 'Connexion réussie'
    })
}