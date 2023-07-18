const getUsersFiltered = () => {

  const usersWrapper = document.querySelector('.usersWrapper')
  let userItem = usersWrapper.lastElementChild

  while(userItem) {
    usersWrapper.removeChild(userItem)
    userItem = usersWrapper.lastElementChild
  }

  fetch(`http://127.0.0.1:3000?term=${searchBar.value}`)
  .then(response => response.json())
  .then(users => {
    users.map(user => {
      const userItem = document.createElement('div')
      const userName = document.createElement('div')
      const userInfo = document.createElement('div')
      const userPhone = document.createElement('div')
      const userEmail = document.createElement('div')
      const userPhone__icon = document.createElement('img')
      const userPhone__number = document.createElement('div')
      const userEmail__icon = document.createElement('img')
      const userEmail__email = document.createElement('div')
  
      userItem.className = "userItem"
      userName.className = "userName"
      userName.innerHTML = user.name
      userInfo.className = "userInfo"
      userPhone.className = "userPhone"
      userEmail.className = "userEmail"
      userPhone__icon.className = "userPhone__icon"
      userPhone__icon.src = "src/assets/phone.png"
      userPhone__number.className = "userPhone__number"
      userPhone__number.innerHTML = user.phone
      userEmail__icon.className = "userEmail__icon"
      userEmail__icon.src = "src/assets/email.png"
      userEmail__email.className = "userEmail__email"
      userEmail__email.innerHTML = user.email
  
      usersWrapper.append(userItem)
      userItem.append(userName)
      userItem.append(userInfo)
      userInfo.append(userPhone)
      userInfo.append(userEmail)
      userPhone.append(userPhone__icon)
      userPhone.append(userPhone__number)
      userEmail.append(userEmail__icon)
      userEmail.append(userEmail__email)
    })
  });

}

const searchBar = document.querySelector(".searchBar")
searchBar.addEventListener("input", getUsersFiltered)