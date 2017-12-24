var field = document.getElementById('result_field');
var checkInput = /[0-9|/|*|-|-|+|.|.]/
var checkPeriodInput = /[/|*|-|-|+]/
var finished = false; // wipes previous equation but leaves it visible
var checkPeriod = false;

numbers = document.getElementsByClassName('display'); // creates array of display classes
for (i = 0; i < numbers.length; i++) {
    numbers[i].setAttribute('onclick', 'post(this)');
};

document.addEventListener('keydown', function(e){ //accepts input from keyboard
  if (e.key == 'Enter') {
    submit();
  } else if (checkInput.test(e.key)) // makes sure input is acceptable
    if (finished == true) {
      erase();
      finished = false;
      if (finished == false) {
        field.value += e.key;
      }
    } else if (e.key == '.' || e.key == '.') { //prevents multiple uses of '.'
      if (checkPeriod == false) {
        checkPeriod = true;
        field.value += e.key;
      }
    } else if (checkPeriodInput.test(e.key)==true) { // resets checkPeriod if operator is pressed
      checkPeriod = false;
      field.value += e.key;
    } else {
      field.value += e.key;
    }
});


function erase() {
    field.value = '';
    finished = false;
};

function post(me) { // accepts inputs from clicks
    if (finished == true) {
        erase();
    }

    if (finished == false) { //prevents carryover of old data
        if (me.innerHTML == '.') { // prevents multiple uses of '.'
            if (checkPeriod == false) {
                checkPeriod = true;
                field.value += me.innerHTML;
            }
        } else if (checkPeriodInput.test(me.innerHTML) == true) {
            checkPeriod = false;
            field.value += me.innerHTML;
        } else {
            field.value += me.innerHTML;
        }
    }
}

function submit() { // does math
    finished = true;
    checkPeriod = false;
    var input = field.value;
    result_field.value = eval(input);
};