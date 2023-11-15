function displayNum(num){
    result.value+=num;
    console.log(typeof(result.value));
}

function clearVal(){
    result.value=""
}

function evalExp(){
    // exp=result.value
    // output=eval(exp)
    // result.value=output

    result.value=eval(result.value)
}

function remove(){
    result.value=result.value.slice(0,-1)
}