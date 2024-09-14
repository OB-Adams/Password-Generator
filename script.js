const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", () => {
  const password = document.querySelector("#password");

  const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const digitCharacters = "1234567890";
  const specialCharacters = "!@#$%^&*()-_+={}[]|\;:/?.>,<'";

  let charset = "";
  let generatedPassword = "";

  const isUppercase = document.getElementById("uppercase").checked;
  const isLowercase = document.getElementById("lowercase").checked;
  const isDigits = document.getElementById("digits").checked;
  const isSpecial = document.getElementById("special").checked;
  const passwordLength = document.getElementById("slider").value;

  if (isUppercase) charset += uppercaseCharacters;
  if (isLowercase) charset += lowercaseCharacters;
  if (isDigits) charset += digitCharacters;
  if (isSpecial) charset += specialCharacters;

  if (charset.length < 1) {
    return;
  } else {
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset.charAt(randomIndex);
    }

    password.textContent = generatedPassword;
  }
});
