const form = document.getElementById("loginform");


form.addEventListener("submit" , function (e){
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert ("Please fill all fields");
        return;
    }

    if (password.length < 6) {
        alert ("Password must be atleast 6 characters");
        return;
    }

    alert ("Login successful (demo) ");
});