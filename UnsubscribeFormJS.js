var x = document.getElementById("another-chance");
var y = document.getElementById("pause-sub");
var z = document.getElementById("survey");

const circles = document.querySelectorAll(".circle")
const progress = document.getElementsByClassName("progress-bar")[0]
const continue1 = document.getElementById("continue-btn")
const continue2 = document.getElementById("continuecancel-btn")

var currentActive = 1;
continue1.addEventListener("click", () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    updateBar();
    goto2nd();
})

continue2.addEventListener("click", () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    updateBar();
    goto3rd();

})


function updateBar() {
    //for each circle array element ex: circle 1,2,3,4
    circles.forEach((circle, idx) => {
        /*
            If the idx of the circle is less than the currentActive
            then these circles with these indexes will be considered 
            active
        */
        if (idx < currentActive) {
            circle.classList.add("active")
        }
        /*
            Else remove active class, incase user decides to go back
        */
        else {
            circle.classList.remove("active")
        }
    })
    /*
        Array of all elements that are in active class
    */
    const actives = document.querySelectorAll(".active")

    progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100) + '%'

    // what happends when you are in the beginning of the array
 
    // what happens when you are at the end of the array

}

function goto2nd() {
    x.style.left = "-900px";
    y.style.left = "0px";

}

function goto3rd() {
    y.style.left = "-900px";
    z.style.left = "0px";
}