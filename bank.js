document.addEventListener('DOMContentLoaded', function () {
    let balance = 0;

    const balanceDisplay = document.getElementById('balance');
    const amountInput = document.getElementById('amount');
    const depositBtn = document.getElementById('depositBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');

    function updateBalanceDisplay() {
        balanceDisplay.textContent = `$${balance.toFixed(2)}`;
    }

    depositBtn.addEventListener('click', function () {
        const amount = parseFloat(amountInput.value);
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            updateBalanceDisplay();
        }
        amountInput.value = '';
    });

    withdrawBtn.addEventListener('click', function () {
        const amount = parseFloat(amountInput.value);
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            balance -= amount;
            updateBalanceDisplay();
        } else if (amount > balance) {
            alert('Insufficient balance');
        }
        amountInput.value = '';
    });
});
