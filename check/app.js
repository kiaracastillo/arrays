/*
Kiara Castillo Magallanes
week 12
Array
11/10/22
*/



let dvOutcome = document.getElementById('outcome')
let inNumbers = document.getElementById('numbers')

//this function splits the input into an array 
function checkWin(){
    let counter = 0
    let winner = false
    let numList = inNumbers.value.split(',')
    for(i=0;i<numList.length;i++){
        if(numList[i]=='1'){
            counter +=1
            if(counter == 3){
               winner = true
               break
            }
            //if its not a 1 it resets the counter
        }else{
            counter = 0
        }
    }
    if (winner == true){
        dvOutcome.innerHTML = 'Winner!!!'
    }else{
       dvOutcome.innerHTML = "Not Winner."  
    }
    
}