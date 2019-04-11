
const isUserAuthenticated = () => {
    // return new Promise((resolve, reject) => {
        const headers = {
            'x-access-token': localStorage.getItem('token')
        }
        console.log(headers)
        $.ajax({
            url: 'http://localhost:9090/isLoggedin',
            headers,
            statusCode: {
                500: function() {
                    window.location.href = 'http://localhost:8000' 
                }
            }
        }).done(function(response) {
            if(!response.ok) {
                window.location.href = 'http://localhost/8000' 
            }
        })
}

function logout() {
    localStorage.removeItem('token')
    window.location.href = 'http://localhost:8000'
}