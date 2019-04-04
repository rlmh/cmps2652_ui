$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        console.log('form submitted')
        // prevent the form from doing a standard submission
        event.preventDefault()
        // make the post request to the API
        $.post('http://localhost:9090/login',
            $('#loginForm').serialize(), //data to be sent
            (response) => { // response from the server
                if (response.ok) {
                    localStorage.setItem('token', response.token)
                    window.location.replace('http://localhost:8000/dashboard.html')
                }
            }
        )
    })
})