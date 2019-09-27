function calculations() {
    
    //Passes string 
    const string1 = document.querySelector('#field1').value
    const string2 = document.querySelector('#field2').value
    const string3 = document.querySelector('#field3').value

    //Doing all the simple calculations
    inital = string1
    if(string2.length < inital.length){
        inital = string2
    }
    if(string3.length < inital.length){
        inital = string3
    }

    //Modifying HTML page with the calculations output
    document.querySelector('#smallest').innerHTML = inital
}
document.querySelector('#calculate').addEventListener('click', calculations)