import "./style.css";

/*
Queremos implementar una pantalla en la que aparezca un display con el turno actual de una clínica y un botón para pasar al siguiente turno y otro para volver al anterior.

A implementar:

Básico:
En grande se muestra el turno.
El operario puede ir dándole a siguiente o anterior y el turno cambia.
Además de esto vamos a añadir un botón de reset que pone el turno a 0.
Avanzado:
Como challenge puedes añadir una caja de texto y un botón que permita cambiar el turno a un valor que ponga el operario.
Challenge:
Sea el número que sea, lo quiero mostrar siempre con dos digitos (es decir el 1 -> 01, el 2 -> 02, el 10 -> 10, el 11 -> 11, etc), investiga como puedes formatear un número para que siempre tenga dos dígitos.
Pista: Puedes usar la función padStart, la cual nos ayuda a añadir ceros o cualquier otro carácter que queramos al principio de una cadena de texto..

Si lo implementas en TypeScript en modo estricto, mejor que mejor.


  01 - objeto para gestionar el numero tracker
  02- agregar los elementos del dom a modificar
  03-agregar un evento para cuando el usuario clica en reset, se llama a la funcion reset y se modifica
  04-agregar un evento cuando el usuario hace click en next, se ensena el next
  05- agregar un evento cuando el usuario click en previous, se ensena el previous


<div class="number-display" id="numberDisplay">
    <h1 class="number-turn" id="numberTurn">01</h1>
    <p class="text-turn">Por favor, acérquese al mostrador</p>
  </div>

  <div class="controlllers">
    <div>
      <button id="previousNumber">Previous Number</button>
      <button id="nextNumber">Next Number</button>
    </div>
    <button id="resetNumber">Reset Numbers</button>
    <button id="showInsert">Insert New Number</button>

    <form class="hidden" id="newNumberForm">
      <label for="newNumber">Insert New Number</label>
      <input type="number" id="newNumber">
      <button type="submit" id="submitNumber">Change</button>
    </form>


  </div>


*/

interface numberTracker {
	currentNumber: number;
	nextNumber(): number;
	previousNumber(): number;
	insertNumber(arg0: number): number;
	resetNumberTracker(): number;
}

const numberTracker: numberTracker = {
	currentNumber: 1,
	nextNumber(): number {
		return (this.currentNumber = this.currentNumber++);
	},
	previousNumber(): number {
		return (this.currentNumber = this.currentNumber--);
	},
	insertNumber(newNumber: number): number {
		return (this.currentNumber = newNumber);
	},

	resetNumberTracker(): number {
		return (this.currentNumber = 0);
	},
};

const showCurrentNumber = (numberTracker: numberTracker) => {
	const currentNumber = `${numberTracker.currentNumber}`;
	const currentNumberEdited = currentNumber.padStart(2, "0");

	const currentNumberDOM = document.getElementById("numberTurn");

	if (currentNumberDOM) {
		currentNumberDOM.innerText = currentNumberEdited;
	}
};

document.addEventListener("DOMContentLoaded", () => {
	showCurrentNumber(numberTracker);
});
