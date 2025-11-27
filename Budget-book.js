let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const list = document.getElementById("list");

function addTransaction() {
    let amount = Number(document.getElementById("amount").value);
    let note = document.getElementById("note").value || "No note";
    let type = document.getElementById("type").value;

    if(amount<=0) {
        alert("Enter valid amount");
        return;
    }
    else if(isNaN(amount)) {
        alert("Invalid Amount")
    }
    else{
        transactions.push({amount,note,type})

        document.getElementById("amount").value = "";
        document.getElementById("note").value = "";

         update();
    }
}

function update() {
    list.innerHTML="";
    let totalIncome=0 , totalExpense=0;

    transactions.forEach((t,index) => {
        if(t.type === "income") {
            totalIncome += t.amount;
        }
        else {
            totalExpense += t.amount;
        }

        let li = document.createElement("li");
        li.classList.add(t.type == "income" ? "income-item" : "expense-item");

        li.innerHTML=`${t.type == "income" ? "➕" : "➖"} ₹${t.amount} ➡ ${t.note}
        <span class="delete-btn" onclick="deleteTransaction(${index})">❌</span>`

        list.appendChild(li);
     });

     income.innerText = totalIncome;
     expense.innerText = totalExpense;
     balance.innerText = totalIncome-totalExpense;

     localStorage.setItem("transactions", JSON.stringify(transactions));
}

function deleteTransaction(index) {
    transactions.splice(index,1);
    update();
}

update();

function genChart() {
    window.location.href="Generate-Chart.html"
}

function iVse() {
    window.location.href="Income-Expense.html"
}