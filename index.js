document.getElementById("add").addEventListener("click", () => {
    document.getElementById("result").innerHTML = +document.getElementById("result").innerHTML + 1;
});
document.getElementById("subtract").addEventListener("click", () => {
    document.getElementById("result").innerHTML = +document.getElementById("result").innerHTML - 1;
});

document.getElementById("multiply").addEventListener("click", () => {
    document.getElementById("result").innerHTML = +document.getElementById("result").innerHTML * 2;
});

document.getElementById("divide").addEventListener("click", () => {
    document.getElementById("result").innerHTML = +document.getElementById("result").innerHTML / 2;
});

