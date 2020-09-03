//Submit function to check response when form submited or time elapsed
function submit() {
    // var taille = document.forms.length;
    // var varx = document.forms[1];
    //Stop the couter
    clearInterval(x);
    var points = 0;
    for (let i = 0; i < document.forms.length; i++) {
        //retrieve the actual form
        var actualForm = document.forms[i];
        var id = `r${i+1}`;
        var actualResponse = document.getElementById(id).innerText;
        //Check if radio buttons ae filled
        var filled = false;
        for (let j = 0; j < actualForm.length; j++) {
            if (actualForm[j].checked) {
                filled = true;
                //alert("you checked :" + actualForm[j].value+"\n"+"Acual response :"+ actualResponse);
                if(actualForm[j].value == actualResponse ){
                    document.getElementById(id).className = "is-size-4 has-text-success";
                    points++;
                }else {
                    document.getElementById(id).className = "is-size-4 has-text-danger";
                }
            }
          
            //Disable all radio buttons
            actualForm[j].disabled = true;
        }
        if(!filled){
            document.getElementById(id).className = "is-size-4 has-text-danger";
        }
    }
    //Print results into the form
    document.getElementById("result1").innerText = "Score : "+points+" /10";
    document.getElementById("result2").innerText = "Score : "+points+" /10";
    //Send results to the modal
    document.getElementById("result").innerHTML = ` <p class="is-size-1 has-text-black-bis">Your Score:</p>
                                                    <p class="is-size-2 has-text-info"> ${points} /10</p>
                                                    <button class="button is-outlined is-focused is-large settopmargemedium" onclick="removeModal()">Check your answers</button>
                                                  `;
    
    
}