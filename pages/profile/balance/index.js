const replenishment = document.getElementById("replenishment");
const historyPayment = document.getElementById("history-payment");

const replenishmentBlock = document.getElementById("replenishment-block");
const historyPaymentBlock = document.getElementById("history-payment-block");

const toggleTabBalance = (element) => {
  const tabs = [replenishment, historyPayment];
  const blocks = [replenishmentBlock, historyPaymentBlock];
  for (let i = 0; i <= tabs.length; i++) {
    if (tabs[i] === element) {
      tabs[i].style.backgroundColor = "#fffb98";
      blocks[i].style.display = "block";
    } else {
      tabs[i].style.backgroundColor = "";
      blocks[i].style.display = "none";
    }
  }
};

replenishment.addEventListener("click", () => toggleTabBalance(replenishment));
historyPayment.addEventListener("click", () =>
  toggleTabBalance(historyPayment)
);
