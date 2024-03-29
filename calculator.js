
var dota = 0;

var a = 0;


var recentsymbo = null;

let input = document.getElementById("intput");

let one = document.getElementById("1");

one.addEventListener("click", function () {
    input.value += 1;
});

let two = document.getElementById("2");

two.addEventListener("click", function () {
    input.value += 2;
});

let three = document.getElementById("3");

three.addEventListener("click", function () {
    input.value += 3;
});

let four = document.getElementById("4");

four.addEventListener("click", function () {
    input.value += 4;
});

let five = document.getElementById("5");

five.addEventListener("click", function () {
    input.value += 5;
});

let six = document.getElementById("6");

six.addEventListener("click", function () {
    input.value += 6;
});

let seven = document.getElementById("7");

seven.addEventListener("click", function () {
    input.value += 7;
});

let eight = document.getElementById("8");

eight.addEventListener("click", function () {
    input.value += 8;
});

let nine = document.getElementById("9");

nine.addEventListener("click", function () {
    input.value += 9;
});

let zero = document.getElementById("0");

zero.addEventListener("click", function () {
    input.value += 0;
});

let dot = document.getElementById(".");

dot.addEventListener("click", function () {
    if (dota == 0) {
        input.value += ".";
        dota = 1;
    }
});


let plus = document.getElementById("+");

plus.addEventListener("click", function () {
    dota=0;
    if (input.value != "") {
        if (recentsymbo === "plus") a += parseInt(input.value);
        else if (recentsymbo === "minus") a -= parseInt(input.value);
        else if (recentsymbo === "prod") a *= parseInt(input.value);
        else if (recentsymbo === "div") a /= parseInt(input.value);
        else if (recentsymbo === "modulo") a %= parseInt(input.value);
        else a=parseInt(input.value);
    }

    console.log(a);
    input.value = "";
    recentsymbo = "plus";
});


let modulo = document.getElementById("%");
modulo.addEventListener("click", function () {
    dota=0;
    if (input.value != "") {
        if (recentsymbo === "plus") a += parseInt(input.value);
        else if (recentsymbo === "minus") a -= parseInt(input.value);
        else if (recentsymbo === "prod") a *= parseInt(input.value);
        else if (recentsymbo === "div") a /= parseInt(input.value);
        else if (recentsymbo === "modulo") a %= parseInt(input.value);
        else a=parseInt(input.value);
    }

    console.log(a);
    input.value = "";
    recentsymbo = "modulo";
});

let minus = document.getElementById("-");

minus.addEventListener("click", function () {
    dota=0;

    if (input.value != "") {
        if (recentsymbo === "plus") a += parseInt(input.value);
        else if (recentsymbo === "minus") a -= parseInt(input.value);
        else if (recentsymbo === "prod") a *= parseInt(input.value);
        else if (recentsymbo === "div") a /= parseInt(input.value);
        else if (recentsymbo === "modulo") a %= parseInt(input.value);
        else a=parseInt(input.value);
    }

    console.log(a);
    input.value = "";
    recentsymbo="minus";
});

let prod = document.getElementById("X");

prod.addEventListener("click", function () {
    dota=0;
    if (input.value != "") {
        if (recentsymbo === "plus") a += parseInt(input.value);
        else if (recentsymbo === "minus") a -= parseInt(input.value);
        else if (recentsymbo === "prod") a *= parseInt(input.value);
        else if (recentsymbo === "div") a /= parseInt(input.value);
        else if (recentsymbo === "modulo") a %= parseInt(input.value);
        else a=parseInt(input.value);
    }

    console.log(a);
    input.value = "";
    recentsymbo="prod";
});

let divide = document.getElementById("/");

divide.addEventListener("click", function () {
    dota=0;

    if (input.value != "") {
        if (recentsymbo === "plus") a += parseInt(input.value);
        else if (recentsymbo === "minus") a -= parseInt(input.value);
        else if (recentsymbo === "prod") a *= parseInt(input.value);
        else if (recentsymbo === "div") a /= parseInt(input.value);
        else if (recentsymbo === "modulo") a %= parseInt(input.value);
        else a=parseInt(input.value);
    }

    console.log(a);
    input.value = "";
    recentsymbo="div";
});

let equal = document.getElementById("=");

equal.addEventListener("click", function () {
    dota=0;

    if (input.value != "") {
        if (recentsymbo === "plus") a += parseInt(input.value);
        else if (recentsymbo === "minus") a -= parseInt(input.value);
        else if (recentsymbo === "prod") a *= parseInt(input.value);
        else if (recentsymbo === "div") a /= parseInt(input.value);
        else if (recentsymbo === "modulo") a %= parseInt(input.value);
        else a=parseInt(input.value);
    }

    console.log(a);
    input.value = a;
    recentsymbo=null;

});

let clear = document.getElementById("C");

clear.addEventListener("click", function () {
    dota=0;
    recentsymbo=null;
    a=0;
    console.log(a);
    input.value = "";
});

