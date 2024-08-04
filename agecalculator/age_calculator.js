function calculateAge() {
  const today = Date();
  const birthDateInput = document.getElementById("birthDate").value;
  const birthDatePart = birthDateInput.split("-");
  const birthYear = birthDatePart[0];
  const birthMonth = birthDatePart[1] - 1;
  const birthDay = birthDatePart[2];
  const birthDate = new Date(birthYear, birthMonth, birthDay);
  console.log(birthDateInput);
  console.log(birthDatePart);
  console.log(birthDate);
  const ageInMilliSecond = today - birthDate;
  const ageInSecond = Math.floor(ageInMilliSecond / 1000);
  const ageInMinutes = Math.floor(ageInSecond / 60);
  const ageInHours = Math.floor(ageInMinutes / 60);
  const ageInDays = Math.floor(ageInHours / 24);
  const ageInWeeks = Math.floor(ageInDays / 7);
  const ageInMonths = Math.floor(ageInDays / 30.436875);
  const ageInYear = Math.floor(ageInDays / 365.25);
  const resultContainer = document.getElementById("resultContainer");
  const result = document.getElementById("result");
  result.innerHTML = `
  <div class="result_item">
            <h3>Age:</h3> 
           <p>${ageInYear} Years ${ageInMonths % 12} Months ${
    ageInDays % 30
  }</p>
          </div>
          <div class="result_item">
            <h3>Month Passed</h3>
            <p>${ageInWeeks}</p>
          </div>
          <div class="result_item">
            <h3>Day Passed</h3>
            <p>${ageInMonths}</p>
          </div>
  `;
}
const ageCalcForm = document.getElementById("ageCalculator");
ageCalcForm.addEventListener("submit", (Event) => {
  Event.preventDefault();
});
calculateAge();
