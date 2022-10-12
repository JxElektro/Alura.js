class client {
  name;
  dni;
  rut;
}

class cuentaCorriente {
  client;
  balance;
  number;

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

}

const client1 = new client();
client1.name = "Juan";
client1.dni = 12345678;
client1.rut = 12345678;

const cuentaCorriente1 = new cuentaCorriente();
cuentaCorriente1.client = client1;
cuentaCorriente1.balance = 1000;
cuentaCorriente1.number = 12345678;

console.log(cuentaCorriente1);
cuentaCorriente1.deposit(1000);
console.log(cuentaCorriente1);