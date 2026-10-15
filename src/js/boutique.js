$(document).ready(function () {

    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    const num = document.querySelector(".num");

    // Vérifier que le compteur existe sur la page
    if (plus && minus && num) {

        let a = 1;

        plus.addEventListener("click", () => {
            a++;
            num.textContent = a < 10 ? "0" + a : a;
        });

        minus.addEventListener("click", () => {
            if (a > 1) {
                a--;
                num.textContent = a < 10 ? "0" + a : a;
            }
        });

    }

});