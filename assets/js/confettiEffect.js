let confettiRunning = true;

//Start effect
const startConfetti = () => {
    confetti.start();
};

//Stop effect
const stopConfetti = () => {
    confetti.stop();
    confettiRunning = false;
};

//Continuous effect
const runConfetti = () => {
    if (confettiRunning) {
        startConfetti();
        setTimeout(runConfetti, 40000);
    }
};

//call function
runConfetti();

//Stop effect when user clicks on a link
const buttons = document.querySelectorAll('a[href^="#"]');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        stopConfetti();
    });
});

//Start effect when user clicks on home button
const homeButton = document.querySelector('a[href="#"]');
homeButton.addEventListener('click', () => {
    confettiRunning = true;
    runConfetti();
});