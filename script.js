function hasil() {
    const prodi                 = document.form.prodi.value;
    const semester              = document.form.semester.value;
    const kelas                 = document.form.kelas.value;
    const password              =`${prodi}${semester}${kelas}`;
    console.log(password)
    const inputPassword         = prompt("Enter password:");
    const url                   =`Prodi ${prodi}/Semester ${semester}/Kelas ${kelas}/${prodi}${semester}${kelas}.html`
    if(!checkValidity(prodi,semester,kelas)) {console.log(prodi,semester,kelas)}
    if (inputPassword !== password){alert("Incorrect password, please try again.");return}
    window.open(url);
}

function checkValidity(prodi, semester, kelas) {
    const validPrograms = ["Tri", "Listrik", "Mesin", "Sipil", "Tambang"];
    const validSemesters = ["1", "2", "3", "4", "5", "6"];
    const validClasses = ["A", "B"];
    return validPrograms.includes(prodi) && validSemesters.includes(semester) && validClasses.includes(kelas);
}

