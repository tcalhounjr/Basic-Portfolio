

function getCopyrightDate() {
    var lol = document.getElementsByClassName('footer')[0];

    var todaysDate = new Date();
    lol.innerHTML = 'Copyright ' + todaysDate.getFullYear();
}

getCopyrightDate();
