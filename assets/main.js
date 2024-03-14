

document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggleBtn = document.querySelector('.nav-toggle-btn');

    navToggleBtn.addEventListener('click', function() {
        navMenu.style.left = navMenu.style.left === '0%' ? '-100%' : '0%';
    });


    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.style.left = '-100%';
        });
    });
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
  }

// Function to check if the viewport width matches a mobile device width
// Function to check if the viewport width is below a certain threshold, indicating a mobile device
function isMobileDevice() {
    return window.innerWidth < 768; // Adjust this threshold as needed
}




