
function deixarConfidencial(arrayDeString){
    let arrayConfidencial = [];

    for (let i = 0; i < arrayDeString.length; i ++){
        let stringConfidencial = arrayDeString[i].toUpperCase();
        arrayConfidencial.push(stringConfidencial);
    }

    return arrayConfidencial;
}

let arrayNormal = ["Chiclete","abobora","Limao"];
let arrayConfidencial = deixarConfidencial(arrayNormal);

console.log(`Normal ${arrayNormal}
    Confidencial ${arrayConfidencial}`);