const difficultyData = {
    easy: {
        name: 'Easy',
        countries: [
            { name: 'USA', code: 'us' },
            { name: 'Canada', code: 'ca' },
            { name: 'China', code: 'cn' },
            { name: 'Jamaica', code: 'jm' },
            { name: 'UK', code: 'gb' },
            { name: 'Ireland', code: 'ie' }
        ],
        reward: 3
    },
    normal: {
        name: 'Normal',
        countries: [
            { name: 'Serbia', code: 'rs' },
            { name: 'Sweden', code: 'se' },
            { name: 'Philippines', code: 'ph' },
            { name: 'Netherlands', code: 'nl' },
            { name: 'Bahamas', code: 'bs' },
            { name: 'Portugal', code: 'pt' }
        ],
        reward: 5
    },
    hard: {
        name: 'Hard',
        countries: [
            { name: 'Ghana', code: 'gh' },
            { name: 'Uganda', code: 'ug' },
            { name: 'Kenya', code: 'ke' },
            { name: 'Rwanda', code: 'rw' },
            { name: 'Brunei', code: 'bn' },
            { name: 'Mauritius', code: 'mu' }
        ],
        reward: 7
    },
    superHard: {
        name: 'Super Hard!!!!!',
        countries: [
            { name: 'Monaco', code: 'mc' },
            { name: 'Indonesia', code: 'id' },
            { name: 'Poland', code: 'pl' },
            { name: 'Chad', code: 'td' },
            { name: 'Romania', code: 'ro' },
            { name: 'Dominica', code: 'dm' }
        ],
        reward: 10
    }
};

class App {
    storage;
    shopData;
    difficulty;
    nextDifficulty;
    countries;
    reward;

    hasAnswered = false;
    correctAnswer;
    correctAnswerCount = 0;

    constructor(storage, shopData) {
        this.storage = storage;
        this.shopData = shopData;

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        this.difficulty = urlParams.get('difficulty');
        if (!(this.difficulty in difficultyData) || !storage.hasPurchase(this.difficulty)) {
            this.difficulty = 'easy';
        }
        document.getElementById('difficultyHeader').innerHTML = difficultyData[this.difficulty].name;

        const nextDifficulty = Object.keys(difficultyData)[Object.keys(difficultyData).indexOf(this.difficulty) + 1];
        if (nextDifficulty && storage.hasPurchase(nextDifficulty)) {
            this.nextDifficulty = nextDifficulty;
        }

        this.countries = difficultyData[this.difficulty].countries;
        this.reward = difficultyData[this.difficulty].reward;

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
        const randomIndex = Math.floor(Math.random() * this.countries.length);
        return this.countries.splice(randomIndex, 1)[0];
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
                } else if (this.nextDifficulty) {
                    window.location.href = `game.html?difficulty=${this.nextDifficulty}`;
                } else {
                    window.location.href = 'index.html';
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
