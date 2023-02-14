const extractFirstName = (str) => {
  const decodedString = JSON.parse(Buffer.from(encodedString, 'Base64'));
  const name = `${decodedString.firstName} ${decodedString.lastName}`;
  console.log(name);
};

const encodedString = `eyJmaXJzdE5hbWUiOiJBZGEiLCJsYXN0TmFtZSI6IkxvdmVsYWNlIiwiYWxwaGFiZXQiOiJKS0xNQUJDT1BRUlNUVVZXWFlaMDEzR0hJTjQ3ODkiLCJtZDVIYXNoIjoiMGI2YWY4OWRmYjU3ZjJiNDg3NDNiMTJhNjdlZWRjZGIifQ==`;

extractFirstName(encodedString);

const crypto = require("crypto");
const alphabet = "JKLMABCOPQRSTUVWXYZ013GHIN4789";
const targetHash = "0b6af89dfb57f2b48743b12a67eedcdb";
const results = [];
const chars = alphabet.split("");


function backtrack(temp, chars) {
  if (temp.length === 3) {
    results.push(temp.slice());
  } else {
    for (let i = 0; i < chars.length; i++) {
      temp.push(chars[i]);
      backtrack(temp, chars.slice(0, i).concat(chars.slice(i + 1)));
      temp.pop();
    }
  }
  return results
  }
  backtrack([], chars);

  function calculateMD5(str) {
    return crypto.createHash("md5").update(str).digest("hex");
  }

  for (const permutation of results) {
    const hash = calculateMD5(permutation.join(""));
    if (hash === targetHash) {
   console.log(` ${permutation.join("")}`);
    }
  }