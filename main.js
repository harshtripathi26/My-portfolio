
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

const video = document.querySelector('.background-video');
let isInteracting = false; // Tracks user interaction (mousemove/scroll)
let interactionTimeout; // Timeout to pause the video on inactivity

// Function to stop video playback
const stopVideo = () => {
    if (!video.paused) {
        video.pause();
    }
};

// Function to handle user interaction
const handleInteraction = () => {
    clearTimeout(interactionTimeout); // Reset timeout
    if (!isInteracting) {
        isInteracting = true;
        video.play(); // Play the video when interaction is detected
    }
    // Pause the video after 300ms of no interaction
    interactionTimeout = setTimeout(() => {
        isInteracting = false;
        stopVideo();
    }, 800);
};

// Event listeners for mouse movement and scrolling
document.addEventListener('mousemove', handleInteraction);
document.addEventListener('scroll', handleInteraction);






// const video = document.querySelector('.background-video');
//         let isCursorMoving = false;

//         // Start playing video on mouse move
//         document.addEventListener('mousemove', () => {
//             if (!isCursorMoving) {
//                 isCursorMoving = true; // Mark cursor as moving
//                 video.play(); // Play the video
//             }
//         });

//         // Stop playing video after no movement
//         let stopTimeout;
//         document.addEventListener('mousemove', () => {
//             clearTimeout(stopTimeout); // Clear any existing stop timeout
//             stopTimeout = setTimeout(() => {
//                 isCursorMoving = false; // Mark cursor as stopped
//                 video.pause(); // Pause the video
//             }, 800); // Pause after 200ms of inactivity (adjustable)
//         });



// // const video = document.querySelector('.background-video');

// //         // Event listener to play video on mouse move
// //         document.addEventListener('mousemove', () => {
// //             if (video.paused) {
// //                 video.play();
// //             }
// //         });