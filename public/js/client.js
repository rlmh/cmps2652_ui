
const getMenu = () => {
    // return new Promise((resolve, reject) => {
        const headers = {
            'x-access-token': localStorage.getItem('token')
        }
        $.ajax({
            url: 'http://localhost:9090/menu',
            headers,
            statusCode: {
                500: function(response) {
                    console.log(response) 
                }
            }
        }).done(function(response) {
            if (response.ok) {
                document.getElementById('userRole').innerHTML = response.data.role
                response.data.menu.map(item => {
                    document.getElementById('menu').innerHTML += item.menu
                });
            }
        })
}

$(document).ready(function() {
    getMenu()
})