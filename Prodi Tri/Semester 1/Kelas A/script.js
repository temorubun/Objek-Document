function kunciJawaban() {
    const input = document.form.jawaban.value;
    if (input === "uts") {
      document.getElementById("hasil").innerHTML = "Semester 1 Kelas A Belum UTS <br> File UTS Kosong";
    } else if (input === "uas") {
      document.getElementById("hasil").innerHTML = "Semester 1 Kelas A Belum UAS <br> File UAS Kosong";
    }
}
  