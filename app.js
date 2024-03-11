let decryptButton = document.getElementById("decryptButton");
let encryptButton = document.getElementById("encryptButton");
let userTextInput = document.getElementById("userText"); 

// Función para encriptar el texto
function encryptText(userText) {
  userText = decodeURIComponent(encodeURIComponent(userText));
  var newString = "",
    char,
    nextChar;
  for (var i = 0; i < userText.length; i += 2) {
    char = userText.charCodeAt(i).toString(16);
    if (i + 1 < userText.length) {
      nextChar = userText.charCodeAt(i + 1).toString(16);
      newString += char + nextChar;
    } else {
      newString += char;
    }
  }
  encryptButton.disabled = true;
  decryptButton.disabled = false;
  return newString;
}

// Función para desencriptar el texto
function decryptText(userText) {
  var newString = "",
    charCode;
  for (var i = 0; i < userText.length; i += 2) {
    charCode = parseInt(userText.substring(i, i + 2), 16);
    newString += String.fromCharCode(charCode);
  }
  decryptButton.disabled = true;
  encryptButton.disabled = false;
  return newString;
}

function encriptar(typeAction) {
  let userText = document.getElementById("userText").value; // replace "decryptButton" with the actual id of your decrypt button

  if (userText === "") {
    decryptButton.disabled = true;
  } else {
    decryptButton.disabled = false;
  }

  if (typeAction === "encriptar") {
    document.getElementById("userText").value = encryptText(userText);
  }
  if (typeAction === "desencriptar") {
    document.getElementById("userText").value = decryptText(userText);
  }
}

function isEncrypted(textInput) {
  var hexRegex = /^[0-9a-fA-F]+$/;
  return hexRegex.test(textInput);
}

// replace "userText" with the actual id of your input field

userTextInput.addEventListener("input", function() {
  let inputText = document.getElementById("userText").value;

  
  if (isEncrypted(inputText)) {
    decryptButton.disabled = false;
    encryptButton.disabled = true;
  }else{
    decryptButton.disabled = true;
    encryptButton.disabled = false;
  }

  if (userTextInput.value === "") {
    decryptButton.disabled = true;
    encryptButton.disabled = true;
  } 
  
});


