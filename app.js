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
  return newString;
}

function encriptar(typeAction) {
  let userText = document.getElementById("userText").value;
  if (typeAction === "encriptar") {
    document.getElementById("userText").value = encryptText(userText);
  }
  if (typeAction === "desencriptar") {
    document.getElementById("userText").value = decryptText(userText);
  }
}
