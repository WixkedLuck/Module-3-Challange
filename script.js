// Assignment Code
var generateBtn = document.querySelector("#generate");
var Password;
var pickone=false; 

var UpperArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var LowerArray=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var NumberArray=["0","1","2","3","4","5","6","7","8","9"]
var SpecialArray=["!","<",">","@","#","$","*","^","+","="]
var emptyArray=[]
// Write password to the #password input
//Function for length of Password
function choseLength(){
  var Passlength
  //to break out of this loop this needs to be a number 
 while (isNaN(Passlength)){
  Passlength=window.prompt("Welcome! Please enter a number between 8 and 128 to start generating a password")
  
  if(isNaN(Passlength)){
    alert("Please enter a NUMBER :')")
  }
  if(Passlength<8){
    Passlength="g"
    alert("Sorry Number is to Small")
  }
  if(Passlength>=128){
    Passlength="g"
    alert("Sorry Number is to Large")
  }
 }

  return Passlength;
}


//create function
function writePassword() {

// Asks user for password length 
var length= choseLength()


//Ask user questions
while(pickone==false){
var Upper=window.confirm("Would you like Uppercase letters?")
if(Upper){
 alert("Great! Upper case letter will be used")
 emptyArray=emptyArray.concat(UpperArray)
 pickone=true;

}
var Lower=window.confirm("Would you like Lowercase letters?")
if(Lower){
  alert("Great! Lower case letter will be used")
  emptyArray=emptyArray.concat(LowerArray)
  pickone=true;
}

var Special=window.confirm("Would you like special characters?")
if(Special){
  alert("Great! Speical characters will be used")
  emptyArray=emptyArray.concat(SpecialArray)
  pickone=true;
}
var number=window.confirm("Would you like numbers?")
if(number){
  alert("Great! numbers will be used")
  emptyArray=emptyArray.concat(NumberArray)
  pickone=true;
}
if(pickone==false){
  alert("Please select at least one option")
}

}


//set variables 
var Password=""
var tempRandom
var ArrayUp
//create for loop
for(i=0; i<length; i++){
   tempRandom=Math.floor(Math.random() *emptyArray.length);
   ArrayUp=emptyArray[tempRandom];
Password=Password+ArrayUp

}




  
  var password = Password;
  console.log(password)
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  

}



//button event listener 
generateBtn.addEventListener("click", writePassword());
