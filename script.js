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

    // Event Listeners for top row
    // Event Listeners for Clearing Screen (C)
    clear.addEventListener("click", () => {
        output.innerHTML = "";
    });

    // Event listener for deleting numbers
    del.addEventListener("click", () => {
        if (output.innerHTML.length > 1) {
            output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1);
        }
        else {
            output.innerHTML = "";
        }
    });

    // Event listeners for 2nd row
    // Event listener for the 1/x key
    onex.addEventListener("click", () => {
        if (output.innerHTML.length > 0) {
            output.innerHTML = 1 / output.innerHTML;
        }
    });

    // Event listener for the exponent button
    exponent.addEventListener("click", () => {
        if (output.innerHTML.length > 0) {
        output.innerHTML = output.innerHTML * output.innerHTML;
        }
    });

    // Event listener for the SqRt button
    sqrt.addEventListener("click", () => {
        output.innerHTML = Math.sqrt(output.innerHTML);
    });

    // Event listener for the divide button
    divide.addEventListener("click", () => {
        const lastEntry = parseInt(output.innerHTML.substring(output.innerHTML.length - 1));
        
        if (output.innerHTML.length > 0 && !isNaN(lastEntry) ) {
            output.innerHTML = output.innerHTML += "/";
        }
    });
 
    // Event Listeners for 3rd Row
    // Event Listener for 7 button
    seven.addEventListener("click", () => {
        isUnderTwentyTwo(7);
    });
    // Event Listener for 8 button
    eight.addEventListener("click", () => {
        isUnderTwentyTwo(8);
    });
    // Event listener for 9 button
    nine.addEventListener("click", () => {
        isUnderTwentyTwo(9);
    });
    // Event listener for multiply button
    multiply.addEventListener("click", () => {
        if (output.innerHTML.length > 0) {
            output.innerHTML += "*";
        }
    })

    // Event listeners for 4th row
    // Event listener for 4 button
    four.addEventListener("click", () => {
        isUnderTwentyTwo(4);
    });
    // Event listener for 5 button
    five.addEventListener("click", () => {
        isUnderTwentyTwo(5);
    });
    // Event listener for 6 button
    six.addEventListener("click", () => {
        isUnderTwentyTwo(6);
    });
    // Event listener for subtract button
    subtract.addEventListener("click", () => {
        if (output.innerHTML.length > 0) {
            output.innerHTML += "-";
        }
    })
    // Event listeners for 5th row
    // Event listener for 1 button
    one.addEventListener("click", () => {
        isUnderTwentyTwo(1);
    });
    // Event listener for 2 button
    two.addEventListener("click", () => {
        isUnderTwentyTwo(2);
    });
    // Event listener for 3 button
    three.addEventListener("click", () => {
        isUnderTwentyTwo(3);
    });
    // Event listener for addition button
    add.addEventListener("click", () => {
        const lastEntry = parseInt(output.innerHTML.substring(output.innerHTML.length - 1));
        console.log(lastEntry);
        if (output.innerHTML > 0 && !isNaN(lastEntry)){
            output.innerHTML += "+";
        }
    })
    
    zero.addEventListener("click", () => {
        isUnderTwentyTwo(0);
    });

   

    function isUnderTwentyTwo(number) {
        if (output.innerHTML.length <= 21) {
            output.innerHTML += number;
        }
    }

    function hasSymbol(string) {
        const isTrue = false;
        switch (output.innerHTML.includes()){
            case "/":
                isTrue = true;
                break;
            case "+":
                isTrue = true;
                break;
            case "-":
                isTrue = true;
                break;
            case "*":
                isTrue = true;
                break;
        }

        return isTrue;
    }

}
    