window.onload = function() {
    // Cek apakah pengguna sudah login, jika sudah, tampilkan navbar logout dan sembunyikan login
    if (localStorage.getItem('isLoggedIn') === 'true') {
        showLogoutNavbar(); // Tampilkan navbar logout
        enableNavbar();
    } else {
        showLoginNavbar(); 
        disableNavbar();
        // Tampilkan navbar login
    }

    // Menangani klik tombol login
    document.getElementById('loginButton').addEventListener('click', function() {
        
        showLogoutNavbar(); // Update navbar ke status logout
        window.location.href = 'index.html';
    });

    // Menangani klik tombol logout
    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.setItem('isLoggedIn', 'false');
        logout();
        showLoginNavbar(); // Update navbar ke status login
    });
};

// Fungsi untuk menampilkan navbar login
function showLoginNavbar() {
    document.getElementById('loginItem').style.display = 'block';
    document.getElementById('logoutItem').style.display = 'none';
}

// Fungsi untuk menampilkan navbar logout
function showLogoutNavbar() {
    document.getElementById('loginItem').style.display = 'none';
    document.getElementById('logoutItem').style.display = 'block';
}

function disableNavbar() {
    // Menonaktifkan semua link di navbar selain tombol login
    const navbarLinks = document.querySelectorAll('.nav-item:not(#loginItem), .dropdown-toggle');
    navbarLinks.forEach(link => {
        link.classList.add('disabled');
        link.setAttribute('aria-disabled', 'true');  // Menonaktifkan elemen navbar
    });
}

function enableNavbar() {
    // Mengaktifkan semua link di navbar selain tombol login
    const navbarLinks = document.querySelectorAll('.nav-item, .dropdown-toggle');
    navbarLinks.forEach(link => {
        link.classList.remove('disabled');
        link.setAttribute('aria-disabled', 'false');  // Mengaktifkan elemen navbar
    });
}
function logout() {
    // Hapus status login dari localStorage
    localStorage.setItem('isLoggedIn', 'false');

    // Tampilkan navbar login dan sembunyikan navbar logout
    showLoginNavbar();

    // Redirect ke halaman login (misalnya index.html)
    window.location.href = 'index.html';
}