const accounts = [
  {
    name: "Arun",
    accountNo: "001",
  },
  {
    name: "Babu",
    accountNo: "002",
  },
  {
    name: "Chandra",
    accountNo: "003",
  },
];
const balances = {
  // accountNo: balance
  "001": 5000,
  "002": 2000,
  "003": 0,
};
const transactions = [
  {
    accountNo: "001",
    type: "withdrawal",
    amount: 1000,
  },
  {
    accountNo: "001",
    type: "deposit",
    amount: 500,
  },
  {
    accountNo: "001",
    type: "withdrawal",
    amount: 1000,
  },
  {
    accountNo: "002",
    type: "deposit",
    amount: 300,
  },
  {
    accountNo: "002",
    type: "withdrawal",
    amount: 200,
  },
  {
    accountNo: "003",
    type: "deposit",
    amount: 200,
  },
];

const transactionsType = {
  deposit: (transaction) =>
    balances[transaction.accountNo] + transaction.amount,
  withdrawal: (transaction) =>
    balances[transaction.accountNo] - transaction.amount
};

const updateBalancesWithTransactions = (transactions) => {
  transactions.forEach((transaction) => {
    /*balances[transaction.accountNo] =
      transaction.type === "deposit"
        ? balances[transaction.accountNo] + transaction.amount
        : transaction.type === "withdrawal"
        ? balances[transaction.accountNo] - transaction.amount
        : balances[transaction.accountNo];
        */
    const { accountNo, type } = transaction;
    balances[accountNo] = transactionsType[type](transaction);
  });
};
const displayBalances = (accounts) => {
  const accountDetails = accounts.map((currentAccount) => ({
    accountHolder: currentAccount.name,
    accountNo: currentAccount.accountNo,
    balance: balances[currentAccount.accountNo],
  }));

  console.table(accountDetails, ["accountHolder", "accountNo", "balance"]);
};

// Do not change below this line.
const main = function () {
  console.log("Balances before transactions");
  displayBalances(accounts);
  updateBalancesWithTransactions(transactions);
  console.log("Balances after transactions");
  displayBalances(accounts);
};

main();
