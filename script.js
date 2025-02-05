let currentInput = '';
let history = [];

function appendNumber(number) {
  currentInput += number;
  document.getElementById('result').value = currentInput;
}

function appendOperator(operator) {
  currentInput += ' ' + operator + ' ';
  document.getElementById('result').value = currentInput;
}

function calculateResult() {
  try {
    let result = eval(currentInput);
    document.getElementById('result').value = result;
    history.push(currentInput + ' = ' + result); // Store calculation in history
    currentInput = ''; // Reset current input after calculation
    updateHistory(); // Update history display
  } catch (e) {
    document.getElementById('result').value = 'Error';
  }
}

function clearResult() {
  currentInput = '';
  document.getElementById('result').value = '';
}

function toggleHistory() {
  const historyDiv = document.getElementById('history');
  historyDiv.style.display = historyDiv.style.display === 'block' ? 'none' : 'block';
}

function updateHistory() {
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = ''; // Clear current history list
  history.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = entry;
    historyList.appendChild(li);
  });
}
