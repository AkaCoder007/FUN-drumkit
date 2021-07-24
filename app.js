window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
    const key = document.querySelector(`.pad[data-key= "${e.keyCode}"]`);
    //  console.log(audio);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(key);
    key.style.transform = "scale(1.1)";
    key.classList.add("playing");

});
window.addEventListener('keyup', function(e) {

    const key = document.querySelector(`.pad[data-key= "${e.keyCode}"]`);
    key.style.transform = "scale(1)";
    key.classList.remove("playing");


});
const continuosMusic = function(element) {
    const audio = element.querySelector("audio");
    audio.play();

};
// let repeatedMusic;
// let flag = 1;
// const pad = document.querySelectorAll(`.pad`);
// pad.forEach(element => {
//     element.addEventListener('click', function() {

//             flag++;

//             console.log("clicked");
//             element.classList.toggle("playing");
//             element.classList.toggle("clicked");
//             const audio = element.querySelector("audio");
//             audio.play();
//             //   console.log(this[data - key]);
//             repeatedMusic = setInterval(continuosMusic, 50, element);
//             console.log(flag);


//         }

//     )
// });

// if (flag % 2 == 1) {

//     console.log(" odd no is reached:" + flag);
//     clearInterval(repeatedMusic);

// }