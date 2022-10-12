
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
  // creamos un metodo para mostrar el saldo
  showBalance() {
    console.log("El saldo de la cuenta de " + this.client.name + " es " + this.balance);
  }
}

export { client, cuentaCorriente };