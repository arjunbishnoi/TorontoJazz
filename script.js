// script.js (For tickets.html)

// Wait for the DOM to load before executing
document.addEventListener('DOMContentLoaded', () => {

    // Get the ticket form element
    const form = document.getElementById('ticket-form');

    if (!form) return; // Exit if not on the tickets page

    // Ticket prices for General and VIP admission
    const prices = { general: 100, vip: 250 };

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get user input values
        const ticketType = document.getElementById('ticket-type').value;
        const quantity = parseInt(document.getElementById('ticket-quantity').value);
        const creditCard = document.getElementById('credit-card').value;

        // Validate quantity (minimum 1 ticket)
        if (quantity < 1) {
            alert('Please select at least 1 ticket.');
            return;
        }

        // Validate credit card (exactly 6 digits)
        if (!/^\d{6}$/.test(creditCard)) {
            alert('Please enter a valid 6-digit credit card number.');
            return;
        }

        // Calculate order details
        const price = prices[ticketType];
        const subtotal = price * quantity;
        const tax = Math.round(subtotal * 0.13 * 100) / 100; // 13% tax, rounded to 2 decimals
        const total = subtotal + tax;

        // Update the order summary section
        document.getElementById('summary-quantity').textContent = quantity;
        document.getElementById('summary-price').textContent = price.toFixed(2);
        document.getElementById('summary-subtotal').textContent = subtotal.toFixed(2);
        document.getElementById('summary-tax').textContent = tax.toFixed(2);
        document.getElementById('summary-total').textContent = total.toFixed(2);

        // Show the order summary
        document.getElementById('order-summary').style.display = 'block';
    });
});