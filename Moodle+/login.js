console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("form#login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;
const arr = login_text.split(/\r?\n/);

let question = arr[3]; // Use split and array operations on the login_text string to extract the question
const newarr= question.split(" ");
 // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked
let b=newarr[1];
let val1=newarr[2];
let val2=newarr[4];
let val3=newarr[6];
if(b=="add"){
    answer=val1+val2;
}
else if(b=="subtract"){
    answer=val1-val2;
}
else{
    if(val1=="first"){
        answer=val2;
    }
    else{
        answer=val3;
    }
    
}
const captcha_input_element = document.querySelector("input#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
let lgbtn=document.getElementById("loginbtn");
let usrnm=document.querySelector("input#username");
let psword=document.querySelector("input#password");
usrnm.value="";
password.value="";
lgbtn.click(); // if username and password are incorrect, then program will run infinitely.

