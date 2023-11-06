// La funcionalidad del menú desplegable para responsive.
export default function dropdownMenu() {
    const bar = document.querySelector(".navbar__bar");
    const dropdown = document.querySelector(".dropdown-menu");

    bar.addEventListener("click", () => {
        if (dropdown.style.display === "none") {
            dropdown.style.display = "block";
        }
        else {
            dropdown.style.display = "none";
        }
    });
}
