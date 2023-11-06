// Código necesario para los íconos de los <select>
export default function selectCaret() {
    const selectElements = document.querySelectorAll(".form__select");
    const iconsUp = document.querySelectorAll(".form__select--icon-up");
    const iconsDown = document.querySelectorAll(".form__select--icon-down");
    const placeholder1 = "Seleccionar";
    const placeholder2 = "3 Cuotas sin interés";

    for (let i = 0; i < selectElements.length; i++){
        // Cuando se despliega el <select>
        selectElements[i].addEventListener("mousedown", function() {
            iconsDown[i].style.display = "none";
            iconsUp[i].style.display = "flex";
        });

        // Cuando se selecciona una opción
        selectElements[i].addEventListener("change", function() {
            if (selectElements[i].value !== placeholder1 || 
                selectElements[i].value !== placeholder2) {
                iconsDown[i].style.display = "flex";
                iconsUp[i].style.display = "none";
            }
        });

        // Cuando el <select> pierde el foco
        selectElements[i].addEventListener("focusout", function() {
            iconsUp[i].style.display = "none";
            iconsDown[i].style.display = "flex";
        })
    }
}
