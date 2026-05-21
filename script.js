function welcomeAlert() {
  alert("Welcome to Leo's supermarket!");
}
function tampil() {
    let nama = document.getElementById("nama").value;
    let belanjaan = document.getElementById("belanjaan").value;

  
    let gender = "";
    let radios = document.getElementsByName('gender');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
            break;
        }
    }
    if (gender === "") {
        gender = "(belum dipilih)";
    }

 
    let hari = document.querySelector('input[name="hari"]:checked');
    let metodePembayaran = "";
    if (hari) {
        metodePembayaran = hari.value;
    } else {
        metodePembayaran = "(belum dipilih)";
    }


    document.getElementById("hasil").innerHTML = `
        <b>Nama:</b> ${nama} <br>
        <b>Jenis Kelamin:</b> ${gender} <br>
        <b>Belanjaan:</b> ${belanjaan} <br>
        <b>Metode Pembayaran:</b> ${metodePembayaran} <br>
    `;
}

function resetForm() {
    document.getElementById("formku").reset();
    document.getElementById("hasil").innerHTML = "Data anda harus ditampilkan di sini...";
}