const formName = 'entry.2005620554'
const formPhone = 'entry.1166974658'
const formEmail = 'entry.1045781291'
const formMessage = 'entry.839337160'
const googleFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfdij6qu85dv08XEpet7xexqGWvRPVrkTlXliEUswopl-aTNA/formResponse'

async function formSubmit({ name, phone, email, message }: any) {
  var formData = new FormData()

  formData.append(formName, name)
  formData.append(formPhone, phone)
  formData.append(formEmail, email)
  formData.append(formMessage, message)

  try {
    const response = await fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    })

    return response
  } catch (error) {
    console.log('Form Submission Error: ', error)

    alert('There was an issue submitting your form.')
  }
}

export default formSubmit
