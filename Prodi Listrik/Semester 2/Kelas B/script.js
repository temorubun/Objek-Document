function kunciJawaban() {
  const input = document.form.jawaban.value;
  if (input === "uts") {
    document.getElementById("hasil").innerHTML = "Semester 2 Kelas B Belum UTS <br> File UTS Kosong";
  } else if (input === "uas") {
    document.getElementById("hasil").innerHTML = "Semester 2 Kelas B Belum UAS <br> File UAS Kosong";
  }
}
