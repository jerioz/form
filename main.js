const fname = document.querySelector('#name');
const email = document.querySelector('#email');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const textInform = document.querySelector('#inform');
const userInfo = document.querySelector('#userInfo');



let arrayUser = JSON.parse(localStorage.getItem('user')) || [];

function sendForm() {
    const userFname = fname.value;
    const userEmail = email.value;
    const userPassword1 = password1.value;
    const userPassword2 = password2.value;
    
    const user = {
        userFname,
        userEmail,
        userPassword1,
        userPassword2
      }
    
arrayUser.push(user)

    if (fname.value === "" || email.value === "" || password1.value === "" || password2.value === "") {
       textInform.innerHTML  = "<p>Por favor, rellene todos los campos<p>"
    } else if (/(\w+?@\w+?\x2E.+)/.test(email.value) !== true) {
        textInform.innerHTML = "<p>Por favor, ingrese un email correcto</p>";
     } else if (/^.{4,8}$/.test(password1.value) !== true) {
        textInform.innerHTML = "<p>La contraseña debe tener de 4 a 8 caracteres</p>"
     }
     else if (password1.value !== password2.value) {
        textInform.innerHTML = "<p>Las contraseñas no coinciden</p>"
     }
     else {
        textInform.innerHTML = "<p>Usuario creado correctamente</p>"
        
        localStorage.setItem('user', JSON.stringify(arrayUser));
        document.querySelector('#userForm').reset();
        setTimeout(() => {
         window.location.href='/usuarios.html'
     }, 2000);
     }
    
    setTimeout(function (){
         textInform.innerHTML = "";
        }, 3000);
  
}

    
const button = document.querySelector('#btn')
      button.addEventListener('click', (e) => {
        e.preventDefault()
        sendForm()
       
      })
