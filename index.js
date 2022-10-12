class client {
  name;
  dni;
  rut;
}

class cuentaCorriente {
  client;
  balance;
  number;

  constructor() {
    this.balance = 0;
  }
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

cuentaCorriente1.deposit(1000);
console.log(cuentaCorriente1);

const cuentaCorriente2 = new cuentaCorriente();
const client2 = new client();

client2.name = "Pedro";
client2.dni = 87654321;
client2.rut = 87654321;

cuentaCorriente2.client = client2;
cuentaCorriente2.balance = 1000;
cuentaCorriente2.number = 87654321;

console.log(cuentaCorriente2);