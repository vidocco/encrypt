function gibber (n) {
  let arr = [];
  let arr2 = []; 
  for (let i = 0; i <= (n + (Math.floor(Math.random() * n))); i++) {
    if (i === 0) {
      arr.push(String.fromCharCode((Math.random()*687)+2));
    } else if (!(arr.length >= n)) {
      for (let j = 0; j < arr.length; j++) {
        if (!((arr2.length + arr.length) >= n) && (Number(arr[j].charCodeAt(0)) < 690)) {
          arr2.push(String.fromCharCode((Math.random()*1359)+690));
        } else if (!((arr2.length + arr.length) >= n)) {
          arr2.push(String.fromCharCode((Math.random()*687)+2));
        } else {
          break;
        }
      }
      arr.push(...arr2);
      arr2 = [];
    } else {
      arr.push(String.fromCharCode((Math.random()*687)+2));
    }
  }
  return arr.join('')
}

function decodeGibber (morse) {
  return String.fromCharCode(Number(morse.split('').reduce(function (acc, el) {
    if (el.charCodeAt(0) <= 689 || el.charCodeAt(0) > 2049) {
      return acc;
    }
    return acc + 1;
  }, 0)))
}

function gibberString (string) {
  arr = string.split('');
  res = [];
  return arr.map(el => gibber(el.charCodeAt(0) * 2)).join('ࠅ');
}

function decodeString (string) {
  arr = string.split('ࠅ');
  return arr.map(el => decodeGibber(el)).join('');
}