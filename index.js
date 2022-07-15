const mail = document.getElementById('mail')
const country = document.getElementById('country')
const zipcode = document.getElementById('zipcode')
const userPassword = document.getElementById('userPassword')
const confirmUserPassword = document.getElementById('confirmUserPassword')
const submit = document.querySelector('.submit')



mail.addEventListener('blur', (e)=> {
    e.target.setCustomValidity('')
    if (!e.target.validity.valid) {
        e.target.setCustomValidity('Please fill out with a correct email address')
        e.target.reportValidity()
    }
    else  {
        e.target.setCustomValidity('')
    }
 })

 country.addEventListener('input', (e)=> {
    e.target.setCustomValidity('')
    if (e.target.validity.ValueMissing) {
        e.target.setCustomValidity('Please input a country')
        e.target.reportValidity()
    }
    else  {
        e.target.setCustomValidity('')
    }
 })


 confirmUserPassword.addEventListener('blur', () => {
    confirmUserPassword.setCustomValidity('')
     if (confirmUserPassword.value != userPassword.value) {
         confirmUserPassword.setCustomValidity('Passwords do not match')
         confirmUserPassword.reportValidity()
     }
     else if (confirmUserPassword.value === userPassword.value) {
        confirmUserPassword.setCustomValidity('')
     }
 })





 




