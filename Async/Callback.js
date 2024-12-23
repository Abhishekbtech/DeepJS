
// JavaScript Callbacks

// A callback is a function passed as an argument to another function.
// A callback is a function passed as an argument to another function This technique allows a function to call another function A callback function can run after another function has finished

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);







function getdata(dataid, getNextdata) {
    setTimeout(() => {
        console.log("i am from  data id " + dataid);
        if (getNextdata) {
            getNextdata();
        }
    }, 2000)
}


getdata(1, () => {
    console.log("getting data2......")
    getdata(2, () => {
        console.log("getting data3......")
        getdata(3, () => {
            console.log("getting data4......")
            getdata(4)
        })
    })
})