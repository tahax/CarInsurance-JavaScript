class Calc {
    constructor(cars, yearValue, level) {
        this.cars = cars;
        this.yearValue = yearValue;
        this.level = level;
    }
    calculating(calc) {

        let priceBime;
        let BaseBime = 2000;

        //peride 1.15
        //bmv 1.30
        //benz 1.80

        switch (`${calc.cars}`) {
            case "peraid":
                priceBime = BaseBime * 1.15;
                break;
            case "bmv":
                priceBime = BaseBime * 1.30;
                break;
            case "benz":
                priceBime = BaseBime * 1.80;
                break;
        }

        // year difference
        const year = calc.yearValue;
        const difference = calc.calcDifferenceYear(year);
        priceBime = priceBime - (((difference * 3) / 100) * priceBime);

        // level of bime
        const level = calc.level;
        const levelBime = calc.calclevelBime(level, priceBime);


        return levelBime;
    }

    calcDifferenceYear(yearr) {
        let now = new Date().toLocaleDateString('fa-IR');
        let nowYear = now.slice(0, 4);
        let
            persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
            arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
            fixNumbers = function (str) {
                if (typeof str === 'string') {
                    for (var i = 0; i < 10; i++) {
                        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
                    }
                }
                return str;
            };

        //show max year
        let max = fixNumbers(nowYear);
        let year = max - yearr;
        return year;

    }

    calclevelBime(level, priceBime) {
        if (level === 'sadeh') {
            priceBime = priceBime * 1.30;
        } else {
            priceBime = priceBime * 1.60;
        }
        return priceBime;
    }
}

class HTMLUI {
    displayYears() {
        const now = new Date().toLocaleDateString('fa-IR');
        let nowYear = now.slice(0, 4);
        let
            persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
            arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
            fixNumbers = function (str) {
                if (typeof str === 'string') {
                    for (var i = 0; i < 10; i++) {
                        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
                    }
                }
                return str;
            };

        //show max year
        let max = fixNumbers(nowYear);

        //show min year
        let min = max - 20;

        // get the select tag
        let select = document.querySelector('#years');

        // for loop to show the years in options
        for (let i = max; i >= min; i--) {
            let option = document.createElement('option');
            option.setAttribute('value', i);
            option.textContent = i;
            select.appendChild(option);
        }
    }

// display errors
    displayError(err) {
        let body = document.querySelector('body');
        let showAlert = document.createElement("div");
        showAlert.className = 'showalert';
        showAlert.innerHTML = `<div class='alertBox tak-iranyekan-bold'>${err}</div>`;
        body.appendChild(showAlert);
        setTimeout(() => {
            showAlert.classList.add('opacity-come');
        }, 10)
        setTimeout(() => {
            showAlert.classList.add('opacity-out');
            setTimeout(() => {
                showAlert.remove();
            }, 1000)
        }, 2000)
    }

    createPrice(price) {
        let showR = document.querySelector('.show-results')
        let showPriceInShowR = document.createElement('div');
        if (showR.innerHTML !== null) {
            showR.innerHTML = null;
            showPriceInShowR.className = "tak-showprice tak-iranyekan-bold";
            showPriceInShowR.textContent = `قیمت کل برای بیمه ${Math.floor(price)}تومان`
            showR.appendChild(showPriceInShowR);
            setTimeout(() => {
                showPriceInShowR.classList.add('opacity-come');
            }, 10)
        }

    }
}