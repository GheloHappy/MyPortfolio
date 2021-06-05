var toggle = true;

function toggleSidebar() {
    if (toggle){
        document.getElementById("sideBar").style.width = "10%";
        this.toggle = false;
    } else {
        document.getElementById("sideBar").style.width = "5%";
        this.toggle = true;
    }
}
