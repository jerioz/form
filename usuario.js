const userInfo = document.getElementById('userInfo');

function paintData() {
    const recoveredDataUsers = JSON.parse(localStorage.getItem('user'))
    recoveredDataUsers.forEach(user => {
    const p = document.createElement('p')
    p.textContent =  `Name: ${user.userFname}, Email: ${user.userEmail}` 
    userInfo.appendChild(p)
  })
}
paintData()