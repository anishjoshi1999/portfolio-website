const scriptURL = 'https://script.google.com/macros/s/AKfycbwJuk0WO5Cwvu602mTg5uqFTMGSwoSy5HHwCETc6cmnjiig2YpcHbD7nodQe_UCcrs/exec'
const form = document.forms['formName']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})
