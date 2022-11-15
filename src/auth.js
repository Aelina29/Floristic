export function authWithEmailAndPassword(email, password) {
  const apiKey = 'AIzaSyBwGCR0qESPJ02eV5G2YS7HaXD9K-0IRhw'
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({
      email, password,
      returnSecureToken: true
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => data.idToken)
  alert("authWithEmailAndPassword");
}

// export function auth() {
//     PopUpShow();
//   document
//     .getElementById('auth-form')
//     .addEventListener('submit', authFormHandler, {once: true})
// }
//
// export function PopUpShow(){//Функция отображения PopUp
//     $("#popup1").show();
// }
// export function PopUpHide(){//Функция скрытия PopUp
//     $("#popup1").hide();
// }

export function authFormHandler(event) {
  event.preventDefault()
  const email = event.target.querySelector('#email').value
  const password = event.target.querySelector('#password').value
  const btn = event.target.querySelector('button');
  btn.disabled = true;
  authWithEmailAndPassword(email, password)
      .then(token => {
          console.log(token);
          console.log(email);
          if(!token) alert("Ошибка!!!");
          else document.getElementById("demo").innerHTML = "You:  "+email;
          PopUpHide();
      })
     .then(() => btn.disabled = false)
}