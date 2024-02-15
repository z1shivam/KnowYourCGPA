function calculateCGPA() {
  const getCredits = (marks) =>
    marks > 100
      ? 0
      : marks > 90
        ? 10
        : marks > 80
          ? 9
          : marks > 70
            ? 8
            : marks > 60
              ? 7
              : marks > 50
                ? 6
                : marks > 40
                  ? 5
                  : marks > 30
                    ? 4
                    : marks > 20
                      ? 3
                      : marks > 10
                        ? 2
                        : marks > 0
                          ? 1
                          : 0;

  const getValue = (name) =>
    parseFloat(document.getElementsByName(name)[0].value);

  const subjects = [
    { c: 4, m: "Subject1_m" }, 
    { c: 3, m: "Subject2_m" }, 
    { c: 1, m: "Subject3_m" }, 
    { c: 3, m: "Subject4_m" },
    { c: 1, m: "Subject5_m" },
    { c: 3, m: "Subject6_m" },
    { c: 1, m: "Subject7_m" }, 
    { c: 2, m: "Subject8_m" }, 
    { c: 2, m: "Subject9_m" }  
  ];

  let totalPoints = 0;
  let totalCredits = 0;

  subjects.forEach((subject) => {
    totalPoints += subject.c * getCredits(getValue(subject.m));
    totalCredits += subject.c;
  });

  const sgpaPointer = (totalPoints / totalCredits).toFixed(2);
  const toggleButton = document.getElementById("toggleButton");

  document.getElementById("displaySGPA").textContent = `SGPA: ${sgpaPointer} - CGPA: ${sgpaPointer}`;
}

function resetForm() {
  const contentDiv = document.getElementById("content");

  document.getElementById("segmentContainer").reset();
  contentDiv.style.display = "none";
  document.getElementById("displayCGPA").textContent = ``;
  document.getElementById(
    "displaySGPA"
  ).textContent = `Your Result will display here.`;
}

console.log("Hello");
