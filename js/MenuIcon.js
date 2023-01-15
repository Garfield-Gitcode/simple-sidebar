const btnMenu = document.querySelector(".sidebar-menu");
const sidebar = document.querySelector(".sidebar");

const MenuIcon = () => {
    //Eventlisteners
    btnMenu.addEventListener("click", expandSidebar);

    function expandSidebar() {
        btnMenu.classList.toggle("active");
        sidebar.classList.toggle("active")
    }
}

export default MenuIcon;