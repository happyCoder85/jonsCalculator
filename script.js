document.addEventListener("DOMContentLoaded", load);

function load() {
    // Output Text
    const output = document.querySelector("div#output");

   
    
    // First Row
    const mc = document.querySelector("main section ul li button#mc");
    const mr = document.querySelector("main section ul li button#mr");
    const mplus = document.querySelector("main section ul li button#mplus");
    const ms = document.querySelector("main section ul li button#ms");
    // Second Row
    const percent = document.querySelector("main section ul li button#percent");
    const cleareverything = document.querySelector("main section ul li button#cleareverything");
    const clear = document.querySelector("main section ul li button#clear");
    const del = document.querySelector("main section ul li button#delete");
    // Third Row
    const onex = document.querySelector("main section ul li button#onex");
    const exponent = document.querySelector("main section ul li button#exponent");
    const sqrt = document.querySelector("main section ul li button#sqrt");
    const divide = document.querySelector("main section ul li button#divide");
    // Fourth Row
    const seven = document.querySelector("main section ul li button#seven");
    const eight = document.querySelector("main section ul li button#eight");
    const nine = document.querySelector("main section ul li button#nine");
    const multiply = document.querySelector("main section ul li button#multiply");
    // Fifth Row
    const four = document.querySelector("main section ul li button#four");
    const five = document.querySelector("main section ul li button#five");
    const six = document.querySelector("main section ul li button#six");
    const subtract = document.querySelector("main section ul li button#subtract");
    // Sixth Row
    const one = document.querySelector("main section ul li button#one");
    const two = document.querySelector("main section ul li button#two");
    const three = document.querySelector("main section ul li button#three");
    const add = document.querySelector("main section ul li button#add");
    // Seventh Row
    const posNeg = document.querySelector("main section ul li button#posNeg");
    const zero = document.querySelector("main section ul li button#zero");
    const decimal = document.querySelector("main section ul li button#decimal");
    const equals = document.querySelector("main section ul li button#equals");

    // Event Listeners for numbers
    one.addEventListener("click", () => {
        isUnderTwentyTwo(1);
    });
    two.addEventListener("click", () => {
        isUnderTwentyTwo(2);
    });
    three.addEventListener("click", () => {
        isUnderTwentyTwo(3);
    });
    four.addEventListener("click", () => {
        isUnderTwentyTwo(4);
    });
    five.addEventListener("click", () => {
        isUnderTwentyTwo(5);
    });
    six.addEventListener("click", () => {
        isUnderTwentyTwo(6);
    });
    seven.addEventListener("click", () => {
        isUnderTwentyTwo(7);
    });
    eight.addEventListener("click", () => {
        isUnderTwentyTwo(8);
    });
    nine.addEventListener("click", () => {
        isUnderTwentyTwo(9);
    });
    zero.addEventListener("click", () => {
        isUnderTwentyTwo(0);
    });

    // Event listeners for top row
    percent.addEventListener("click", () => {

    });  

    function isUnderTwentyTwo(number) {
        if (output.innerHTML.length <= 21) {
            output.innerHTML += number;
        }
    }
}
    