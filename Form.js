function myForm() {
    let name = document.getElementById("fname").value;
    let emai = document.getElementById("email").value;
    let course= document.getElementById("course").value;
    // let gn = document.getElementById("gender");
    let male = document.querySelector('input[id="male"]:checked');
    let female = document.querySelector('input[id="female"]:checked');
    let phone = document.getElementById("mobile").value;
    let pass = document.getElementById("password").value;
    let pass1 = document.getElementById("password1").value;
    let box = document.querySelector('input[id="checkbox"]:checked');
    let namerule = /^[a-z]+$/i;  //if () is used to use test function
    let emailrule = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+\@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]*$/;
    let rule = /^[A-Za-z]\w{7,14}$/;
    if (name.match(namerule)) {
        document.getElementById("fname").style.border = "3px solid green";
        // document.getElementById("fname").style.backgroundcolor = aqua;
        document.getElementById("er1").innerHTML = "";
        // document.getElementById("er1").innerHTML = "ion-ios-checkmark";
    }
    // else if (name.length <= 3) {
        // document.getElementById("fname").style.border = "3px solid red";
        // document.getElementById("er1").innerHTML = "Please, enter 3..";
        // alert("asdghsdfgh");
    // }
    else {
        document.getElementById("fname").style.border = "3px solid red";
        document.getElementById("er1").innerHTML = "*Please enter a valid name";
    }

    if (emai.match(emailrule)) {
        document.getElementById("email").style.border = "3px solid green";
        document.getElementById("er2").innerHTML = "";
    }
    else { 
        document.getElementById("email").style.border = "3px solid red";
        document.getElementById("er2").innerHTML = "*Please enter a valid email";
    }


    if (course == 'select') {
        document.getElementById("course").style.border = "3px solid red";
        document.getElementById("er10").innerHTML = "*Please select your preferred cource";
    }
    else {
        document.getElementById("course").style.borderColor = "green";
        document.getElementById("er10").innerHTML = "";
    }
    if (male != null) {
        // document.getElementById("err-msg7").style.color = "green";
        document.getElementById("er4").innerHTML = "";
    }
    else if (female != null) {
        // document.getElementById("err-msg7").style.color = "green";
        document.getElementById("er4").innerHTML = "";
    }
    else {
        document.getElementById("er4").innerHTML = "*select anyone";
    }
    if (phone == "") {
        document.getElementById("mobile").style.border = "3px solid red";
        document.getElementById("er5").innerHTML = "*Please mention valid mobile no";
    }
    else if (phone.length != 10) {
        document.getElementById("mobile").style.border = "3px solid red";
        document.getElementById("er5").innerHTML = "*Mobile no hould be 10 digits";
    }
    else {
        document.getElementById("mobile").style.border = "3px solid green";
        document.getElementById("er5").innerHTML = "";
    }

    
    if (pass == "" && pass1 == "") {
        document.getElementById("password").style.border = "3px solid red";
        document.getElementById("password1").style.border = "3px solid red";
        document.getElementById("er6").innerHTML = "*password is required";
        document.getElementById("er7").innerHTML = "*password is required";
    }
    else if (pass.match(rule) && pass.match(rule)) {
        document.getElementById("password").style.border = "3px solid red";
        document.getElementById("password1").style.border = "3px solid red";
        document.getElementById("er7").innerHTML = "*password is 7 required";
        document.getElementById("er6").innerHTML = "*password is 7 required";
    }
    else if (pass.length != pass1.length) {
        document.getElementById("er6").innerHTML = "*password must match";
        document.getElementById("er7").innerHTML = "*password must match";
        document.getElementById("password").style.border = "3px solid red";
        document.getElementById("password1").style.border = "3px solid red";
       
    }
    else {
        document.getElementById("password").style.border = "3px solid green";
        document.getElementById("password1").style.border = "3px solid green";
        document.getElementById("er6").innerHTML = "";
        document.getElementById("er7").innerHTML = "";
    }

    // <div class="box">
    //             <input id="checkbox" type="checkbox">
    //             <label for="checkbox">
    //                 I agree to these <a href="#">Terms and Conditions</a></label>
    //             <p id="er9"></p>
    //         </div>

    // if (box.checked) {
    //     document.getElementById("er9").innerHTML = "";
    //   } else {
    //     document.getElementById("er9").innerHTML = "You must agree to the Terms";
    // }
    if (box != null) {
        // document.getElementById("err-msg7").style.color = "green";
        document.getElementById("er9").innerHTML = "";
    }

    else {
        document.getElementById("er9").innerHTML = "*you must select checkbox";
    }
}
