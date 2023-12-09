// JavaScript source code
'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});

function toggleSvgHref() {
    // Get the <use> element
    var useElement = document.getElementById('menuIcon');

    // Check the current href and toggle it
    if (useElement.getAttributeNS('http://www.w3.org/1999/xlink', 'href') === '/icons.svg#gg_menu-left-icon') {
        useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/icons.svg#icon-x'); // Change to another icon
    } else {
        useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/icons.svg#gg_menu-left-icon'); // Change back to the original icon
    }
}

// Add click event listener to the button
document.getElementById('toggleButton').addEventListener('click', toggleSvgHref);