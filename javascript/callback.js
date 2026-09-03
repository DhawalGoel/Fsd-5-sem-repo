function sum(a, b) {
    return a + b;
}
function sumWithmsg(msg, clbk){
    const result = clbk(5, 10);
    const fresult = "Hi" + msg + " your score is: " + result;
    console.log(fresult);
}
sumWithmsg(" John" , sum);