const expType=document.getElementById('expense-type')! as HTMLSelectElement;
const expDesc=document.getElementById('desc')! as HTMLInputElement;
const expAmt=document.getElementById('amount')! as HTMLInputElement;
const addExpBtn=document.getElementById('add-expense-btn')! as HTMLButtonElement;

class Expense{
    static currentId: number =0;
    id: number=0;
    type: 'credit' | 'debit' ='debit';
    description: string='';
    amount: number=0;
    constructor(type:'credit'|'debit', desc:string,amount:number ){
        this.type=type;
        this.description=desc;
        this.amount=amount;
        this.id=++Expense.currentId;
    }
}

addExpBtn.addEventListener('click',function(event){
    console.log("--hi--");
    event.preventDefault();
    const exp=new Expense('credit','test',100);
    console.log(exp);
});