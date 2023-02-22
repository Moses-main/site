// Toggle menu icon
function myFunction(x) {
    x.classList.toggle("change");
}


// Function for small screen sized 
// devices to control the navigation
// bars and button

function archiveDrop() {
    var dropContent = document.getElementById('archiveNav2').style;
    if (dropContent.display == 'block') {
        dropContent.display = 'none';
    } else {
        dropContent.display = 'block';
    }
}

// second part of the engine
var archiveButton = document.getElementById('archiveToggle');
archiveButton.addEventListener('click', function () {
    myFunction(this);
    archiveDrop();
}, false);
