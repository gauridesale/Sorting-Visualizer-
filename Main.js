var inp_as = document.getElementById('a_size'), array_size = inp_as.value;
var inp_gen = document.getElementById("refresh");
var inp_aspeed = document.getElementById("a_speed");
var butts_algos = document.getElementById("start");


var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
    cont.innerHTML = "";

    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 50;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " margin:0% " + margin_size + "%; background-color:green; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}

window.onload = update_array_size();
inp_gen.addEventListener("click", forStop);

function forStop() {
    update_array_size();
    inp_as.disabled = false;
    butts_algos.disabled = false;
    inp_aspeed.disabled = false;

}


