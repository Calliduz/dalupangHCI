document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
       Topic 1: Basic Input Output
       ========================================================= */

  // Sample 1: Name Greeting
  const btnGreet = document.getElementById("btnGreet");
  if (btnGreet) {
    btnGreet.addEventListener("click", () => {
      const name = document.getElementById("ioName").value;
      const output = document.getElementById("outGreet");
      if (name.trim() === "") {
        output.innerText = "Please enter your name.";
        return;
      }
      output.innerText = `Hello, ${name}! Welcome to the programming compilation.`;
    });
  }

  // Sample 2: Echo Chamber
  const btnEcho = document.getElementById("btnEcho");
  if (btnEcho) {
    btnEcho.addEventListener("click", () => {
      const text = document.getElementById("ioEcho").value;
      document.getElementById("outEcho").innerText = text
        ? text
        : "No input provided.";
    });
  }

  // Sample 3: Word Counter
  const btnWordCount = document.getElementById("btnWordCount");
  if (btnWordCount) {
    btnWordCount.addEventListener("click", () => {
      const text = document.getElementById("ioWordCount").value.trim();
      const count = text === "" ? 0 : text.split(/\s+/).length;
      document.getElementById("outWordCount").innerText =
        `Word count: ${count}`;
    });
  }

  // Sample 4: Uppercase Converter
  const btnUpper = document.getElementById("btnUpper");
  if (btnUpper) {
    btnUpper.addEventListener("click", () => {
      const text = document.getElementById("ioUpper").value;
      document.getElementById("outUpper").innerText = text.toUpperCase();
    });
  }

  // Sample 5: Character Counter
  const btnCharCount = document.getElementById("btnCharCount");
  if (btnCharCount) {
    btnCharCount.addEventListener("click", () => {
      const text = document.getElementById("ioCharCount").value;
      document.getElementById("outCharCount").innerText =
        `Character count: ${text.length}`;
    });
  }

  /* =========================================================
       Topic 2: Variables and Data Types
       ========================================================= */

  // Sample 1: Simple Addition
  const btnAdd = document.getElementById("btnAdd");
  if (btnAdd) {
    btnAdd.addEventListener("click", () => {
      let num1 = parseFloat(document.getElementById("varNum1").value);
      let num2 = parseFloat(document.getElementById("varNum2").value);
      let result = (isNaN(num1) ? 0 : num1) + (isNaN(num2) ? 0 : num2);
      document.getElementById("outAdd").innerText = `Sum (Number): ${result}`;
    });
  }

  // Sample 2: Profile Builder
  const btnProfile = document.getElementById("btnProfile");
  if (btnProfile) {
    btnProfile.addEventListener("click", () => {
      let name = document.getElementById("varName").value; // String
      let age = document.getElementById("varAge").value; // Can be treated as Number
      document.getElementById("outProfile").innerText =
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
      let inputVal = document.getElementById("varType").value;
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
      document.getElementById("outType").innerText =
        `Guessed Data Type: ${type}`;
    });
  }

  // Sample 5: Temperature Converter
  const btnTemp = document.getElementById("btnTemp");
  if (btnTemp) {
    btnTemp.addEventListener("click", () => {
      let celsius = parseFloat(document.getElementById("varTemp").value);
      if (isNaN(celsius)) {
        document.getElementById("outTemp").innerText = "Enter a valid number.";
        return;
      }
      let fahrenheit = (celsius * 9) / 5 + 32;
      document.getElementById("outTemp").innerText =
        `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    });
  }

  /* =========================================================
       Topic 3: Conditional Statements
       ========================================================= */

  // Sample 1: Pass or Fail Checker
  const btnGrade = document.getElementById("btnGrade");
  if (btnGrade) {
    btnGrade.addEventListener("click", () => {
      let grade = parseFloat(document.getElementById("condGrade").value);
      let output = document.getElementById("outGrade");
      if (isNaN(grade)) {
        output.innerText = "Please enter a valid grade.";
      } else if (grade >= 75) {
        output.innerText = "Result: PASS";
        output.style.color = "#15803d"; // Green
      } else {
        output.innerText = "Result: FAIL";
        output.style.color = "#b91c1c"; // Red
      }
    });
  }

  // Sample 2: Voting Eligibility
  const btnVote = document.getElementById("btnVote");
  if (btnVote) {
    btnVote.addEventListener("click", () => {
      let age = parseInt(document.getElementById("condAge").value);
      let output = document.getElementById("outVote");
      if (isNaN(age)) {
        output.innerText = "Please enter a valid age.";
      } else if (age >= 18) {
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
      let num = parseFloat(document.getElementById("condSign").value);
      let output = document.getElementById("outSign");
      if (isNaN(num)) {
        output.innerText = "Please enter a number.";
      } else if (num > 0) {
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
      let num = parseInt(document.getElementById("condEvenOdd").value);
      let output = document.getElementById("outEvenOdd");
      if (isNaN(num)) {
        output.innerText = "Please enter an integer.";
      } else if (num % 2 === 0) {
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
      let amount = parseFloat(document.getElementById("condDiscount").value);
      let output = document.getElementById("outDiscount");
      if (isNaN(amount) || amount < 0) {
        output.innerText = "Please enter a valid amount.";
      } else if (amount >= 1000) {
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
      let num = parseInt(document.getElementById("loopSeq").value);
      let output = document.getElementById("outSeq");
      if (isNaN(num) || num < 1 || num > 100) {
        output.innerText = "Please enter a valid number between 1 and 100.";
        return;
      }
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
      let num = parseInt(document.getElementById("loopMult").value);
      let output = document.getElementById("outMult");
      if (isNaN(num)) {
        output.innerText = "Please enter a valid number.";
        return;
      }
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
      let word = document.getElementById("loopWord").value;
      let times = parseInt(document.getElementById("loopTimes").value);
      let output = document.getElementById("outRepeat");
      if (!word || isNaN(times) || times < 1 || times > 50) {
        output.innerText =
          "Provide a word and a valid number of repetitions (1-50).";
        return;
      }
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
      let start = parseInt(document.getElementById("loopLaunch").value);
      let output = document.getElementById("outLaunch");
      if (isNaN(start) || start < 1 || start > 20) {
        output.innerText = "Enter a valid number between 1 and 20.";
        return;
      }
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
      let n = parseInt(document.getElementById("loopSumN").value);
      let output = document.getElementById("outSumN");
      if (isNaN(n) || n < 1) {
        output.innerText = "Please enter a positive integer.";
        return;
      }
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
      output.innerText = `The sum from 1 to ${n} is ${sum}.`;
    });
  }
});
