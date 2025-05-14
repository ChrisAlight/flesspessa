
class App {
    countries;

    hasAnswered = false;
    correctAnswer;
    correctAnswerCount = 0;

    constructor(countries) {
        this.countries = countries;
        this.setRandomFlag();
    }

    getRandomCountry() {
        const randomIndex = Math.floor(Math.random() * countries.length);
        return countries.splice(randomIndex, 1)[0];
    }

    setRandomFlag() {
        const randomCountry = this.getRandomCountry();
        const flagImage = document.querySelector('img');
        flagImage.src = `assets/flags/${randomCountry.code}.webp`;
        this.correctAnswer = randomCountry;
    }

    answer(selection) {
        if (this.hasAnswered) {
            return;
        }
        this.hasAnswered = true;

        const result = document.getElementById('result');
        const resultMessage = document.getElementById('resultMessage');
        const resultLink = document.getElementById('resultLink');
        const wasCorrect = selection === this.correctAnswer.name;

        result.style = 'display: inherit';

        if (wasCorrect) {
            this.correctAnswerCount++;
            resultMessage.innerHTML = `Correct! The flag is for ${this.correctAnswer.name}.`;
            resultLink.innerHTML = this.correctAnswerCount < 3 ? 'Next Question' : 'try normal';
            resultLink.onclick = () => {
                if (this.correctAnswerCount < 3) {
                    this.setRandomFlag();
                    result.style.display = 'none';
                } else {
                    window.location.href = 'normal.html';
                }
                this.hasAnswered = false;
            };
        } else {
            resultMessage.innerHTML = 'Incorrect!';
            resultLink.innerHTML = 'Try Again';
            resultLink.onclick = () => {
                result.style.display = 'none';
                this.hasAnswered = false;
            };
        }

    }
}
