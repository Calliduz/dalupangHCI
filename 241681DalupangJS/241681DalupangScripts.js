document.addEventListener("DOMContentLoaded", () => {
  // Helper: show error on an input field
  function showError(inputEl, outputEl, message) {
    outputEl.innerText = message;
    outputEl.classList.add("output-error");
    inputEl.classList.add("input-error");
  }

  // Helper: clear error styling
  function clearError(inputEl, outputEl) {
    outputEl.classList.remove("output-error");
    inputEl.classList.remove("input-error");
  }

  /* =========================================================
       Topic 1: Basic Input Output
       ========================================================= */

  // Sample 1: Name Greeting
  const btnGreet = document.getElementById("btnGreet");
  if (btnGreet) {
    btnGreet.addEventListener("click", () => {
      const input = document.getElementById("ioName");
      const name = input.value;
      const output = document.getElementById("outGreet");
      if (name.trim() === "") {
        showError(input, output, "Please enter your name.");
        return;
      }
      clearError(input, output);
      output.innerText = `Hello, ${name}! Welcome to the programming compilation.`;
    });
  }

  // Sample 2: Echo Chamber
  const btnEcho = document.getElementById("btnEcho");
  if (btnEcho) {
    btnEcho.addEventListener("click", () => {
      const input = document.getElementById("ioEcho");
      const text = input.value;
      const output = document.getElementById("outEcho");
      if (text.trim() === "") {
        showError(input, output, "Please enter some text to echo.");
        return;
      }
      clearError(input, output);
      output.innerText = text;
    });
  }

  // Sample 3: Word Counter
  const btnWordCount = document.getElementById("btnWordCount");
  if (btnWordCount) {
    btnWordCount.addEventListener("click", () => {
      const input = document.getElementById("ioWordCount");
      const text = input.value.trim();
      const output = document.getElementById("outWordCount");
      if (text === "") {
        showError(input, output, "Please enter a sentence to count.");
        return;
      }
      clearError(input, output);
      const count = text.split(/\s+/).length;
      output.innerText = `Word count: ${count}`;
    });
  }

  // Sample 4: Uppercase Converter
  const btnUpper = document.getElementById("btnUpper");
  if (btnUpper) {
    btnUpper.addEventListener("click", () => {
      const input = document.getElementById("ioUpper");
      const text = input.value;
      const output = document.getElementById("outUpper");
      if (text.trim() === "") {
        showError(input, output, "Please enter some text to convert.");
        return;
      }
      clearError(input, output);
      output.innerText = text.toUpperCase();
    });
  }

  // Sample 5: Character Counter
  const btnCharCount = document.getElementById("btnCharCount");
  if (btnCharCount) {
    btnCharCount.addEventListener("click", () => {
      const input = document.getElementById("ioCharCount");
      const text = input.value;
      const output = document.getElementById("outCharCount");
      if (text === "") {
        showError(input, output, "Please enter some text to count.");
        return;
      }
      clearError(input, output);
      output.innerText = `Character count: ${text.length}`;
    });
  }

  /* =========================================================
       Topic 2: Variables and Data Types
       ========================================================= */

  // Sample 1: Simple Addition
  const btnAdd = document.getElementById("btnAdd");
  if (btnAdd) {
    btnAdd.addEventListener("click", () => {
      const input1 = document.getElementById("varNum1");
      const input2 = document.getElementById("varNum2");
      const output = document.getElementById("outAdd");
      let num1 = parseFloat(input1.value);
      let num2 = parseFloat(input2.value);
      if (isNaN(num1) || input1.value.trim() === "") {
        showError(input1, output, "Please enter a valid Number 1.");
        return;
      }
      clearError(input1, output);
      if (isNaN(num2) || input2.value.trim() === "") {
        showError(input2, output, "Please enter a valid Number 2.");
        return;
      }
      clearError(input2, output);
      let result = num1 + num2;
      output.innerText = `Sum (Number): ${result}`;
    });
  }

  // Sample 2: Profile Builder
  const btnProfile = document.getElementById("btnProfile");
  if (btnProfile) {
    btnProfile.addEventListener("click", () => {
      const nameInput = document.getElementById("varName");
      const ageInput = document.getElementById("varAge");
      const output = document.getElementById("outProfile");
      let name = nameInput.value;
      let age = ageInput.value;
      if (name.trim() === "") {
        showError(nameInput, output, "Please enter your name.");
        return;
      }
      clearError(nameInput, output);
      if (age.trim() === "" || isNaN(age)) {
        showError(ageInput, output, "Please enter a valid age.");
        return;
      }
      clearError(ageInput, output);
      output.innerText =
        `Profile created. Name: ${name} (String), Age: ${age} (Number)`;
    });
  }

  // Sample 3: Boolean Flipper
  const btnBool = document.getElementById("btnBool");
  if (btnBool) {
    let isToggled = false; // Boolean variable
    btnBool.addEventListener("click", () => {
      isToggled = !isToggled;
      document.getElementById("outBool").innerText =
        `Current Boolean State: ${isToggled}`;
    });
  }

  // Sample 4: Data Type Checker
  const btnType = document.getElementById("btnType");
  if (btnType) {
    btnType.addEventListener("click", () => {
      const input = document.getElementById("varType");
      const output = document.getElementById("outType");
      let inputVal = input.value;
      if (inputVal.trim() === "") {
        showError(input, output, "Please enter a value to check.");
        return;
      }
      clearError(input, output);
      let type = "String";
      // Simple logic to guess if it's a number
      if (!isNaN(inputVal) && inputVal.trim() !== "") {
        type = "Number";
      }
      if (
        inputVal.toLowerCase() === "true" ||
        inputVal.toLowerCase() === "false"
      ) {
        type = "Boolean";
      }
      output.innerText = `Guessed Data Type: ${type}`;
    });
  }

  // Sample 5: Temperature Converter
  const btnTemp = document.getElementById("btnTemp");
  if (btnTemp) {
    btnTemp.addEventListener("click", () => {
      const input = document.getElementById("varTemp");
      const output = document.getElementById("outTemp");
      let celsius = parseFloat(input.value);
      if (input.value.trim() === "" || isNaN(celsius)) {
        showError(input, output, "Please enter a valid temperature.");
        return;
      }
      clearError(input, output);
      let fahrenheit = (celsius * 9) / 5 + 32;
      output.innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    });
  }

  /* =========================================================
       Topic 3: Conditional Statements
       ========================================================= */

  // Sample 1: Pass or Fail Checker
  const btnGrade = document.getElementById("btnGrade");
  if (btnGrade) {
    btnGrade.addEventListener("click", () => {
      const input = document.getElementById("condGrade");
      let grade = parseFloat(input.value);
      let output = document.getElementById("outGrade");
      if (input.value.trim() === "" || isNaN(grade)) {
        showError(input, output, "Please enter a valid grade.");
        return;
      }
      clearError(input, output);
      if (grade >= 75) {
        output.innerText = "Result: PASS";
        output.style.color = "#15803d";
      } else {
        output.innerText = "Result: FAIL";
        output.style.color = "#b91c1c";
      }
    });
  }

  // Sample 2: Voting Eligibility
  const btnVote = document.getElementById("btnVote");
  if (btnVote) {
    btnVote.addEventListener("click", () => {
      const input = document.getElementById("condAge");
      let age = parseInt(input.value);
      let output = document.getElementById("outVote");
      if (input.value.trim() === "" || isNaN(age)) {
        showError(input, output, "Please enter a valid age.");
        return;
      }
      clearError(input, output);
      if (age >= 18) {
        output.innerText = "You are eligible to vote.";
      } else {
        output.innerText = `You are NOT eligible to vote. You need ${18 - age} more year(s).`;
      }
    });
  }

  // Sample 3: Positive or Negative
  const btnSign = document.getElementById("btnSign");
  if (btnSign) {
    btnSign.addEventListener("click", () => {
      const input = document.getElementById("condSign");
      let num = parseFloat(input.value);
      let output = document.getElementById("outSign");
      if (input.value.trim() === "" || isNaN(num)) {
        showError(input, output, "Please enter a number.");
        return;
      }
      clearError(input, output);
      if (num > 0) {
        output.innerText = "The number is Positive.";
      } else if (num < 0) {
        output.innerText = "The number is Negative.";
      } else {
        output.innerText = "The number is Zero.";
      }
    });
  }

  // Sample 4: Even or Odd
  const btnEvenOdd = document.getElementById("btnEvenOdd");
  if (btnEvenOdd) {
    btnEvenOdd.addEventListener("click", () => {
      const input = document.getElementById("condEvenOdd");
      let num = parseInt(input.value);
      let output = document.getElementById("outEvenOdd");
      if (input.value.trim() === "" || isNaN(num)) {
        showError(input, output, "Please enter an integer.");
        return;
      }
      clearError(input, output);
      if (num % 2 === 0) {
        output.innerText = "The number is Even.";
      } else {
        output.innerText = "The number is Odd.";
      }
    });
  }

  // Sample 5: Discount Eligibility
  const btnDiscount = document.getElementById("btnDiscount");
  if (btnDiscount) {
    btnDiscount.addEventListener("click", () => {
      const input = document.getElementById("condDiscount");
      let amount = parseFloat(input.value);
      let output = document.getElementById("outDiscount");
      if (input.value.trim() === "" || isNaN(amount) || amount < 0) {
        showError(input, output, "Please enter a valid amount.");
        return;
      }
      clearError(input, output);
      if (amount >= 1000) {
        let discounted = amount * 0.9;
        output.innerText = `You get a 10% discount! New total: ₱${discounted.toFixed(2)}`;
      } else {
        output.innerText = `No discount applied. Total: ₱${amount.toFixed(2)} (Spend ₱1000 or more for 10% off)`;
      }
    });
  }

  /* =========================================================
       Topic 4: Loops
       ========================================================= */

  // Sample 1: Sequence Printer
  const btnSeq = document.getElementById("btnSeq");
  if (btnSeq) {
    btnSeq.addEventListener("click", () => {
      const input = document.getElementById("loopSeq");
      let num = parseInt(input.value);
      let output = document.getElementById("outSeq");
      if (input.value.trim() === "" || isNaN(num) || num < 1 || num > 100) {
        showError(input, output, "Please enter a valid number between 1 and 100.");
        return;
      }
      clearError(input, output);
      let arr = [];
      for (let i = 1; i <= num; i++) {
        arr.push(i);
      }
      output.innerText = arr.join(", ");
    });
  }

  // Sample 2: Multiplication Table
  const btnMult = document.getElementById("btnMult");
  if (btnMult) {
    btnMult.addEventListener("click", () => {
      const input = document.getElementById("loopMult");
      let num = parseInt(input.value);
      let output = document.getElementById("outMult");
      if (input.value.trim() === "" || isNaN(num)) {
        showError(input, output, "Please enter a valid number.");
        return;
      }
      clearError(input, output);
      let res = "";
      for (let i = 1; i <= 10; i++) {
        res += `${num} x ${i} = ${num * i}\n`;
      }
      output.innerText = res;
    });
  }

  // Sample 3: Word Repeater
  const btnRepeat = document.getElementById("btnRepeat");
  if (btnRepeat) {
    btnRepeat.addEventListener("click", () => {
      const wordInput = document.getElementById("loopWord");
      const timesInput = document.getElementById("loopTimes");
      let word = wordInput.value;
      let times = parseInt(timesInput.value);
      let output = document.getElementById("outRepeat");
      if (word.trim() === "") {
        showError(wordInput, output, "Please enter a word to repeat.");
        return;
      }
      clearError(wordInput, output);
      if (timesInput.value.trim() === "" || isNaN(times) || times < 1 || times > 50) {
        showError(timesInput, output, "Please enter a valid number of repetitions (1-50).");
        return;
      }
      clearError(timesInput, output);
      let res = "";
      let count = 0;
      while (count < times) {
        res += word + " ";
        count++;
      }
      output.innerText = res.trim();
    });
  }

  // Sample 4: Blastoff Countdown
  const btnLaunch = document.getElementById("btnLaunch");
  if (btnLaunch) {
    btnLaunch.addEventListener("click", () => {
      const input = document.getElementById("loopLaunch");
      let start = parseInt(input.value);
      let output = document.getElementById("outLaunch");
      if (input.value.trim() === "" || isNaN(start) || start < 1 || start > 20) {
        showError(input, output, "Please enter a valid number between 1 and 20.");
        return;
      }
      clearError(input, output);
      let res = "";
      let counter = start;
      do {
        res += counter + "...\n";
        counter--;
      } while (counter > 0);
      res += "🚀 BLASTOFF!";
      output.innerText = res;
    });
  }

  // Sample 5: Sum of N Numbers
  const btnSumN = document.getElementById("btnSumN");
  if (btnSumN) {
    btnSumN.addEventListener("click", () => {
      const input = document.getElementById("loopSumN");
      let n = parseInt(input.value);
      let output = document.getElementById("outSumN");
      if (input.value.trim() === "" || isNaN(n) || n < 1) {
        showError(input, output, "Please enter a positive integer.");
        return;
      }
      clearError(input, output);
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
      output.innerText = `The sum from 1 to ${n} is ${sum}.`;
    });
  }
});
