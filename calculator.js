var box = document.getElementById('display');

function addtoScreen(x){
  box.value+=x;
  if(x==='c'){
    box.value='';
  }
}

function answer(){
  x=box.value
  x=eval(x);  // x=eval(x); just means do the math, eval(string) will you pemdas order of operations.//
  box.value=x;
}

function power(){
  x=box.value;
  x=eval(x*x);
  box.value=x;  //you can do this for square root, 3rd, 4th power, etc. just find the proper java script function//
}

function backspace(){
  var num =box.value;
  var len = num.length-1;
  var newNum = num.substring(0,len);
  box.value = newNum;
}