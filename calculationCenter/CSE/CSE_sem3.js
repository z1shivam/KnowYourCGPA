function calculateCGPA() {
    const getCredits = (marks) => marks > 100 ? 0 : marks > 90 ? 10 : marks > 80 ? 9 : marks > 70 ? 8 : marks > 60 ? 7 : marks > 50 ? 6 : marks > 40 ? 5 : marks > 30 ? 4 : marks > 20 ? 3 : marks > 10 ? 2 : marks > 0 ? 1 : 0;

    const getValue = (name) => parseFloat(document.getElementsByName(name)[0].value);

    const subjects = [
      { c: 3, m: "PCL2042_m" }, { c: 4, m: "CSL2041_m" }, { c: 4, m: "CSL2061_m" },
      { c: 3, m: "CSL2022_m" }, { c: 1, m: "CSP2022_m" }, { c: 3, m: "CSL2051_m" },
      { c: 1, m: "CSP2051_m" }, { c: 1, m: "CSC2001_m" }
    ];

    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach((subject) => {
      totalPoints += subject.c * getCredits(getValue(subject.m));
      totalCredits += subject.c;
    });

    const sgpaPointer = (totalPoints / totalCredits).toFixed(2);
    const toggleButton = document.getElementById("toggleButton");

    if (toggleButton.checked) {

      const inputElement = document.getElementById('cgpaInput');
      const inputValue = inputElement.value.trim();

      if (inputValue === '') {
        document.getElementById("displaySGPA").textContent = `SGPA: ${sgpaPointer}`;}
        else {
        let previousCGPA = parseFloat(document.getElementById('cgpaInput').value);
        let newCGPA = ((previousCGPA * 43 + Number(sgpaPointer)*20) / 63).toFixed(2);

        document.getElementById("displaySGPA").textContent = `SGPA: ${sgpaPointer} - CGPA: ${newCGPA}`;

      }}
      else document.getElementById("displaySGPA").textContent = `SGPA: ${sgpaPointer}`;
    }

  function resetForm() {
    const contentDiv = document.getElementById("content");

    document.getElementById("segmentContainer").reset();
    contentDiv.style.display = "none";
    document.getElementById("displayCGPA").textContent = ``;
    document.getElementById("displaySGPA").textContent = `Your Result will display here.`;
  }
  
