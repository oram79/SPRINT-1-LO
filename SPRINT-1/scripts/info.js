
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var action = form.getAttribute('action');
        window.location.href = action;
    });
});

    