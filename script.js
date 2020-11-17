function validation(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("text1").value;
    var zipcode = document.getElementById("code").value;
    var email = document.getElementById("email").value;
    var phoneregex = /^[6-9]\d{9}$/;
    var userregex = /^([a-zA-Z0-9_-]){4,15}$/
    var emailregex=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var zregex = /^\d{6}$/;




    if (userregex.test(username) ){
        document.getElementById("userlbl").innerHTML= "Valid";
        document.getElementById("userlbl").style.visibility= "visible";
        document.getElementById("userlbl").className = "sa sa-check"
        document.getElementById("userlbl").style.color= "green";
    }
    else{
        document.getElementById("userlbl").innerHTML = "Invalid";
        document.getElementById("userlbl").className = "sa sa-times"
        document.getElementById("userlbl").style.visibility = "visible"
        document.getElementById("userlbl").style.color= "red"
    }

    if  (phoneregex.test(phone)){
        document.getElementById("phonelbl").innerHTML= "Valid";
        document.getElementById("phonelbl").className = "sa sa-check"

        document.getElementById("phonelbl").style.visibility= "visible";
        document.getElementById("phonelbl").style.color= "green";
    }
    else{
        document.getElementById("phonelbl").innerHTML = "Invalid";
        document.getElementById("phonelbl").className = "sa sa-times"
        document.getElementById("phonelbl").style.visibility = "visible"
        document.getElementById("phonelbl").style.color= "red"
    }
    if (emailregex.test(email)){
        document.getElementById("elbl").innerHTML = "Valid";
        document.getElementById("elbl").className = "sa sa-check"

        document.getElementById("elbl").style.visibility = "visible"
        document.getElementById("elbl").style.color= "green"
    }
    else{
        document.getElementById("elbl").innerHTML = "Invalid";
        document.getElementById("elbl").className = "sa sa-times"

        document.getElementById("elbl").style.visibility = "visible"
        document.getElementById("elbl").style.color= "red"
    }

    if (passregex.test(password)){
        document.getElementById("passlbl").innerHTML = "Valid";
        document.getElementById("passlbl").className = "sa sa-check"

        document.getElementById("passlbl").style.visibility = "visible"
        document.getElementById("passlbl").style.color= "green"
    }
    else{
        document.getElementById("passlbl").innerHTML = "Invalid";
        document.getElementById("passlbl").className = "sa sa-times"

        document.getElementById("passlbl").style.visibility = "visible"
        document.getElementById("passlbl").style.color= "red"
    }
    if (zregex.test(zipcode)){
        document.getElementById("ziplbl").innerHTML = "Valid";
        document.getElementById("ziplbl").className = "sa sa-check"
        document.getElementById("ziplbl").style.visibility = "visible"
        document.getElementById("ziplbl").style.color= "green"
    }
    else{
        document.getElementById("ziplbl").innerHTML = "Invalid";
        document.getElementById("ziplbl").className = "sa sa-times"

        document.getElementById("ziplbl").style.visibility = "visible"
        document.getElementById("ziplbl").style.color= "red"
    }

    if(userregex.test(username) && zregex.test(zipcode) && passregex.test(password) && emailregex.test(email) && (phoneregex.test(phone))){
        alert('Thank You giving your info in the form. You may continue now')
    }
    else{
        alert("Please Check one more time the above details fields filied correctly or not")

    }

    /*
    \w - Is match any word charecter (a-z, A-Z, 0-9 & _)
    \d - Is match any digit (equal to [0-9]
     */
}
