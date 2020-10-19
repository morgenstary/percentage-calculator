// Calculations
formula1 = function () {
  let num1a = document.getElementById('input-1a').value;
  let num1b = document.getElementById('input-1b').value;
  let calc = ((num1a / num1b) * 100).toFixed(2);
  if (num1a !== '' && num1b !== '') {
    document.getElementById('answer-1').textContent = `Answer: ${calc}%`;
  } else if (num1a === '' || num1b === '') {
    document.getElementById('answer-1').textContent = 'Answer: ';
  };
  console.log(isNaN(num1a));
}

formula2 = function () {
  let num2a = document.getElementById('input-2a').value;
  let num2b = document.getElementById('input-2b').value;
  let calc = ((num2a * num2b) / 100).toFixed(2);
  if (num2a !== '' && num2b !== '') {
    document.getElementById('answer-2').textContent = `Answer: ${calc}`;
  } else if (num2a === '' || num2b === '') {
    document.getElementById('answer-2').textContent = 'Answer: ';
  };
}

formula3 = function () {
  let num3a = document.getElementById('input-3a').value;
  let num3b = document.getElementById('input-3b').value;
  let calc = ((num3a / num3b) * 100).toFixed(2);
  if (num3a !== '' && num3b !== '') {
    document.getElementById('answer-3').textContent = `Answer: ${calc}%`;
  } else if (num3a === '' || num3b === '') {
    document.getElementById('answer-3').textContent = 'Answer: ';
  };
}

formula4 = function () {
  let num4a = document.getElementById('input-4a').value;
  let num4b = document.getElementById('input-4b').value;
  let calc = ((num4b - num4a) / num4a * 100).toFixed(2);
  if (num4a !== '' && num4b !== '') {
    document.getElementById('answer-4').textContent = `Answer: ${calc}%`;
  } else if (num4a === '' || num4b === '') {
    document.getElementById('answer-4').textContent = 'Answer: ';
  };
}

formula5 = function () {
  let num5a = document.getElementById('input-5a').value;
  let num5b = document.getElementById('input-5b').value;
  let calc = (num5a * num5b / 100).toFixed(2);
  if (num5a !== '' && num5b !== '') {
    document.getElementById('answer-5').textContent = `Answer: ${calc}%`;
  } else if (num5a === '' || num5b === '') {
    document.getElementById('answer-5').textContent = 'Answer: ';
  };
}

formula6 = function () {
  let num6a = document.getElementById('input-6a').value;
  let num6b = document.getElementById('input-6b').value;
  let calc = (num6a / (num6b / 100)).toFixed(2);
  if (num6a !== '' && num6b !== '') {
    document.getElementById('answer-6').textContent = `Answer: ${calc}%`;
  } else if (num6a === '' || num6b === '') {
    document.getElementById('answer-6').textContent = 'Answer: ';
  };
}

formula7 = function () {
  let num7a = document.getElementById('input-7a').value;
  let num7b = document.getElementById('input-7b').value;
  let calc = (num7a * (1 + num7b / 100)).toFixed(2);
  if (num7a !== '' && num7b !== '') {
    document.getElementById('answer-7').textContent = `Answer: ${calc}`;
  } else if (num7a === '' || num7b === '') {
    document.getElementById('answer-7').textContent = 'Answer: ';
  };
}

formula8 = function () {
  let num8a = document.getElementById('input-8a').value;
  let num8b = document.getElementById('input-8b').value;
  let calc = (num8a * (1 - num8b / 100)).toFixed(2);
  if (num8a !== '' && num8b !== '') {
    document.getElementById('answer-8').textContent = `Answer: ${calc}`;
  } else if (num8a === '' || num8b === '') {
    document.getElementById('answer-8').textContent = 'Answer: ';
  };
}

var RegExp = new RegExp(/^[0-9/ /. /]+$/);
var val = document.getElementById("input-9a").value;

function formula9(elem) {
  if (RegExp.test(elem.value)) {
    let input = elem.value;
    let strInput = input.toString();
    let splitInput = strInput.split(' ');
    let space = /\s/;
    let preSpace = /([^\s]+)/;
    let forwardSlash = /\//;
    let beforeSlash = /[^/]+/;
    let afterSlash = /[^/]+$/;
    let beforeSpace = strInput.match(preSpace)
    let checkSpace = strInput.match(space);
    let checkForwardSlash = strInput.match(forwardSlash);
    let testNumerator = strInput[0];
    let numerator = splitInput[0].match(beforeSlash);
    let denomenator = splitInput[0].match(afterSlash);

    if (checkSpace === null && checkForwardSlash === null && splitInput[0] !== '.') {
      let eval = calc(splitInput[0]);
      document.getElementById('answer-9').textContent = `Answer: ${eval}%`;
    }

    if (checkSpace === null && checkForwardSlash !== null && splitInput[0] !== '.' && denomenator !== null) {
      let firstFractionToDecimal = parseInt(numerator[0], 10) / parseInt(denomenator[0], 10);
      let eval = calc(firstFractionToDecimal);
      document.getElementById('answer-9').textContent = `Answer: ${eval}%`;
    } else if (checkSpace === null && checkForwardSlash !== null && splitInput[0] !== '.') {
      document.getElementById('answer-9').textContent = 'Answer: ';
    }

    if (testNumerator == '/') {
      document.getElementById('answer-9').textContent = 'Answer: ';
    }

    if (checkSpace !== null) {
      document.getElementById('answer-9').textContent = 'Answer: ';
    }

    if (checkSpace !== null && checkForwardSlash !== null && splitInput[0] !== '.') {
      let secondFraction = splitInput[1].split('/');
      if (secondFraction[0] != '' && secondFraction[1] != '') {
        let secondFractionToDecimal = parseInt(secondFraction[0], 10) / parseInt(secondFraction[1], 10);
        let preMixNum = beforeSpace[0] * 100;
        let answer = (preMixNum + secondFractionToDecimal * 100).toFixed(2);
        document.getElementById('answer-9').textContent = `Answer: ${answer}%`;
      }
    }

  } else {
    elem.value = val;
    document.getElementById('answer-9').textContent = `Please enter a number`;
  }

  function calc(num) {
    let res = num * 100;
    return res.toFixed(2);
  }
}

// clear inputs
function clearInput1a() {
  document.getElementById('answer-1').textContent = 'Answer: ';
  document.getElementById('input-1a').value = "";
}

function clearInput1b() {
  document.getElementById('answer-1').textContent = 'Answer: ';
  document.getElementById('input-1b').value = "";
}

function clearInput2a() {
  document.getElementById('answer-2').textContent = 'Answer: ';
  document.getElementById('input-2a').value = "";
}

function clearInput2b() {
  document.getElementById('answer-2').textContent = 'Answer: ';
  document.getElementById('input-2b').value = "";
}

function clearInput3a() {
  document.getElementById('answer-3').textContent = 'Answer: ';
  document.getElementById('input-3a').value = "";
}

function clearInput3b() {
  document.getElementById('answer-3').textContent = 'Answer: ';
  document.getElementById('input-3b').value = "";
}

function clearInput4a() {
  document.getElementById('answer-4').textContent = 'Answer: ';
  document.getElementById('input-4a').value = "";
}

function clearInput4b() {
  document.getElementById('answer-4').textContent = 'Answer: ';
  document.getElementById('input-4b').value = "";
}

function clearInput5a() {
  document.getElementById('answer-5').textContent = 'Answer: ';
  document.getElementById('input-5a').value = "";
}

function clearInput5b() {
  document.getElementById('answer-5').textContent = 'Answer: ';
  document.getElementById('input-5b').value = "";
}

function clearInput6a() {
  document.getElementById('answer-6').textContent = 'Answer: ';
  document.getElementById('input-6a').value = "";
}

function clearInput6b() {
  document.getElementById('answer-6').textContent = 'Answer: ';
  document.getElementById('input-6b').value = "";
}

function clearInput7a() {
  document.getElementById('answer-7').textContent = 'Answer: ';
  document.getElementById('input-7a').value = "";
}

function clearInput7b() {
  document.getElementById('answer-7').textContent = 'Answer: ';
  document.getElementById('input-7b').value = "";
}

function clearInput8a() {
  document.getElementById('answer-8').textContent = 'Answer: ';
  document.getElementById('input-8a').value = "";
}

function clearInput8b() {
  document.getElementById('answer-8').textContent = 'Answer: ';
  document.getElementById('input-8b').value = "";
}

function clearInput9a() {
  document.getElementById('answer-9').textContent = 'Answer: ';
  document.getElementById('input-9a').value = "";
}

document.getElementById('input-1a').onclick = clearInput1a;
document.getElementById('input-1b').onclick = clearInput1b;
document.getElementById('input-2a').onclick = clearInput2a;
document.getElementById('input-2b').onclick = clearInput2b;
document.getElementById('input-3a').onclick = clearInput3a;
document.getElementById('input-3b').onclick = clearInput3b;
document.getElementById('input-4a').onclick = clearInput4a;
document.getElementById('input-4b').onclick = clearInput4b;
document.getElementById('input-5a').onclick = clearInput5a;
document.getElementById('input-5b').onclick = clearInput5b;
document.getElementById('input-6a').onclick = clearInput6a;
document.getElementById('input-6b').onclick = clearInput6b;
document.getElementById('input-7a').onclick = clearInput7a;
document.getElementById('input-7b').onclick = clearInput7b;
document.getElementById('input-8a').onclick = clearInput8a;
document.getElementById('input-8b').onclick = clearInput8b;
document.getElementById('input-9a').onclick = clearInput9a;