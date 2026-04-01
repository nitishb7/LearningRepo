function add(a,b) {
    return a+b;
  }

  function substract(a,b){
    return a-b;
  }

  function div(a,b){
    return a/2;
  }

  function calculator(a,b,calculate){
    return calculate(a,b);
  }

  let result1 = calculator(10, 2,add)
  let result2 = calculator(10, 2,substract)
  let result3 = calculator(10, 2,div)
  
  console.log(result1, result2, result3);