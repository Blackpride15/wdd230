const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.Menu');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open')
});


function displayVisitMessage() {
    // Get the current date
    var currentDate = new Date().getTime();

    // Check if the user has visited the page before
    if (localStorage.getItem('lastVisit')) {
        // Get the last visit date from localStorage
        var lastVisit = localStorage.getItem('lastVisit');
        lastVisit = parseInt(lastVisit);

        // Calculate the difference in milliseconds between current and last visit
        var timeDiff = currentDate - lastVisit;

        // Calculate the difference in days
        var daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

        // Display appropriate message based on time difference
        if (daysDiff === 0) {
            document.getElementById('sidebar').innerText = "Back so soon! Awesome!";
        } else {
            var message = daysDiff === 1 ? "day" : "days";
            document.getElementById('sidebar').innerText = "You last visited " + daysDiff + " " + message + " ago.";
        }
    } else {
        // First visit
        document.getElementById('sidebar').innerText = "Welcome! Let us know if you have any questions.";
    }

    // Store current date in localStorage for future visits
    localStorage.setItem('lastVisit', currentDate);
}

// Call the function when the page loads
displayVisitMessage();
