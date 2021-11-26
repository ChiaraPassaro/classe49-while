
// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }

// //contatore
// let i = 0;
// while (i < 6) { //condizione fintanto che questa condizione e vera vai avanti
//   console.log(i);

//   i++;
//   //incremento ovvero via di uscita
// }

const fruits = ['mandarino', 'mela', 'banana', 'arancia', 'kiwi', 'melograno', 'mirtillo', 'fragola', 'lampone'];
//se nella lista c'e banana
// let find = false;

// for (let index = 0; index < fruits.length; index++) {
//   if (fruits[index] == 'banana') { //
//     find = true;
//   }
//   console.log(index,);
//   console.log(fruits[index]);
//   console.log(find);
// }

// if (find == true) {
//   console.log('ho trovato banana');
// } else {
//   console.log('non ho trovato banana');
// }
// console.log(find);


//trasformazione in while
//girare finche find e false
// e finche non sono all'ultimo elemento
let find = false;
let i = 0;
console.log(find == false); //confronto e true, quando questa e false devo bloccare il ciclo

//true && true //entrambe devono essere vere per risultare vere
//true || true // anche se una delle due e falsa risulta vera, solo se sono entrambe false si rompe

// quando abbiamo dei confronti uniti da un operatore logico && ||
// tutta la condizione assieme deve generare un true o false
// quando abbiamo && entrambe le condizioni devono essere vere per risultare true
// true && false uguale a false
// false && true uguale a false
// true && true uguale a true
//(find == false && i < fruits.length)  uguale a true


// true || true uguale a true
// false || true uguale a true
// true || flase uguale a true
// false || false uguala a false

// quando abbiamo || basta che sia vera una sola delle due per risultare true
//(find == false || i < fruits.length)  uguale a true


// while (find == false && i < fruits.length) { //vai avanti finche e true
//   console.log(i);
//   console.log(fruits[i]);
//   if (fruits[i] == 'banana') {
//     find = true;
//   }
//   i++;
// }

// while (
//   !(find == true || i == fruits.length - 1)
// ) {
//   console.log(i);
//   console.log(fruits[i]);
//   if (fruits[i] == 'banana') {
//     find = true;
//   }
//   i++;
// }

// while (fruits[i] != 'banana' && i < fruits.length) {
//   console.log(i);
//   console.log(fruits[i]);
//   i++;
// }

// console.log(find);



const list = [
  'Latte',
  'Cacao',
  'Insalata',
  'Carote',
  'Pomodori',
  'Piatti pronti'
];

const container = document.querySelector('.container');

//stampiamo con un ciclo while gli elementi in pagina

let index = 0;
while (index < list.length) {
  // console.log(list[index]);
  const li = document.createElement('li');
  li.innerHTML = list[index];
  container.append(li);
  index++;
}


// array 10 elementi con numeri random ma non identici
const numbers = [];
for (let i = 0; i < 10; i++) {
  const number = Math.floor(Math.random() * 20) + 1; //numero random da 1 a 20
  //allora lo pusho
  // for su numbers e valuta se c'e elemento o meno e restituisce un boolean
  if (!numbers.includes(number)) { //se number non e dentro numbers
    numbers.push(number);
  } else {
    //nulla
  }
}

//puo generare un array piu piccolo 
console.log(numbers);