/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const arr = []

  transactions.forEach(transaction => {
    const categoryIndex = arr.findIndex(element => {
      return element.category === transaction.category
    })

    if (categoryIndex === -1) {
      const obj = {
        category: transaction.category,
        totalSpent: transaction.price
      }
      arr.push(obj)
    } else {
      arr[categoryIndex].totalSpent += transaction.price
    }
  });

  return arr;
}

module.exports = calculateTotalSpentByCategory;
