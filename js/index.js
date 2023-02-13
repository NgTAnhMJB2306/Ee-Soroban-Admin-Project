// modal

var modal = document.querySelector(".modal");
var triggers = document.querySelectorAll(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

for (var i = 0, len = triggers.length; i < len; i++) {
  triggers[i].addEventListener("click", toggleModal);
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Navbar

let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler')
let dropdownIsOpen = false

// Handle dropdown menues
// if (dropdowns.length) {
//   dropdowns.forEach((dropdown) => {
//     dropdown.addEventListener('click', (event) => {
//       let target = document.querySelector(`#${event.target.dataset.dropdown}`)

//       if (target) {
//         if (target.classList.contains('show')) {
//           target.classList.remove('show')
//           dropdownIsOpen = false
//         } else {
//           target.classList.add('show')
//           dropdownIsOpen = true
//         }
//       }
//     })
//   })
// }

// // Handle closing dropdowns if a user clicked the body
// window.addEventListener('mouseup', (event) => {
//   if (dropdownIsOpen) {
//     dropdowns.forEach((dropdownButton) => {
//       let dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`)
//       let targetIsDropdown = dropdown == event.target

//       if (dropdownButton == event.target) {
//         return
//       }

//       if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
//         dropdown.classList.remove('show')
//       }
//     })
//   }
// })

// Open links in mobiles
function handleSmallScreens() {
  document.querySelector('.navbar-toggler')
    .addEventListener('click', () => {
      let navbarMenu = document.querySelector('.navbar-menu')

      if (!navbarMenu.classList.contains('active')) {
        navbarMenu.classList.add('active')
      } else {
        navbarMenu.classList.remove('active')
      }
    })
}

handleSmallScreens();
