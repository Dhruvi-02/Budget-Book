function login(event) {
    event.preventDefault();
    let name= document.getElementById("name").value;
    let pass= document.getElementById("pass").value;

    let a=localStorage.getItem("name");
    let b=localStorage.getItem("pass");

    if(name==="" || pass==="") {
        alert("Invalid username or password");
    }
    else if(name!==a || pass!==b) {
        alert("User dosen't exist")
    }
    else {
            window.location.href="Budget-book.html";
    }
}




