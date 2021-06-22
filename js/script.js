// variables
let form = document.querySelector('.tak-form');
const html = new HTMLUI();


// eventListeners

eventListeners();

function eventListeners() {


    // create the years on the select options
    document.addEventListener('DOMContentLoaded', function () {
        html.displayYears();
    });


    // take form values
    document.addEventListener('submit', function (e) {
        e.preventDefault();
        const cars = document.querySelector('#cars').value;
        const yearValue = document.querySelector('#years').value;
        const level = document.querySelector('input[name = "bime"]:checked').value;
        if (cars === "" || yearValue === "" || level === "") {
            html.displayError("تمام فیلد ها را پر کنید!!!");
        } else {
            let calc = new Calc(cars, yearValue, level);
            const price = calc.calculating(calc);
            console.log(price);
            html.createPrice(price);
        }
    })

}

