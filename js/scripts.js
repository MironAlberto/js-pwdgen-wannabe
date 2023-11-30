const stringaConNome = "Alberto";
const stringaConCognome = "Miron";
const stringaConColorePreferito = "Verde";
const stringaConNumeroPreferito = "19";
const stringaConCaratteristiche = `
    Ciao mi chiamo:
    ${stringaConNome}
    ${stringaConCognome}
    ed il mio colore preferito è il:
    ${stringaConColorePreferito}
    mentre il mio numero preferito è il:
    ${stringaConNumeroPreferito}
`;

console.log(
    stringaConCaratteristiche
);


document.getElementById('my-div').innerHTML = stringaConCaratteristiche;

const nome = prompt('Qual è il tuo nome?');

const cognome = prompt('Qual è il tuo cognome?');

const colorePreferito = prompt('Qual è il tuo colore preferito?');

const numeroPreferito = prompt('Qual è il tuo numero preferito?');

console.log(`
    L'utente ha inserito:
    ${nome}
    ${cognome}
    ${colorePreferito}
    ${numeroPreferito}
`);