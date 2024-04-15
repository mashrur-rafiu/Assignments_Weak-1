class BankAccount {
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`$${amount} deposited to account ${this.accountNumber}.`);
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds.");
      } else {
        this.balance -= amount;
        console.log(`$${amount} withdrawn from account ${this.accountNumber}.`);
      }
    }
  
    getBalance() {
      return this.balance;
    }
  
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $${this.balance.toFixed(2)}`); // Format balance to 2 decimal places
    }
  }
  
  // Create two instances of BankAccount
  const account1 = new BankAccount(1001, "John Doe", 700);
  const account2 = new BankAccount(1002, "Jane Smith", 500);
  
  // Demonstrate functionalities
  
  console.log("Account 1 Information:");
  account1.displayAccountInfo();
  
  account1.deposit(200);
  account1.getBalance(); // This won't print anything, use console.log(account1.getBalance())
  
  console.log("Account 1 Information (after deposit):");
  account1.displayAccountInfo();
  
  account2.withdraw(300);
  account2.withdraw(400); // Should display "Insufficient funds"
  
  console.log("Account 2 Information:");
  account2.displayAccountInfo();
  