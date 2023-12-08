var passwordPattern = /^\d{8,15}$/;

document.getElementById("registerForm").addEventListener("submit", function(event) {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Şifreniz doğrulanamadı. Lütfen aynı şifreyi giriniz.");
    event.preventDefault(); // Formun gönderimini engelle
  } else {
    if (!passwordPattern.test(password)) {
      alert("Şifreniz belirtilen kriterlere uymalıdır: minimum 8, maksimum 15 karakter olmalı ve yalnızca sayı girişi yapılmalıdır.");
      event.preventDefault(); // Formun gönderimini engelle
    } else {
      var fullName = document.getElementById('loginUsername').value;
      var lastname = document.getElementById('lastname').value;
      var username = document.getElementById('username').value;
      var email = document.getElementById('email').value;

      var eskiKullaniciJSON = localStorage.getItem('kullanici');
      var eskiKullaniciBilgileri = eskiKullaniciJSON ? JSON.parse(eskiKullaniciJSON) : [];

      var kullaniciVarMi = eskiKullaniciBilgileri.some(function (kullanici) {
        return kullanici.username === username || kullanici.email === email;
      });

      if (kullaniciVarMi) {
        alert('Eksik / Yanlış bilgi girişi gerçekleştirilmiştir.');
        event.preventDefault();
      } else {
        var yeniKullaniciBilgileri = { 
          fullName: fullName,
          lastname :lastname,
          username: username,
          email: email,
          password: password
        };

        eskiKullaniciBilgileri.push(yeniKullaniciBilgileri);
        var kullaniciJSON = JSON.stringify(eskiKullaniciBilgileri);
        localStorage.setItem('kullanici', kullaniciJSON);

        var popup = document.getElementById('popup');
        popup.style.display = 'block';
      }
    }
  }
});

var closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', function () {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
});
