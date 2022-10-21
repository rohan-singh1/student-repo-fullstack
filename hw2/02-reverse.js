/** Exercise 02 - Reverse **/


function reverse() {
  let num = document.getElementById('input').value;
  let original_num = num;
  if (num < 10000000 || num > 99999999) {
    document.getElementById("result_label").innerHTML = "Error: Please input an 8 digit number!";
    document.getElementById("result_label").style.color = "#aa3333";
  }
  else {
    let result = 0;
    for (let i = num; Math.floor(i) > 0; i /= 10) {
      i = Math.floor(i);
      l_digit = i % 10;
      l_digit = Math.floor(l_digit);
      result = result * 10 + l_digit;
    }
    document.getElementById("result_label").innerHTML = original_num + " --> " + result;
    document.getElementById("result_label").style.color = "#338833";

  }
}
