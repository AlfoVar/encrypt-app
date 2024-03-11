// Función para encriptar el texto
function encryptText(userText) {
  userText = decodeURIComponent(encodeURIComponent(userText));
  var newString = "",
    char,
    nextChar,
    combinedCharCode;
  for (var i = 0; i < userText.length; i += 2) {
    char = userText.charCodeAt(i);

    if (i + 1 < userText.length) {
      nextChar = userText.charCodeAt(i + 1) - 31;

      combinedCharCode =
        char +
        "" +
        nextChar.toLocaleString("es", {
          minimumIntegerDigits: 2,
        });

      newString += String.fromCharCode(parseInt(combinedCharCode, 10));
    } else {
      newString += userText.charAt(i);
    }
  }
  return newString
    .split("")
    .reduce(
      (hex, c) => (hex += c.charCodeAt(0).toString(16).padStart(4, "0")),
      ""
    );
}

// Función para desencriptar el texto
function decryptText(userText) {
    console.log(userText)
  var newString = "",
    char,
    codeStr,
    firstCharCode,
    lastCharCode;
  userText = userText
    .match(/.{1,4}/g)
    .reduce((acc, char) => acc + String.fromCharCode(parseInt(char, 16)), "");
  for (var i = 0; i < userText.length; i++) {
    char = userText.charCodeAt(i);
    if (char > 132) {
      codeStr = char.toString(10);

      firstCharCode = parseInt(codeStr.substring(0, codeStr.length - 2), 10);

      lastCharCode =
        parseInt(codeStr.substring(codeStr.length - 2, codeStr.length), 10) +
        31;

      newString +=
        String.fromCharCode(firstCharCode) + String.fromCharCode(lastCharCode);
    } else {
      newString += userText.charAt(i);
    }
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

