const extractFirstName = (str) => {
  const decodedString = JSON.parse(atob(encodedString));
  const name = `${decodedString.firstName} ${decodedString.lastName}`;
  console.log(name);
};

const encodedString = `eyJmaXJzdE5hbWUiOiJBZGEiLCJsYXN0TmFtZSI6IkxvdmVsYWNlIiwiYWxwaGFiZXQiOiJKS0xNQUJDT1BRUlNUVVZXWFlaMDEzR0hJTjQ3ODkiLCJtZDVIYXNoIjoiMGI2YWY4OWRmYjU3ZjJiNDg3NDNiMTJhNjdlZWRjZGIifQ==`;

extractFirstName(encodedString);

const crypto = require("crypto");
const alphabet = "JKLMABCOPQRSTUVWXYZ013GHIN4789";
const targetHash = "0b6af89dfb57f2b48743b12a67eedcdb";

function permutations(alphabet, n) {
  const results = [];
  const chars = alphabet.split("");

  function backtrack(temp, chars) {
    if (temp.length === n) {
      results.push(temp.slice());
    } else {
      for (let i = 0; i < chars.length; i++) {
        temp.push(chars[i]);
        backtrack(temp, chars.slice(0, i).concat(chars.slice(i + 1)));
        temp.pop();
      }
    }
  }

  backtrack([], chars);
  return results;
}

function calculateMD5(str) {
  return crypto.createHash("md5").update(str).digest("hex");
}

for (let i = 3; i <= alphabet.length; i++) {
  const permutationsList = permutations(alphabet, i);
  permutationsList.forEach((permutation) => {
    const hash = calculateMD5(permutation.join(""));
    if (hash === targetHash) {
      console.log(` ${permutation.join("")}`);
    }
  });
}
