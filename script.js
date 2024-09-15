const generateBtn = document.getElementById("generate");
const password = document.querySelector("#password");
const message = document.querySelector("#message");

generateBtn.addEventListener("click", () => {
  const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const digitCharacters = "1234567890";
  const specialCharacters = "!@#$%^&*()-_+={}[]|;:/?.>,<'";

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

password.addEventListener("click", () => {
  navigator.clipboard
    .writeText(password.textContent)
    .then(() => {
      message.textContent = "Copied!";
      message.style.color = 'green'

      setTimeout(() => {
        message.textContent = "";
      }, 1500);
    })
    .catch((err) => (message.textContent = "Failed to copy!"));
});

// copyBtn.addEventListener("click", () => {
//   if (password.textContent.length > 0) {
//     navigator.clipboard
//       .writeText(password.textContent)
//       .then(() => {
//         message.textContent = "Copied to clipboard!";
//         message.style.color = "green";

//         setTimeout(() => {
//           message.textContent = "";
//         }, 1500);
//       })
//       .catch((err) => {
//         message.textContent = -"Failed to copy password!";
//         message.style.color = "red";

//         setTimeout(() => {
//           message.textContent = "";
//         }, 1500);
//         console.log(err.message);
//       });
//   } else {
//     message.textContent = "No message to copy!";
//     message.style.color = "red";

//     setTimeout(() => {
//       message.textContent = "";
//     }, 1500);
//   }
// });
