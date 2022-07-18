const mail = document.getElementById('mail')
const country = document.getElementById('country')
const zipcode = document.getElementById('zipcode')
const userPassword = document.getElementById('userPassword')
const confirmUserPassword = document.getElementById('confirmUserPassword')
const submit = document.getElementById('submitButton')


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

 country.addEventListener('blur', (e)=> {
    e.target.setCustomValidity('')
    if (e.target.validity.valueMissing || e.target.value === '') {
        console.log(e.target.validity.ValueMissing)
        e.target.setCustomValidity('Please input a country')
        e.target.reportValidity()
    }
    else  {
        console.log(e.target.validity.ValueMissing)
        e.target.setCustomValidity('')
    }
 })

 
 let matchPasswords = null

 confirmUserPassword.addEventListener('blur', () => {
    confirmUserPassword.setCustomValidity('')
     if (confirmUserPassword.value != userPassword.value) {
         confirmUserPassword.setCustomValidity('Passwords do not match')
         confirmUserPassword.reportValidity()
         matchPasswords = false
         console.log(matchPasswords)
         return matchPasswords
         
     }
     else if (confirmUserPassword.value === userPassword.value) {
        confirmUserPassword.setCustomValidity('')
        matchPasswords = true
        console.log(matchPasswords)
        return matchPasswords
     }
 })

 submit.onclick = () => {
     if (
         mail.validity.valid &&
         !country.validity.valueMissing &&
         country.value != '' &&
         zipcode.validity.valid &&
         matchPasswords === true

     ) {
         alert('Hi five! You filled out correctly all the blanks!')
     } 
     
     else {
         alert('Some of the blanks do not meet the expected criteria')
     }
 }







 




