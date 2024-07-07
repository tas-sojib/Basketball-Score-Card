const homeEl = document.getElementById('home-el');
const guestEl = document.getElementById('guest-el');
let homeScore = 0;
let guestScore = 0;
let interval;
let elapsedTime = 0;

// Function to update the home team score display
function showHomeScore() {
    homeEl.textContent = homeScore;
}

// Function to update the guest team score display
function showGuestScore() {
    guestEl.textContent = guestScore;
}

// Functions to add points to the home team score
function addOneToHome() {
    homeScore++;
    showHomeScore();
    highlightLeader();
}

function addTwoToHome() {
    homeScore += 2;
    showHomeScore();
    highlightLeader();
}

function addThreeToHome() {
    homeScore += 3;
    showHomeScore();
    highlightLeader();
}

// Functions to add points to the guest team score
function addOneToGuest() {
    guestScore++;
    showGuestScore();
    highlightLeader();
}

function addTwoToGuest() {
    guestScore += 2;
    showGuestScore();
    highlightLeader();
}

function addThreeToGuest() {
    guestScore += 3;
    showGuestScore();
    highlightLeader();
}

// Function to reset scores to zero and reset display styles
function newGame() {
    homeScore = 0;
    guestScore = 0;
    initialStyle();
    showGuestScore();
    showHomeScore();
}

// Function to reset background styles for score displays
function initialStyle() {
    homeEl.style.backgroundColor = '';
    guestEl.style.backgroundColor = '';
}

// Function to highlight the leading team based on scores
function highlightLeader() {
    if (homeScore > guestScore) {
        homeEl.style.backgroundColor = '#00FFFF';
        guestEl.style.backgroundColor = '';
    } else if (homeScore < guestScore) {
        guestEl.style.backgroundColor = '#00FFFF';
        homeEl.style.backgroundColor = '';
    } else {
        initialStyle();
    }
}

// Function to start the game timer
function startTimer() {
    const startTime = new Date().getTime() - elapsedTime;  // Adjust for elapsed time

    if (interval) {
        holdTimer();  // Stop the timer if it's already running
    }

    // Start interval to update timer display every second
    interval = setInterval(function() {
        elapsedTime = new Date().getTime() - startTime;

        const totalSeconds = Math.floor(elapsedTime / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const formattedText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('clock').textContent = formattedText;

        // Stop timer if 10 minutes (600 seconds) have passed
        if (minutes === 10) {
            holdTimer();
        }
    }, 1000);  // Update timer every second
}

// Function to hold the game timer
function holdTimer() {
    clearInterval(interval); // Stop the timer
}

// Function to reset the game timer and display
function reset() {
    holdTimer();
    elapsedTime = 0; // Reset elapsed time

    document.getElementById('clock').textContent = '00:00';
}

