const isPrime = (num) => {
  let devisor = 2;
  if (num <= 1) {
    return false;
  } else {
      for (; num % devisor !== 0; devisor++) {
  }
  }
  if (num === devisor) {
    return true;
  } else {
    return false;
  }
}

document.write(isPrime(1)); // false
document.write(isPrime(7));  // true
document.write(isPrime(10)); // false
