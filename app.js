document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateGrade);
});

function calculateGrade() {
    const midtermExamOne = parseFloat(document.getElementById("midtermExamOne").value);
    const midtermExamTwo = parseFloat(document.getElementById("midtermExamTwo").value);
    const finalExam = parseFloat(document.getElementById("finalExam").value);

    if (isNaN(midtermExamOne) || isNaN(midtermExamTwo) || isNaN(finalExam)) {
        alert("Please enter valid numeric grades for all exams.");
        return;
    }

    const average = (midtermExamOne * 0.3) + (midtermExamTwo * 0.3) + (finalExam * 0.4);

    let resultMessage = "";
    if (average >= 60) {
        resultMessage = "Congratulations! You have passed this course.";
    } else {
        resultMessage = "You failed the course. You should study better.";
    }

    const resultContainer = document.getElementById("resultContainer");
    resultContainer.textContent = resultMessage;

    // Clear input areas
    document.getElementById("midtermExamOne").value = "";
    document.getElementById("midtermExamTwo").value = "";
    document.getElementById("finalExam").value = "";
}
