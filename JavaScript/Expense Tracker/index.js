const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");
let tA = 0;

function updateAmount(amount) {
    tA += parseInt(amount, 10);
    totalAmount.textContent = tA;
}

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('description').value.trim();
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    if (description && category && !isNaN(amount) && amount > 0) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${description}</td>
                            <td>${category}</td>
                            <td>${parseInt(amount, 10)}</td>`;
        expenseList.appendChild(newRow);
        updateAmount(amount);
        expenseForm.reset();
    } else {
        alert("Please fill all the fields correctly.");
    }
});