// scripts.js

// This function generates a random color code
document.addEventListener('DOMContentLoaded', () => {
    const themeLinks = document.querySelectorAll('.dropdown-content a');

    themeLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const theme = link.getAttribute('data-theme');
            document.body.className = theme;
        });
    });

    // Function to toggle the dropdown menu on small screens
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');

    dropbtn.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = (e) => {
        if (!e.target.matches('.dropbtn')) {
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            }
        }
    };
});


// This function generates a random color code
document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const theme = event.target.getAttribute('data-theme');
            document.body.className = theme;
            dropdownBtn.textContent = event.target.textContent;
        });
    });
});