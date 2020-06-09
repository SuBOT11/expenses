const button = document.querySelector("button");
const form = document.querySelector("form");
const balanceSpan = document.querySelector(".balance span");
const incomeSpan = document.querySelector(".income span");
const spentSpan = document.querySelector(".spent span");
const historyList = document.querySelectorAll(".details ul");
console.log(historyList);
const incomeDets = form.newItem;
const incomeValue = form.earnedAmount;
const spentDets = form.spentIn;
const spentValue = form.spentAmount;

const calcBal = (inc, exp) => {
  const bal = inc - exp;
  balanceSpan.innerHTML = `$${bal}`;
};

const calcAmount = (incArr, speArr) => {
  const incA = incArr.reduce((acc, curr) => {
    const total = (acc += parseInt(curr));
    return total;
  }, 0);
  const speA = speArr.reduce((acc, curr) => {
    const total = (acc += parseInt(curr));
    return total;
  }, 0);

  incomeSpan.innerHTML = `$${incA}`;
  spentSpan.innerHTML = `$${speA}`;

  calcBal(incA, speA);
};

const incArr = [];
const speArr = [];
const updateAmount = (incA, speA) => {
  if (incA !== "") {
    incArr.push(incA);
  }
  if (speA !== "") {
    speArr.push(speA);
  }
  calcAmount(incArr, speArr);
};

const show = (inc, spe, iAmt, sAmt) => {
  if (inc || iAmt) {
    historyList[0].innerHTML += `<li>${inc}<span>+$${iAmt}</span></li>`;

    historyList[0].setAttribute("style", "color:green");
  }
  if (spe || sAmt) {
    historyList[1].innerHTML += `<li>${spe}<span>-$${sAmt}</span></li>`;
    historyList[1].setAttribute("style", "color:red");
  }
};

button.addEventListener("click", (e) => {
  const incomeAmt = incomeValue.value;
  const spentAmt = spentValue.value;
  const incomeText = incomeDets.value;
  const spentText = spentDets.value;
  show(incomeText, spentText, incomeAmt, spentAmt);
  updateAmount(incomeAmt, spentAmt);
  form.reset();
});
const arr = ["2", "3", "4"];
const result = arr.reduce((acc, curr) => {
  acc = acc + parseInt(curr);
  return acc;
}, 0);
console.log(result);
