window.onload = function() {
    // Cek apakah pengguna sudah login, jika sudah, alihkan ke halaman utama
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'home.html';  // Pengguna sudah login, alihkan ke halaman home
    }

    // Event listener untuk form login
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah reload form

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Cek apakah admin yang login
        if (email === "admin@gmail.com" && password === "admin123") {
            // Set status login di localStorage
            localStorage.setItem('isLoggedIn', 'true');

            // Redirect ke halaman home setelah login sukses
            window.location.href = 'home.html';
        } 
        // Cek apakah ada pengguna lain yang terdaftar
        else {
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Cari pengguna dengan email dan password yang sesuai
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                // Jika pengguna ditemukan, set status login di localStorage
                localStorage.setItem('isLoggedIn', 'true');

                // Redirect ke halaman home setelah login sukses
                window.location.href = 'home.html';
            } else {
                // Jika tidak ada yang cocok, tampilkan pesan error
                alert('Email atau password salah!');
            }
        }
    });
};
