$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        console.log('form submitted')
        // prevent the form from doing a standard submission
        event.preventDefault()
        // make the post request to the API
        $.post('http://localhost:9090/login',
            $('#loginForm').serialize(), //data to be sent
            (response) => { // response from the server
                console.log(response)
            }
        )
    })
})