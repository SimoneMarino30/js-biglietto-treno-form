// TRACCIA
// Scrivere un programma che chieda all'utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del       biglietto di viaggio, secondo le seguenti regole:
// Il prezzo del biglietto è definito in base ai km(0.21 € al km)
// Va applicato uno sconto del 20 % per i minorenni
// Va applicato uno sconto del 40 % per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone(non stilizzati), realizziamo le specifiche scritte sopra.La risposta finale(o output) sarà anch'essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo)

// CHIEDERE ALL'UTENTE QUANTI KM DEVE PERCORRERE
// CHIEDERE ALL'UTENTE LA SUA ETA'
// CALCOLARE IL PREZZO DEL BIGLIETTO
// SE L'UTENTE
// HA MENO DI 18 ANNI--> APPLICO UNO SCONTO DEL 20%
//
// ALTRIMENTI SE L'UTENTE
// HA PIU' DI 65 ANNI--> APPLICO UNO SCONTO DEL 40%


const costoAlKm = 0.21;
// Il numero di chilometri da percorrere
const kilometri = parseInt(prompt('Quanti kilometri vuoi percorrere?'));

// costante prezzo
const price = (costoAlKm * kilometri);

// prezzo under 18
const priceUnder18 = (price - (price * 20 / 100));
// prezzo under 18 con decimali
const priceUnder18Fixed = priceUnder18.toFixed(2);

// prezzo over 65
const priceOver65 = (price - (price * 40 / 100));
// prezzo over 65 con decimali
const priceOver65Fixed = priceOver65.toFixed(2);

// Età del passeggero
let etaUser = parseInt(prompt('Quanti anni hai?'));


if (etaUser < 18) {
    alert('Il prezzo del biglietto è € ' + priceUnder18Fixed);
}
else if (etaUser > 65) {
    alert('Il prezzo del biglietto è € ' + priceOver65Fixed);
}
else {
    alert('Il prezzo del biglietto è € ' + price);
}
