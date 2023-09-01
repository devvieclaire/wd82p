let balance = 1000;

function updateBalance(amount) {
  balance += amount;
  document.getElementById("balance").textContent = balance;
}

function transaction1() {
  updateBalance(500);
  logFinalBalance();
}

function transaction2() {
  updateBalance(-200);
  logFinalBalance();
}

function transaction3() {
  updateBalance(-1000);
  logFinalBalance();
}

function logFinalBalance() {
  console.log("Final balance:", balance);
}
