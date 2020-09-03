//Form timer
var date = new Date();

//set desired minutes
var minutes = 3;  

console.log(minutes);
//Convert minutes to seconds
var seconds = minutes * 60;

//Init vaiables for prining
var m = minutes;
var s = 00;

//Each seconds decrement the seconds
var x = setInterval(function() {
    console.log(m+":"+s);
    if(s == 00){
        s = 60;
        m--;
    }
    s--;
   
    //Change the color of the timer when under 10 seconds
    if(m == 0 && s == 10){
        document.getElementById("timer").className = "is-size-3 has-text-danger has-text-centered";
    }

    //Check if time elapsed
    if(m == 0 && s == 0){
        clearInterval(x);
        console.log("Out of time");
        document.getElementById("timer").innerText = "Out of time"; 
        updateModal();    
    }else {
        //Printing into the DOM according to the seconds value
        var printTimeScreen = "";
        if(s < 10)
            printTimeScreen = `${m}:0${s}`;
        else
            printTimeScreen = `${m}:${s}`;

        document.getElementById("timer").innerText = printTimeScreen;
        
    }
}, 1000);