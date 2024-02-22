document.addEventListener('DOMContentLoaded', function() {
   
    document.getElementById('customNavbar').style.height = '80px'; // Adjust the height as needed


    var searchForm = document.getElementById('customSearchForm');
    searchForm.style.display = 'flex';
    searchForm.style.justifyContent = 'center';
    searchForm.style.alignItems = 'center';
    searchForm.style.height = '100%';

    var navbarNav = document.querySelector('.navbar-nav');
    navbarNav.style.marginLeft = 'auto';
});
