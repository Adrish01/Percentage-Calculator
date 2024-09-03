function generateSubjectFields() {
    const subjectCount = document.getElementById('subjectCount').value;
    const subjectsContainer = document.getElementById('subjectsContainer');
    subjectsContainer.innerHTML = '';

    for (let i = 1; i <= subjectCount; i++) {
        const subjectBox = document.createElement('div');
        subjectBox.className = 'subject-box';
        subjectBox.innerHTML = `
            <label>Subject ${i} - Total Marks:</label>
            <input type="number" id="totalMarks${i}" oninput="calculate()" placeholder="Enter total marks" required>
            <label>Subject ${i} - Marks Obtained:</label>
            <input type="number" id="obtainedMarks${i}" oninput="calculate()" placeholder="Enter marks obtained" required>
            <div class="subject-percentage">
                <label>Percentage for Subject ${i}: </label>
                <span id="percentage${i}">0%</span>
            </div>
        `;
        subjectsContainer.appendChild(subjectBox);
    }
}

function calculate() {
    const subjectCount = document.getElementById('subjectCount').value;
    let totalMarks = 0;
    let totalMarksObtained = 0;

    for (let i = 1; i <= subjectCount; i++) {
        const totalMarksInput = document.getElementById(`totalMarks${i}`);
        const obtainedMarksInput = document.getElementById(`obtainedMarks${i}`);
        const percentageSpan = document.getElementById(`percentage${i}`);

        const total = parseFloat(totalMarksInput.value) || 0;
        const obtained = parseFloat(obtainedMarksInput.value) || 0;

        totalMarks += total;
        totalMarksObtained += obtained;

        const percentage = total ? ((obtained / total) * 100).toFixed(2) : 0;
        percentageSpan.textContent = `${percentage}%`;
    }

    document.getElementById('totalMarks').textContent = totalMarks;
    document.getElementById('totalMarksObtained').textContent = totalMarksObtained;
    const totalPercentage = totalMarks ? ((totalMarksObtained / totalMarks) * 100).toFixed(2) : 0;
    document.getElementById('totalPercentage').textContent = `${totalPercentage}%`;
}
