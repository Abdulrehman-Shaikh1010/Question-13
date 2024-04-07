var myTrans = ["Car", "Bus", "Bike", "Train",];
// for(let i = 0; i < myTrans.length; i++){
//    console.log(`I Would like to own a ${myTrans[i]}`);
// }
myTrans.map(function (ib) {
    console.log("I Would like to own a ".concat(ib));
});
