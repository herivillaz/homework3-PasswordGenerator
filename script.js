// Assignment Code
// generated a DOC obj that its element id starts with #generate
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
// Event Listener; wait and listen for the event 'click'
// once user clicked, it will respond by calling funciton 'writePassword'
generateBtn.addEventListener("click", writePassword);

// ============== KEY FUNCTION =========================


// Generate password possible string
function passwordCombo (upper, lower, digit, special) {
  var PassCombo = '';
  
  // 4 x sets of password 
  var pass_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
  var pass_lower = 'abcdefghijklmnopqrstuvwxyz'; 
  var pass_digit = '0123456789'; 
  var pass_special = '@#$%*!(),.;'; 
  var userchoice = false;


  console.log ("User Choice include: " + upper + lower + digit + special)
  if (upper == true) {
    PassCombo += pass_upper;
    userchoice = true;
    console.log("Ok Upper case should be added. PassCombo is: " + PassCombo);
  }
  
  if (lower == true) {
    PassCombo += pass_lower;
    userchoice = true;
    console.log("Ok Lower case should be added. PassCombo is: " + PassCombo);
  }
  
  if (digit == true) {
    PassCombo += pass_digit;
    userchoice = true;
    console.log("Ok Numeric should be added. PassCombo is: " + PassCombo);
  }
    
  if (special == true) {
    PassCombo += pass_special;
    userchoice = true;
    console.log("Ok Special Character should be added. PassCombo is: " + PassCombo);
  }
  

  return PassCombo;
}

function validatelen () {
 len = 0;

  while (len < 8 || len > 128) {
    var len = prompt ("How long would you like your password length to be ? ");
    if (len < 8 || len > 128) {
      alert("Sorry password length must be between 8 to 128.");
    }
  }
  return len;
} 

function validateupper () {
  var upper = confirm ("Would you want your generated password to include upper case ? ")
  return upper;
}

function validatelower () {
  var lower = confirm ("Would you want your generated password to include Lower case ? ")
  return lower;
}

function validatedigit () {
  var digit = confirm ("Would you want your generated password to include Numeric ? ")
  return digit;
}

function validatespecial () {
  var special = confirm ("Would you want your generated password to include Special ? ")
  return special;
}


// Generate a random password base on user input criteria
function generatePassword () {

  var upper = false;
  var lower = false;
  var digit = false;
  var special = false;

  var len = validatelen();

  while (upper == false && lower == false && digit == false && special == false) {
    var upper = validateupper();
    var lower = validatelower();
    var digit = validatedigit();
    var special = validatespecial();

    if (upper == false && lower == false && digit == false && special == false) {
      alert ("At least once type of password character type needs to be choosen OK")
    }

  }


  alert("Entered Generate Password");
  // Initialize password to null
  var pass = ''; 

  // the final pass possible combo depends on user criteria
  var PassCombo = passwordCombo(upper, lower, digit, special);
  console.log("PassCombo is: " + PassCombo);

  //math.random to generate a # within this range
  for (i=0; i < len; i++) {
    passpos = Math.floor(Math.random() * PassCombo.length + 1);
    pass += PassCombo.charAt(passpos);
  }
  return pass;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();  // gen new passd

  // Initiate an object passwordText from id=password
  var passwordText = document.querySelector("#password");

  // Update/set the content of id "password" element, 
  // to the generated password. 
  passwordText.value = password;

}
