const getCurrentUser = () => {
  setTimeout(() => {
    const userItem = document.querySelectorAll(".userItem")

    userItem.forEach(item => item.addEventListener('click', (event) => {
      event.preventDefault()

      popupWrapper.classList.add("active")

      const userName = item.firstElementChild.textContent

      fetch(`http://127.0.0.1:3000?term=${userName}`)
      .then(response => response.json())
      .then(data => {

        const popupTitle__userName = document.querySelector(".popupTitle__userName")
        popupTitle__userName.innerHTML = data[0].name

        const popupInfo__text__phone = document.querySelector(".popupInfo__text__phone")
        popupInfo__text__phone.innerHTML = data[0].phone

        const popupInfo__text__email = document.querySelector(".popupInfo__text__email")
        popupInfo__text__email.innerHTML = data[0].email

        const popupInfo__text__date = document.querySelector(".popupInfo__text__date")
        popupInfo__text__date.innerHTML = data[0].hire_date

        const popupInfo__text__post = document.querySelector(".popupInfo__text__post")
        popupInfo__text__post.innerHTML = data[0].position_name

        const popupInfo__text__division = document.querySelector(".popupInfo__text__division")
        popupInfo__text__division.innerHTML = data[0].department

        const popupAddInfo__text = document.querySelector(".popupAddInfo__text")
        popupAddInfo__text.innerHTML = data[0].address
      })

    }))

  }, 100)
}

document.addEventListener("DOMContentLoaded", getCurrentUser)
const popupWrapper = document.querySelector(".popupWrapper")

const searchBarPopup = document.querySelector(".searchBar")
searchBarPopup.addEventListener("input", getCurrentUser)

document.addEventListener("click", (event) => {

  if (event.target === document.querySelector(".popupWrapper.active")) {
    popupWrapper.classList.remove("active")
  }
})

const closeButton = document.querySelector(".popupTitle > img")
closeButton.addEventListener("click", () => {
  popupWrapper.classList.remove("active")
})