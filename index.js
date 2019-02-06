const loginUsername = document.getElementById('login-username')
const loginPassword = document.getElementById('login-password')
const loginBtn = document.getElementById('login-submit')

loginBtn.addEventListener('click', (e) => {
  console.log(loginUsername.value + loginPassword.value)
});