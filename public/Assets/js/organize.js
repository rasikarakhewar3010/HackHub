document.getElementById('createHackathonForm').addEventListener('submit', function (e) {
    const dateInput = document.getElementById('date').value;
    const selectedDate = new Date(dateInput);
    const today = new Date();

    if (selectedDate <= today) {
        e.preventDefault();
        document.getElementById('dateError').innerText = "Date must be in the future.";
    }
    // Add further checks for other fields as needed
});


// Optional: Add client-side validation and dynamic events fetching
(function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();