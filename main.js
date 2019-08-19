new hoverEffect({
    parent: document.querySelector(".distortion"),
    intensity:0.2,
    image1:"../img/prewiew.png",
    image2:"../img/after.png",
    displacementImage: "../img/heightMap.png"
})

function openNav() {
document.getElementById("myNav").style.width = "100%";

}

function closeNav() {
document.getElementById("myNav").style.width = "0%";
 }