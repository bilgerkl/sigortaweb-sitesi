document.getElementById("odemeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun varsayılan gönderimini durdur
  
    var kartNumarasi = document.getElementById("kartnumarasi").value;
    var kartSahibi = document.getElementById("kartsahibi").value;
    var sonKullanma = document.getElementById("sonkullanma").value;
    var cvv = document.getElementById("CVV").value;
  
    var creditCard = {
      kartNumarasi: kartNumarasi,
      kartSahibi: kartSahibi,
      sonKullanma: sonKullanma,
      cvv: cvv
    };
  
    var kartBilgisi = JSON.stringify(creditCard);
    localStorage.setItem('Kartlar', kartBilgisi);
  });
  