function validateUsername(uname) {
    return uname.length >= 5;
}

function validateEmail(email) {
    if (email.length < 7) {
        return false;
    }
    let indAt = email.indexOf("@");
    let indCm = email.indexOf(".com");
    if (indAt == -1 || indCm == -1) {
        return false;
    }
    let cntAt = email.split("@").length - 1;
    let cntCm = email.endsWith(".com");
    if (cntAt != 1 || !cntCm) {
        return false;
    }
    let prefx = email.slice(0, indAt);
    let posfx = email.slice(indAt + 1, indCm);
    if (prefx.length < 1 || posfx.length < 1) {
        return false;
    }
    for (let i = 0; i < prefx.length; i++) {
        let check = prefx[i];
        if (i == 0 || i == prefx.length - 1) {
            if ("a" <= check && check <= "z" || "A" <= check && check <= "Z" || "0" <= check && check <= "9") {
                continue;
            }
            else {
                return false;
            }
        }
        else {
            if ("a" <= check && check <= "z" || "A" <= check && check <= "Z" || "0" <= check && check <= "9" || check == "_" || check == "-" || check == ".") {
                continue;
            }
            else {
                return false;
            }
        }
    }
    for (let i = 0; i < posfx.length; i++) {
        let check = posfx[i];
        if ("a" <= check && check <= "z" || "A" <= check && check <= "Z" || "0" <= check && check <= "9") {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

function validatePhoneNumber(phone) {
    return phone.length == 10 && !isNaN(phone);
}

function validatePassword(passw) {
    let lngth = passw.length >= 8;
    let lower = false;
    let upper = false;
    let digit = false;
    let elses = false;
    for (let i = 0; i < passw.length; i++) {
        let check = passw[i];
        if (check == " ") {
            continue;
        }
        else if ("a" <= check && check <= "z") {
            lower = true;
        }
        else if ("A" <= check && check <= "Z") {
            upper = true;
        }
        else if ("0" <= check && check <= "9") {
            digit = true;
        }
        else {
            elses = true;
        }
    }
    return lngth && lower && upper && digit && elses;
}

function validateConfirm(confm, passw) {
    return confm == passw;
}

function validator() {
    let uname = document.getElementById("uname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let passw = document.getElementById("passw").value;
    let confm = document.getElementById("confm").value;
    if (!validateUsername(uname)) {
        return alert("Username must be at least 5 characters");
    }
    if (!validateEmail(email)) {
        return alert("Email must be in the correct format");
    }
    if (!validatePhoneNumber(phone)) {
        return alert("Phone Number must be a number only and must be 10 digits");
    }
    if (!validatePassword(passw)) {
        return alert("Password must be at least 8 characters and must contain at least one uppercase, one lowercase, one number, and one special character");
    }
    if (!validateConfirm(confm, passw)) {
        return alert("Confirm Password must be match the password");
    }
    return alert("Registration successful");
}
