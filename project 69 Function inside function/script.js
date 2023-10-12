function outerFunction() {
  console.log("Outer function is called.");

  function innerFunction() {
    console.log("Inner function is called.");
  }

  innerFunction(); // Call the inner function
}

outerFunction(); // Call the outer function
