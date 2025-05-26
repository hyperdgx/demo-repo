let myBTN = document.getElementById("myBTN");
let IconChange = document.getElementById("IconChange");

function myBTNFunc() {
    if (myBTN.innerHTML === "Follow") {
        myBTN.innerHTML = "Unfollow";
        myBTN.style.background = "red";
        IconChange.innerHTML = "check_box_outline_blank";
    } else {
        myBTN.innerHTML = "Follow";
        myBTN.style.background = "green";
        IconChange.innerHTML = "check_box";
    }
}








