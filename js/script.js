function handleLogin(event) {
  event.preventDefault(); // cegah reload halaman
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user && pass) {
    // jika login berhasil, arahkan ke dashboard.html
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau password tidak boleh kosong!");
  }
}
