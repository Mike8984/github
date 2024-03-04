const button = document.querySelector('button')
const heading = document.getElementById('heading')

button.addEventListener('click', () => {
  heading.textContent = 'Clicked'
})
