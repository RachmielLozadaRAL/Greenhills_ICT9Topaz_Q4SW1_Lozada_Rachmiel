function log_in() {


    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "1234") {
        alert("Access granted");
    } else {
        alert("Access denied");
     }
    }
    