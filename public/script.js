const expType = document.getElementById('expense-type');
const expDesc = document.getElementById('desc');
const expAmt = document.getElementById('amount');
const addExpBtn = document.getElementById('add-expense-btn');
let expenseItems = [];
class Expense {
    constructor(type, desc, amount) {
        this.id = 0;
        this.type = 'debit';
        this.description = '';
        this.amount = 0;
        this.type = type;
        this.description = desc;
        this.amount = amount;
        this.id = ++Expense.currentId;
    }
}
Expense.currentId = 0;
addExpBtn.addEventListener('click', function (event) {
    console.log("--hi--");
    event.preventDefault();
    let type = expType.value === 'credit' ? 'credit' : 'debit';
    const exp = new Expense(type, expDesc.value, expAmt.value);
    expenseItems.push(exp);
    console.log(expenseItems);
});
export {};
//# sourceMappingURL=script.js.map