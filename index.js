//import modules from client.js
import { client } from "./client.js";
import { cuentaCorriente } from "./client.js";

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

//cuentaCorriente1.deposit(1000);
//cuentaCorriente2.deposit(1000);



// me muestra el saldo de la cuenta de juan usando el metodo showBalance

cuentaCorriente1.showBalance();