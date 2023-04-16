function calculateFee() {
  const amount = parseInt(document.getElementById("amount").value);
  let fee = 0;

  if (amount >= 500 && amount <= 2500) {
    fee = 330;
  } else if (amount >= 2501 && amount <= 5000) {
    fee = 440;
  } else if (amount >= 5001 && amount <= 15000) {
    fee = 700;
  } else if (amount >= 15001 && amount <= 30000) {
    fee = 880;
  } else if (amount >= 30001 && amount <= 45000) {
    fee = 1210;
  } else if (amount >= 45001 && amount <= 60000) {
    fee = 1500;
  } else if (amount >= 60001 && amount <= 125000) {
    fee = 1925;
  } else if (amount >= 125001 && amount <= 250000) {
    fee = 3575;
  } else if (amount >= 250001 && amount <= 500000) {
    fee = 7000;
  } else if (amount >= 500001 && amount <= 1000000) {
    fee = 12500;
  } else if (amount >= 1000001 && amount <= 2000000) {
    fee = 15000;
  } else if (amount >= 2000001 && amount <= 4000000) {
    fee = 18000;
  } else if (amount >= 4000001 && amount <= 7000000) {
    fee = 18000;
  }

  document.getElementById("result").value = fee;
}
