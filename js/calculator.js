let operation = "";
let prevVal = 0;

function pressNumber(numb) {
  let hz = $("#display").val();
  if (hz == "0") {
    hz = "";
  }
  $("#display").val(hz + numb);
}
function pressOperation(oper) {
  //   console.log(Number($("#display").val()));
  if (!Number($("#display").val())) {
    alert("введите число");
    return;
  }
  console.log(oper);
  if (oper == "±") {
    let result = Number($("#display").val()) * -1;
    $("#display").val(result);
    return;
  } else if (oper == "СЕ") {
    $("#display").val("");
    return;
  } else if (oper == "←") {
    let hz = $("#display").val();
    $("#display").val(hz.slice(0, -1));
    return;
  }
  if (operation == "") {
    prevVal = Number($("#display").val());
  } else if (operation == "-") {
    prevVal = prevVal - Number($("#display").val());
  } else if (operation == "/") {
    prevVal = prevVal / Number($("#display").val());
  } else if (operation == "+") {
    prevVal = prevVal + Number($("#display").val());
  } else if (operation == "*") {
    prevVal = prevVal * Number($("#display").val());
  } else if (operation == "C") {
    prevVal = Number($("#display").val(""));
    operation = "";
    prevVal = 0;
    return;
  }

  $("#display").val("");
  console.log("ce");
  operation = oper;
}
function calc() {
  if (!Number($("#display").val())) {
    alert("введите число");
    return;
  }
  if (operation == "-") {
    let result = prevVal - Number($("#display").val());
    $("#display").val(result);
  } else if (operation == "/") {
    let result = prevVal / Number($("#display").val());
    $("#display").val(result);
  } else if (operation == "+") {
    let result = prevVal + Number($("#display").val());
    $("#display").val(result);
  } else if (operation == "*") {
    let result = prevVal * Number($("#display").val());
    $("#display").val(result);
    operation = "";
    prevVal = 0;
  }
}
