var toggle = true;
var toggleBG = true;

function toggleSidebar() {
    if (toggle){
        document.getElementById("sideBar").style.width = "10%";
        this.toggle = false;
    } else {
        document.getElementById("sideBar").style.width = "5%";
        this.toggle = true;
    }
}

function changeBG() {
    if (toggleBG){
        document.body.style.backgroundColor = "magenta";
        document.getElementById("name").style.color = "#105bfd";
        this.toggleBG = false;
    } else {
        document.getElementById("name").style.color = "rgb(4, 33, 44)";
        document.body.style.backgroundColor = "rgb(245, 239, 245)";
        this.toggleBG = true;    
    }
}