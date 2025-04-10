document.addEventListener('DOMContentLoaded', function() {
    // Toggle custom amount field
    const amountRadios = document.querySelectorAll('input[name="amount"]');
    const customAmountField = document.getElementById('customAmount');
    
    amountRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.id === 'amountOther') {
                customAmountField.style.display = 'block';
                customAmountField.required = true;
            } else {
                customAmountField.style.display = 'none';
                customAmountField.required = false;
            }
        });
    });
    
    // Form submission
    const donationForm = document.getElementById('donationForm');
    donationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(donationForm);
        const donationData = {};
        formData.forEach((value, key) => {
            donationData[key] = value;
        });
        
        // In a real implementation, you would send this data to your server
        console.log('Donation data:', donationData);
        
        // Show thank you message
        alert('Thank you for your donation to Tree of Life Children\'s Home! We appreciate your support.');
        donationForm.reset();
        customAmountField.style.display = 'none';
    });
});