/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and returns a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory (transactions)
{
  const transactionHistoryMap = new Map();
  for (const transaction of transactions)
  {
    const currentCategory = transaction.category
    const currentAmountSpent = transaction.price

    if (transactionHistoryMap. has(currentCategory))
    {
      transactionHistoryMap.set (currentCategory, transactionHistoryMap.get (currentCategory) + currentAmountSpent);
    }
    else
    {
      transactionHistoryMap.set (currentCategory, currentAmountSpent);
    }
  }

  const transactionHistory = [];
  const transactionHistorySize = transactionHistoryMap.length;
  for (const [categoryName, totalAmountSpent] of transactionHistoryMap)
  {
    const currentTransaction = {
      'category': categoryName,
      'totalSpent': totalAmountSpent,
    };

    transactionHistory.push (currentTransaction);
  }
  return transactionHistory;
}

module.exports = calculateTotalSpentByCategory;