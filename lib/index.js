function cpfValidator (cpfNumber) {

  cpfNumber = cpfNumber.replace(/[^0-9]/g, '');
  if (cpfNumber.length !== 11) {

    return false;

  }

  const repeatedNumbers = ['00000000000', '11111111111', '22222222222', '33333333333', '44444444444', '55555555555', '66666666666',
    '77777777777', '88888888888', '99999999999'];
  if (repeatedNumbers.indexOf(cpfNumber) !== -1) {

    return false;

  }

  if (digitOne(cpfNumber) && digitTwo(cpfNumber)) {

    return true;
  
  } else {

    return false;
  
  }

}

function digitOne (cpfNumber) {

  cpfNumber = cpfNumber.split('');
  const firstMultiplication = cpfNumber.slice(0, 9).map((value, index) => {

    return parseInt(value * (10 - index));

  });
  const verifyingDigitOne = (firstMultiplication.reduce((acc, val) => acc + val) % 11) < 2 ? 0 : 11
    - (firstMultiplication.reduce((acc, val) => acc + val) % 11);

  if (parseInt(cpfNumber[9]) !== verifyingDigitOne) {

    return false;

  }
  return true;

}


function digitTwo (cpfNumber) {

  cpfNumber = cpfNumber.split('');

  const secondMultiplication = cpfNumber.slice(0, 10).map((value, index) => {

    return parseInt(value * (11 - index));

  });

  const verifyingDigitTwo = (secondMultiplication.reduce((acc, val) => acc + val) % 11) < 2 ? 0 : 11
    - (secondMultiplication.reduce((acc, val) => acc + val) % 11);

  if (parseInt(cpfNumber[10]) !== verifyingDigitTwo) {

    return false;

  }
  return true;

}

module.exports.cpfValidator = cpfValidator;