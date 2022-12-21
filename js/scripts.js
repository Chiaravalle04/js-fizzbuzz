let container = document.createElement('div');

container.classList.add('container');

document.body.appendChild(container);

for (let i = 1; i <= 100; i++) {

    let square = document.createElement('div');

    square.classList.add('square');

    container.appendChild(square);

    if (i % 3 === 0 && i % 5 === 0) {

      console.log('FizzBuzz');

      square.append('FizzBuzz');

      square.classList.add('yellow');

    } else if (i % 3 === 0) {

      console.log('Fizz');

      square.append('Fizz');

      square.classList.add('brown');

    } else if (i % 5 === 0) {

      console.log('Buzz');

      square.append('Buzz');

      square.classList.add('sandy');

    } else {

      console.log(i);

      square.append(i);

      square.classList.add('turq');

    }

} 