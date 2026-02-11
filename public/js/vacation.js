// vacation.js - Client-side form validation

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const citySelect = document.getElementById('city');
    const travelersInput = document.getElementById('travelers');
    const button = document.getElementById('vacation-button');

    // Add error spans next to labels (using existing empty <span>s)
    const destSpan = document.querySelector('.destination-row span');
    const travelersLabel = document.querySelector('.two-col-row label[for="travelers"]');
    const travelersSpan = document.createElement('span');
    travelersSpan.className = 'error';
    travelersSpan.style.display = 'none';
    travelersLabel.parentNode.insertBefore(travelersSpan, travelersLabel.nextSibling);

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => {
            error.style.display = 'none';
            error.textContent = '';
        });
    }

    function showError(span, message) {
        span.textContent = message;
        span.style.display = 'inline';
        span.style.color = 'red';
        span.style.fontSize = '0.9rem';
        span.style.marginTop = '0.25rem';
    }

    form.addEventListener('submit', function(e) {
        clearErrors();

        let isValid = true;

        // Validate destination
        if (!citySelect.value) {
            showError(destSpan, 'Please select a destination.');
            isValid = false;
        }

        // Validate travelers
        const travelers = parseInt(travelersInput.value);
        if (isNaN(travelers) || travelers <= 0 || travelers > 10) {
            showError(travelersSpan, 'Number of travelers must be 1-10.');
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        }

        return isValid;
    });

    // Clear specific error on input focus/change
    citySelect.addEventListener('change', () => {
        destSpan.style.display = 'none';
    });

    travelersInput.addEventListener('input', () => {
        travelersSpan.style.display = 'none';
    });
});
