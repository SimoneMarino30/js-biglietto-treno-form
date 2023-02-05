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

/*********************************************************************
 *                                                                   *
 *                              COSTANTI                             *
 *                                                                   *
 *********************************************************************/

// costo al km
const costoAlKm = 0.21;
// NOME COGNOME UTENTE
let generalita = document.getElementById("NomeCognome").value;
// CHIEDERE ALL'UTENTE QUANTI KM DEVE PERCORRERE
let kilometri = document.getElementById("kilometriUtente").value;

// CHIEDERE ALL'UTENTE LA SUA ETA'
let etaUser = document.getElementById("eta").value;

/*********************************************************************
 *                                                                   *
 *                              FUNCTIONS                            *
 *                                                                   *
 *********************************************************************/

// GENERAZIONE BIGLIETTO

const buttonDoEl = document.getElementById("myBtn");

buttonDoEl.addEventListener("click", function ticketGeneration() {
  document.getElementById("ticket").className = "d-block";

  // costante prezzo standard
  const price = costoAlKm * kilometri;
  // prezzo standard arrotondamento decimali
  const priceFixed = price.toFixed(2);

  // costante prezzo under 18
  const priceUnder18 = price - (price * 20) / 100;
  // costante prezzo under 18 arrotondamento decimali
  const priceUnder18Fixed = priceUnder18.toFixed(2);

  // prezzo over 65
  const priceOver65 = price - (price * 40) / 100;
  // prezzo over 65 arrotondamento decimali
  const priceOver65Fixed = priceOver65.toFixed(2);

  document.getElementById("nomeTicket").innerHTML =
    "DETTAGLIO PASSEGGERO " + generalita;

  document.getElementById("carrozza").innerHTML =
    Math.floor(Math.random() * 10) + 1;

  document.getElementById("codiceCp").innerHTML = Math.floor(
    Math.random() * 10000
  );

  if (etaUser < 18) {
    document.getElementById("prezzo").innerHTML = priceUnder18Fixed + " €";
    document.getElementById("offerta").innerHTML = "Under 18";
    alert("Attenzione, hai ricevuto uno sconto del 20%");
  } else if (etaUser > 65) {
    document.getElementById("prezzo").innerHTML = priceOver65Fixed + " €";
    document.getElementById("offerta").innerHTML = "Over 65";
    alert("Attenzione, sei eleggibile per uno sconto del 40%");
  } else {
    document.getElementById("prezzo").innerHTML = priceFixed + " €";
    document.getElementById("offerta").innerHTML = "Standard";
  }
});

// PROVA BUTTON RESET ( NON FUNZIONANTE)

// const buttonReDoEl = document.getElementById("ReDoButton");

// buttonReDoEl.addEventListener("click", function ticketReDo() {
//   window.location.reload();
//   document.getElementById("NomeCognome").value = "";
//   document.getElementById("kilometriUtente").value = "";
//   document.getElementById("eta").value = "";
// });
