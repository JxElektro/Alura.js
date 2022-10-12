// Creamos una clase cliente

class client {
  name;
  dni;
  rut;
}


// creamos una clase cuenta
class cuentaCorriente {
  client;
  #alance;
  number;
  // creamos un constructor que mantine el saldo inicial en 0
  constructor() {
    this.balance = 0;
  }
  // creamos un metodo para agregar dinero que impide que se agreguen cantidades negativas
  deposit(amount) {
    console.log("Depositando " + amount + " en la cuenta de " + this.client.name);
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.log("No se puede depositar una cantidad negativa");
    }
  }
// creamos un metodo para retirar dinero que impide que se retiren cantidades negativas y que no se pueda retirar mas dinero del que se tiene
  withdraw(amount) {
    console.log("Retirando " + amount);
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("No tienes suficiente saldo");
    }
  }

}
// creamos una instancia de la clase cliente
const client1 = new client();
client1.name = "Juan";
client1.dni = 12345678;
client1.rut = 12345678;

// creamos una instancia de la clase cuenta
const cuentaCorriente1 = new cuentaCorriente();
cuentaCorriente1.client = client1;
cuentaCorriente1.balance = 1000;
cuentaCorriente1.number = 12345678;




const cuentaCorriente2 = new cuentaCorriente();
const client2 = new client();

client2.name = "Pedro";
client2.dni = 87654321;
client2.rut = 87654321;

cuentaCorriente2.client = client2;
cuentaCorriente2.balance = 1000;
cuentaCorriente2.number = 87654321;

cuentaCorriente1.deposit(1000);
//cuentaCorriente2.deposit(1000);


console.log(cuentaCorriente1);