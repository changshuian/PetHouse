const input_reduce = document.querySelectorAll('.input_reduce');
const input_value = document.querySelectorAll('.input_value');
const input_add = document.querySelectorAll('.input_add');

input_add[0].onclick = function() {
    input_value[0].value++;
    input_value[1].value++;
}
input_add[1].onclick = function() {
    input_value[0].value++;
    input_value[1].value++;
}

input_reduce[0].onclick = function() {
    if (input_value[0].value > 1) {
        input_value[0].value--;
    }
    if (input_value[1].value > 1) {
        input_value[1].value--;
    }
}
input_reduce[1].onclick = function() {
    if (input_value[0].value > 1) {
        input_value[0].value--;
    }
    if (input_value[1].value > 1) {
        input_value[1].value--;
    }
}