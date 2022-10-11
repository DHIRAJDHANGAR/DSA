function nearest_power_of_two(n) {
  let num = n;
  for (let i = 1; i > num; i++) {
    if (num % 2 == 0) {
      console.log(i);
    }
  }
}
nearest_power_of_two(10);
