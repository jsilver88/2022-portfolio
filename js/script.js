const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.top = '0'
  } else {
    navbar.style.top = '-5rem'
  }
})

// Dynamically update the year
const date = document.getElementById('date')

date.textContent = new Date().getFullYear()
