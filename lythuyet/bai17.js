// do-while
let thuydeptrai = false;
let i = 0;

do {
  i++;
  console.log("Ma thanh thuy dep trai lan thu " + i);

  if (false) {
    thuydeptrai = true;
    console.log("ma thanh thuy da dep trai !");
  }
  break;
} while (thuydeptrai && i <= 3);
