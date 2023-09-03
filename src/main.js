import './styles/index.page.css'

const form = document.getElementById('email-form')
const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const formData = new FormData(form)
  const emailData = formData.get('email')

  if (emailData && emailData.match(emailRegex)) {
    window.location.href = '/success/'
  } else {
    const input = document.getElementById('email-address')
    input.classList.add('invalid')
  }
})
