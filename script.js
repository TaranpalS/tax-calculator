document.getElementById('taxForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    calculateTax(); // Function to calculate and display tax
});

function calculateTax() {
    const grossIncome = parseFloat(document.getElementById('grossIncome').value);
    const extraIncome = parseFloat(document.getElementById('extraIncome').value);
    const deductions = parseFloat(document.getElementById('deductions').value);
    const ageGroup = document.getElementById('ageGroup').value;

    const totalIncome = grossIncome + extraIncome - deductions;
    let tax = 0;

    if (totalIncome > 800000) {
        const taxableAmount = totalIncome - 800000;
        switch (ageGroup) {
            case '<40':
                tax = taxableAmount * 0.30;
                break;
            case '40-59':
                tax = taxableAmount * 0.40;
                break;
            case '60+':
                tax = taxableAmount * 0.10;
                break;
            default:
                alert("Please select a valid age group.");
                return;
        }
    }

    displayResult(totalIncome, tax);
}

function displayResult(totalIncome, tax) {
    document.getElementById('result').innerHTML = `Total Income: ${totalIncome.toLocaleString()}<br>Tax Payable: ${tax.toLocaleString()}`;
    $('#resultModal').modal('show');
}
