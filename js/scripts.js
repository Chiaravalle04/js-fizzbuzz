for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

      console.log('FizzBuzz');

      document.writeln('FizzBuzz');

    } else if (i % 3 === 0) {

      console.log('Fizz');

      document.writeln('Fizz');

    } else if (i % 5 === 0) {

      console.log('Buzz');

    } else {

      console.log(i);

      document.writeln(i);

    }
  }
  