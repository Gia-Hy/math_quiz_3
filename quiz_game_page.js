function send() {
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);
    question_number = "<h4>" + number_1 + " X " + number_2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    question_number = "<h4>" + number_1 + " X " + number_2 + "</h4>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}