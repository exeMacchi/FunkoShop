// Aumentar o disminuir la cantidad de un input
export default function itemQuantity() {
    const input = document.querySelector("#item-quantity");
    const plusButton = document.querySelector("#plus-button");
    const minusButton = document.querySelector("#minus-button");

    // Cuando se haga click en el botón +
    plusButton.addEventListener("click", () => input.value++);

    // Cuando se haga click en el botón -
    minusButton.addEventListener("click", () => {
        if (input.value > 0) {
            input.value -= 1;
        }
    });
}
