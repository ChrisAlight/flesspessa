
class App {
    storage;
    shopData;
    countries;
    nextDifficulty;
    reward;

    hasAnswered = false;
    correctAnswer;
    correctAnswerCount = 0;

    constructor(storage, shopData, countries, nextDifficulty, reward) {
        this.storage = storage;
        this.shopData = shopData;
        this.countries = countries;
        this.reward = reward;
        if (storage.hasPurchase(nextDifficulty)) {
            this.nextDifficulty = nextDifficulty;
        }
        
        this.generateAnswerButtons();
        this.setRandomFlag();
    }

    static setUpPage(storage, shopData) {
        const backgroundName = storage.getBackground();
        const backgroundColor = shopData.backgrounds.find(bg => bg.name === backgroundName)?.color || '#ffffff';
        document.body.style.setProperty('background-color', backgroundColor);
    }

    generateAnswerButtons() {
        const answerButtonContainer = document.getElementById('answerButtons');
        answerButtonContainer.innerHTML = '';

        for (const country of this.countries) {
            const answerButton = document.createElement('button');
            answerButton.innerHTML = country.name;
            answerButton.onclick = () => this.answer(country.name);
            answerButtonContainer.appendChild(answerButton);
        }
    }

    getRandomCountry() {
        const randomIndex = Math.floor(Math.random() * countries.length);
        return countries.splice(randomIndex, 1)[0];
    }

    setRandomFlag() {
        const randomCountry = this.getRandomCountry();
        const flagImage = document.getElementById('flagImage');
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
            this.storage.addCoins(this.reward);
            resultMessage.innerHTML = `Correct! The flag is for ${this.correctAnswer.name}.`;
            resultLink.innerHTML = this.correctAnswerCount < 3 ? 'Next Question' : this.nextDifficulty ? `try ${this.nextDifficulty}` : 'back to menu';
            resultLink.onclick = () => {
                if (this.correctAnswerCount < 3) {
                    this.setRandomFlag();
                    result.style.display = 'none';
                } else {
                    window.location.href = `${this.nextDifficulty ?? 'index'}.html`;
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
