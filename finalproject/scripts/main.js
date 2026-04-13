/* ================= RESERVATION FORM ================= */
const reservationForm = document.querySelector("form[action='thankyou.html']");

reservationForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.name.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const date = this.date.value;
    const guests = this.guests.value;

    const params = new URLSearchParams({
        type: "reservation",
        name,
        email,
        phone,
        date,
        guests
    });

    window.location.href = "thankyou.html?" + params.toString();
});


/* ================= DELIVERY ORDER ================= */
const deliveryForm = document.getElementById("deliveryForm");

if (deliveryForm) {
    deliveryForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("dName").value;
        const phone = document.getElementById("dPhone").value;
        const meal = document.getElementById("meal").selectedOptions[0].text;
        const quantity = document.getElementById("quantity").value;
        const delivery = document.getElementById("delivery").selectedOptions[0].text;
        const total = document.getElementById("totalPrice").textContent;

        const params = new URLSearchParams({
            type: "order",
            name,
            phone,
            meal,
            quantity,
            delivery,
            total
        });

        window.location.href = "thankyou.html?" + params.toString();
    });
}


/* ================= PRICE CALCULATION ================= */
const mealSelect = document.getElementById("meal");
const quantityInput = document.getElementById("quantity");
const deliverySelect = document.getElementById("delivery");
const totalDisplay = document.getElementById("totalPrice");

function calculateTotal() {
    if (!mealSelect) return;

    const mealPrice = parseInt(mealSelect.value);
    const quantity = parseInt(quantityInput.value);
    const deliveryFee = parseInt(deliverySelect.value);

    const total = (mealPrice * quantity) + deliveryFee;
    totalDisplay.textContent = total;
}

if (mealSelect) {
    mealSelect.addEventListener("change", calculateTotal);
    quantityInput.addEventListener("input", calculateTotal);
    deliverySelect.addEventListener("change", calculateTotal);

    calculateTotal();
}