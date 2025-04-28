document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman setelah submit

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validasi input
    if (!fullName || !email || !password) {
        alert('Semua kolom harus diisi!');
        return;
    }

    // Ambil data pengguna yang ada di localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Cek apakah email sudah terdaftar
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('Email sudah terdaftar!');
        return;
    }

    // Simpan data pengguna baru ke dalam array users
    const user = {
        name: fullName,
        email: email,
        password: password
    };

    users.push(user); // Menambahkan pengguna baru ke dalam array
    localStorage.setItem('users', JSON.stringify(users)); // Menyimpan array ke localStorage

    alert('Akun berhasil didaftarkan!');
    // Redirect ke halaman login setelah pendaftaran
    window.location.href = 'index.html';
});
