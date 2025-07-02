// Svolgimento

// Inizializzo le variabili

let multipleBoth = 0; 								//* variabile per memorizzare i numeri trovati multipli di entrambi 5 e 3
let multipleFive = 0;								//* variabile per memorizzare i numeri trovati multipli di 5
let multipleThree = 0;								//* variabile per memorizzare i numeri trovati multipli di 3
let i = 0;											//* variabile per memorizzare i numeri rimanenti 


// Faccio partire il ciclo

for (i=1; i<=100; i++){ 							//* i parte da 1, le i sono tra 1 e 100, li scrorro incrementando i

	if (i % 3 === 0 && i % 5 === 0){ 				//* condizione: numero trovato deve essere sia  multiplo di 5 che di 3 
		multipleBoth += i;							//* salvo il risultato nella variabile 
		console.log(`FizzBuzz`) 					//* stampo 'FizzBuzz' quando il il numero trovato è sia multiplo di 5 che di 3
	}
	else											//* condizione: se il numero non rispetta le condizioni precedenti
	console.log(`${i}`);							//* stampo i numeri senza condizione rimanenti con il loro valore
}

// Fine del ciclo
