
/// Function to allow user to be redirected to conformation page!

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('submit button');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var action = form.getAttribute('action');
        window.location.href = action;
    });
});