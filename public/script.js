const expType = document.getElementById('expense-type');
const expDesc = document.getElementById('desc');
const expAmt = document.getElementById('amount');
const addExpBtn = document.getElementById('add-expense-btn');
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
    const exp = new Expense('credit', 'test', 100);
    console.log(exp);
});
export {};
//# sourceMappingURL=script.js.map