/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*let n1 = prompt ("Inserisci il primo numero");
let n2 = prompt ('Inserisci il secondo numero');
console.log(n1);
console.log(n1);

if( n1 > n2 ){
  console.log('il numero maggiore è il primo inserito, ovvero:' + n1)
}
else if(n1 == n2){
  console.log( 'I numeri sono uguali')
}
else{
  console.log(' il numero maggiore è il secondo inserito ' + n2)
}*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*let i = prompt ('Inserisci un numero');
if (i != 5){
  console.log('Not equal');
}
else{
  console.log ('Il numero è uguale a 5');
}*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*let n = prompt ('Inserisci un numero');
if (n % 5 == 0){
  console.log(' il numero è divisibile per 5');
}
else{
  console.log('il numero NON è divisibile per 5');
}*/



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*let n1 = prompt ("Inserisci il primo numero");
let n2 = prompt ('Inserisci il secondo numero');
if(n1 === 8 || n2 === 8){
  console.log( 'uno dei 2 valori è 8');
  }else if (n1 + n2 === 8  || n1 - n2 === 8  ){
    console.log("Il risultato della somma/sottrazione tra i due numeri è 8");
  } else {
    console.log("Nessun 8 trovato")
  }*/


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/*let num1 = 3;
let num2 = 5; 
let num3 = 10;

if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2);
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    console.log(num2, num1, num3);
  } else {
    console.log(num2, num3, num1);
  }
} else {
  if (num1 >= num2) {
    console.log(num3, num1, num2);
  } else {
    console.log(num3, num2, num1);
  }
}*/




/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

 /*let n = 6;
if(typeof n === "number"){
  console.log('Il valore è un numero')
} 
else{
  console.log('Il valore non è un numero');}*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/*let n = prompt ('Inserisci un numero');
if (n % 2 == 0){
  console.log(' il numero è Pari');
}
else if (n % 2 == 1 ){
  console.log('il numero è Disapri');
}*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/*let val = 7;
  if (val < 10) {
      console.log("Il numero è minore di 10");
    } else if (val > 5) {
      console.log("Il nemero è maggiore di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city='Torino';
console.log(me)*/



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
delete me.lastName;
console.log(me);*/


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
const skills = ['javascript', 'html', 'css'];
console.log(skills.pop());
console.log(skills);*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/*let Arr = [1, 2, 3 , 4 , 5 , 6 , 7 , 8 , 9 ,10];
Arr.splice(9, 0, 100);
console.log(Arr);*/



