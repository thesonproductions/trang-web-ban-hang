$(document).ready(function() {
    $('#submit-button').click(function() {
        Swal.fire({
            title: 'Good job!',
            titleText: 'Payment successful',
            text: 'Hooray , you have completed your payment. Thank you for using our products',
            icon: 'success',
            confirmButtonText: 'Cool',
            allowOutsideClick: true,
            confirmButtonText: 'Back To Shop',
            confirmButtonColor: '#B7546C',
            button: '100%',
        }).then(function() {
            window.location = "MenuCafe.html";
        });
    })

})