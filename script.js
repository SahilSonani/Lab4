function calculateSquare() {
    let num = document.getElementById("numberInput").value;
    let square = num * num;
    document.getElementById("result").textContent = `Square of ${num} is ${square}`;
}
