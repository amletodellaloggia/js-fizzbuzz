Esercizio
===
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
===
SVOLGIMENTO:

1.
Stabilire Variabili per riutilizzo

	1.1 Variabile per MULTIPLI5 & MULTIPLI3
	1.2 Variabile per MULTIPLI5
	1.3 Variabile per MULTIPLI3
	1.4 Variabile per i numeri senza condizione


2.
Cercare tutti i numeri compresi tra 1 e 100, sfogliarli e applicarvi delle condizioni

 	2.1 Creare un ciclo, che cerchi i numeri tra 1 e 100 partendo da 1, li sfogli incrementandone il valore,
 	    vi applichi condizioni e salvi i risultati in una variabile

		2.1.1 Creare la prima condizione con IF che riconosca i numeri multipli di 5 & 3 contemporaneamente
		2.1.2 Memorizzare in variabile dedicata i numeri riconosciuti per la condizione, aggiornandone il valore
		2.1.3 Stampare in console la parola identificativa della condizione del numero trovato, al posto del numero stesso

		2.1.4 Ripetere gli stessi step per entrambe le successive condizioni (multipli 5, multipli 3), utilizzando ELSE IF (in quanto possibili solo se il primo controllo non è superato dal numero trovato) e quindi stampare in console la parola identificativa del numero trovato, al posto del numero stesso

		2.1.5 Stampare in console la variabile per i numeri senza condizione (rimanenti) che completerà la visualizzazione con i numeri che non superano i controlli precedenti

 	2.2 Fine del ciclo

3.
Così facendo scorriamo i numeri tra 1 e 100, li sottoponiamo a controlli con IF e ELSE if, per ogni controllo i numeri che rispetteranno le condizioni del controllo verranno salvati nella variabile dedicata e stampati con una particolare nomenclatura definita nella condizione specifica, diversamente i numeri che non supereranno alcun controllo invece verranno stampati regolarmente, inalterati