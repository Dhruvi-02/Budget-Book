function signUp(event) {
    event.preventDefault();
    let name= document.getElementById("name").value;
    let pass= document.getElementById("pass").value;

    if(name=="" || pass=="") {
        alert("Invalid Username or Password");
    }
    else {
        localStorage.setItem("name",name);
        localStorage.setItem("pass",pass);

        document.getElementById("result").innerText="Details saved successfully"

        setTimeout(()=> {
            alert("Account created!");
            window.location.href="login.html";}, 1000)
    }
}

