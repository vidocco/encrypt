function thueMorse (n) {
  var arr = [];
  var arr2 = []; 
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      arr.push(0);
    } else if (!(arr.length >= n)) {
      for (let j = 0; j < arr.length; j++) {
        if (!((arr2.length + arr.length) >= n)) {
          arr2.push(1 - arr[j]);
        } else {
          break;
        }
      }
      arr.push(...arr2);
      arr2 = [];
    } else {
      return arr;
    }
  }
}

function codeMorse (morse) {
  return Number(morse.reduce((acc, el) => el + acc))
}

function arrayOfCodes () {
  var res = []
  var args = Array.from(arguments);
  args.forEach(el => res.push(codeToLetter(codeMorse(thueMorse(el)))))
  return res.join('');
}

function letterToCode (string) {
  var res = [];
  for (var i = 0; i < string.length; i++) {
    res.push(string.charCodeAt(i));
  }
  return res;
}

function codeToLetter (morseRedux) {
  return String.fromCharCode(morseRedux);
}

function arrayToThueMorse (array) {
  var res = [];
  array.forEach(function (el) {
    decodeMon().forEach(function (sub, pos) {
      if (codeMorse(sub) === el) {
        res.push(sub);
      }
    });
  });
  return res;
}

function morseArrayToString (array) {
  var res = [];
  array.forEach(el => res.push(String.fromCharCode(codeMorse(el))));
  return res.join('');
}

function decodeMon () {
  var monday = [];
  var mondayUniq = [[0]];
  var mondayRes = [];
  for (var i = 194; i <= 243; i++) {
    monday.push(thueMorse(i));
  }
  monday.forEach(function (el, pos) {
      if (!(codeMorse(el) === (codeMorse(mondayUniq[mondayUniq.length - 1])))) {
        mondayUniq.push(el);
      }
  });
  mondayRes = mondayUniq.filter(function (el, pos) {
    if (codeMorse(el) === 0) {
      return false;
    } else {
      return true;
    }
  });
  mondayRes.push(thueMorse(63));
  return mondayRes;
}

function encrypt (string) {
  return arrayToThueMorse(letterToCode(string));
}

function decrypt (array) {
  return morseArrayToString(array);
}

decodeMon()
// console.log(encrypt('hello hi'));
// console.log(decrypt(encrypt('hello hi')));
// console.log(letterToCode('abcd'));
// console.log(arrayToThueMorse(letterToCode('abcd')));
// console.log(morseArrayToString(arrayToThueMorse(letterToCode('hello how are you'))));
// console.log(arrayOfCodes(194, 195, 197, 200))
// console.log(codeToLetter(codeMorse(thueMorse(194))));
// console.log(codeMorse(thueMorse(243)));