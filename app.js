let main = 'result'; /* display result ID */

function getID(data){
    return document.getElementById(data);
}

function getValue(data){
    let input = getID(main);
    let oprArr = ["+","-","*","/"];
    let lastChar =  input.value.slice(-1);
    if(data.innerHTML != lastChar){
         if(oprArr.indexOf(lastChar) != -1){
            input.value +=  data.innerHTML; 
        }              
    }
    switch(lastChar){
        case '+':
        return;
        case '-':
        return;
        case '*':
        return;
        case '/':
        return;
    }
    input.value += data.innerHTML;
}

function getResult(){
    let input = getID(main);
    input.value = eval(input.value);
}

function clearVal(){
    let input = getID(main);
    input.value = input.value.slice(0, -1);
}

function allClear(){
    let input = getID(main);
    input.value = ""; 
}