var toggle = true;
var toggleBG = true;

function changeBG() {
    if (toggleBG){
        document.body.style.backgroundColor = "magenta";
        document.getElementById("name").style.color = "#105bfd";
        document.getElementById("ball").style.backgroundColor = "red";
        document.getElementById("lightning").style.display = "block";
        document.getElementById("lightning").style.position = "absolute";
        this.toggleBG = false;
    } else {
        document.getElementById("name").style.color = "rgb(4, 33, 44)";
        document.body.style.backgroundColor = "rgb(194, 117, 117)";
        document.getElementById("ball").style.backgroundColor = "radial-gradient(#7cb9ff, rgba(132, 113, 238, 0.432))";
        document.getElementById("lightning").style.display = "none";
        this.toggleBG = true;
    }
}

function toggleSidebar() {
    if (toggle){
        document.getElementById("sideBar").style.width = "10vw";
        this.toggle = false;
    } else {
        document.getElementById("sideBar").style.width = "5vw";
        this.toggle = true;
    }
}
