// Doi tuong Date lam viec khi lien quan den thgian

let date = new Date();
let year = date.getFullYear();
let hour = date.getHours();
let month = date.getMonth();
let day = date.getDay();
let min = date.getMinutes();

console.log(`${day}/${month}/${year}`);
