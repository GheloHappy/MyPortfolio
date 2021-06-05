var toggle = true;

function toggleSidebar() {
    if (toggle){
        document.getElementById("sideBar").style.width = "8%";
        this.toggle = false;
    } else {
        document.getElementById("sideBar").style.width = "3%";
        this.toggle = true;
    }
}
