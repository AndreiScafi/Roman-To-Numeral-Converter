//Variables
const container = document.querySelector('.container');
const number = document.getElementById('number');
const output = document.getElementById('output');
const convertBtn = document.getElementById('convert-btn');
//End of Variables

// Roman Numeral Converter Function
function RomanNumeralConverter(input) {
    const inputInt = parseInt(input);

    if (isNaN(inputInt) || !input) {
        return 'Please enter a valid number';
    } else if (input < 1) {
        return 'Please enter a number greater than or equal to 1';
    } else {
        const roman = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        }

        let result = '';

        for (const num in roman) {
            //console.log(roman[num])//number
            //console.log(num)//key

            while (input >= roman[num]) {
                result += num;
                input -= roman[num]
            }
        }

        return result
    }


}
// End of Roman Numeral Converter Function

convertBtn.addEventListener('click', () => {
    output.textContent = RomanNumeralConverter(number.value);
    container.classList.add('change');
})