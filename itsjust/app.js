/*
Kiara Castillo Magallanes
week 12
Array
11/10/22
*/

let dvOutput = document.getElementById("output")
let inNumbers = document.getElementById("numbers")


function average(){
    let sum = 0
    let numList = inNumbers.value.split(",").map(Number)
    for(i=0;i<numList.length;i++){
        sum += numList[i]
        dvOutput.innerHTML = ("Average: " + sum/numList.length + "<br>Sum: " + sum)
    }
    inNumbers.value = ""
}
