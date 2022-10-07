let pw = document.querySelector("#pw");
let pw_confirm = document.querySelector("#confirm_pw");

pw_confirm.addEventListener("input", function (e) {
    if (pw.value === pw_confirm.value) {
        pw_confirm.classList.remove("error");
    } else {
        pw_confirm.classList.add("error");
    }
})
pw.addEventListener("input", function (e) {
    if (pw.value === pw_confirm.value) {
        pw_confirm.classList.remove("error");
    } else {
        pw_confirm.classList.add("error");
    }
})