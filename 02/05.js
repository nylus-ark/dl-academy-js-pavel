function guessNum(num) {
    let rand = Math.floor(1 + Math.random() * 10);

    while (num != rand) {
        if (isNull(num) === true) {
            return;
        }
        alert(`Вы ввели число ${num < rand ? 'меньше' : 'больше'} загаданного`);
        num = prompt('Угадайте число от 1 до 10');
    }

    return alert(`Вы угадали, это число - ${rand}!`);
}

const userInput = getUserInput('Угадайте число от 1 до 10');

guessNum(userInput);
