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

isPrime(1);     // false
isPrime(7);     // true
isPrime(10);    // false
