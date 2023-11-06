// La funcionalidad del menú desplegable para responsive.
export default function dropdownMenu() {
    const bar = document.querySelector(".navbar__bar");
    const dropdown = document.querySelector(".dropdown-menu");
    const none = getComputedStyle(dropdown);

    bar.addEventListener("click", () => {
        if (none.display === "none") {
            dropdown.style.display = "block";
        }
        else {
            dropdown.style.display = "none";
        }
    });
}
