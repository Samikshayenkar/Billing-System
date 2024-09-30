document.addEventListener("DOMContentLoaded", () => {
    const itemSelect = document.getElementById("item");
    const orderTableBody = document.querySelector("#orderTable tbody");
    const totalAmountSpan = document.getElementById("totalAmount");
    const addItemButton = document.getElementById("addItem");
    const clearOrderButton = document.getElementById("clearOrder");

    let total = 0;

    addItemButton.addEventListener("click", () => {
        const selectedItem = itemSelect.options[itemSelect.selectedIndex];
        const itemName = selectedItem.text;
        const itemPrice = parseFloat(selectedItem.value);

        // Add 
        const row = document.createElement("tr");
        row.innerHTML = `<td>${itemName}</td><td>${itemPrice}</td>`;
        orderTableBody.appendChild(row);

        total += itemPrice;
        totalAmountSpan.textContent = total.toFixed(2);
    });

    clearOrderButton.addEventListener("click", () => {
        orderTableBody.innerHTML = "";
        total = 0;
        totalAmountSpan.textContent = total.toFixed(2);
    });
});
