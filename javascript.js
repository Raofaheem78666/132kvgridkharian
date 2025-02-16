// Function to toggle the status of transformers and their connected components
function toggleStatus(element) {
    const currentStatus = element.classList.contains('on');
    const newStatus = currentStatus ? 'off' : 'on';
    
    // Update the status of the transformer
    element.classList.remove(currentStatus ? 'on' : 'off');
    element.classList.add(newStatus);
    element.innerText = newStatus.toUpperCase();

    // Find the corresponding incoming connection
    const transformerDiv = element.closest('.transformer');
    const incomingDiv = transformerDiv.nextElementSibling; // The next sibling should be the incoming connection
    const incomingStatus = incomingDiv.querySelector('.status');
    const feeders = incomingDiv.querySelectorAll('ul li');

    // Update the incoming connection and feeders based on the transformer status
    if (newStatus === 'off') {
        // Turn off incoming and all feeders
        incomingStatus.classList.remove('on');
        incomingStatus.classList.add('off');
        incomingStatus.innerText = 'OFF';

        feeders.forEach(feeder => {
            const feederStatus = feeder.querySelector('.feeder-status');
            feederStatus.classList.remove('on');
            feederStatus.classList.add('off');
            feederStatus.innerText = 'OFF';
        });
    } else {
        // If transformer is turned on, ensure incoming is also on
        incomingStatus.classList.remove('off');
        incomingStatus.classList.add('on');
        incomingStatus.innerText = 'ON';
    }
}

// Function to toggle the status of feeders
function toggleFeeder(element) {
    const feederStatus = element.querySelector('.feeder-status');
    const currentStatus = feederStatus.classList.contains('on');
    const newStatus = currentStatus ? 'off' : 'on';

    // Update the feeder status
    feederStatus.classList.remove(currentStatus ? 'on' : 'off');
    feederStatus.classList.add(newStatus);
    feederStatus.innerText = newStatus.toUpperCase();

    // Check if the corresponding transformer is off
    const transformerDiv = element.closest('.incoming').previousElementSibling; // Get the previous transformer
    const transformerStatus = transformerDiv.querySelector('.status');

    if (transformerStatus.classList.contains('off')) {
        // If the transformer is off, turn the feeder off as well
        feederStatus.classList.remove('on');
        feederStatus.classList.add('off');
        feederStatus.innerText = 'OFF';
    }
}

// Function to update the live clock
function updateClock() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('liveClock').innerText = now.toLocaleTimeString([], options);
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Event listener for dark mode toggle button
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

// Update the clock every second

document.getElementById('navigateButton').addEventListener('click', function() {
    window.location.href = 'New cant.html'; // Change this to your next page URL
   
});
document.getElementById('dhoria').addEventListener('click', function() {
    window.location.href = 'Old Dhoria.html'; // Change this to your next page URL
   
});

document.getElementById('navigatethq').addEventListener('click', function() {
    window.location.href = 'thq.html'; // Change this to your next page URL
   
});
document.getElementById('city').addEventListener('click', function() {
    window.location.href = 'k.city.html'; // Change this to your next page URL
   
});