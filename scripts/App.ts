import { Country, difficultyData, EDifficulty } from './DiffucultyData';
import { shopData } from './ShopData';
import { AppStorage } from './Storage';

export class App {
    storage: AppStorage;
    difficulty: EDifficulty;
    nextDifficulty?: EDifficulty;
    countries: Country[];
    reward: number;

    hasAnswered = false;
    correctAnswer?: Country;
    correctAnswerCount = 0;

    constructor(storage: AppStorage) {
        this.storage = storage;

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        this.difficulty = urlParams.get('difficulty') as EDifficulty ?? EDifficulty.Easy;
        if (!(this.difficulty in difficultyData) || !storage.hasPurchase(this.difficulty)) {
            this.difficulty = EDifficulty.Easy;
        }
        (document.getElementById('difficultyHeader')!).innerHTML = difficultyData[this.difficulty].name;

        const nextDifficulty = Object.keys(difficultyData)[Object.keys(difficultyData).indexOf(this.difficulty) + 1] as EDifficulty | undefined;
        if (nextDifficulty && storage.hasPurchase(nextDifficulty)) {
            this.nextDifficulty = nextDifficulty;
        }

        this.countries = difficultyData[this.difficulty].countries.slice();
        this.reward = difficultyData[this.difficulty].reward;

        this.generateAnswerButtons();
        this.setRandomFlag();
    }

    static setUpPage(storage: AppStorage) {
        const backgroundName = storage.getBackground();
        const backgroundColor = shopData.backgrounds.find((bg) => bg.name === backgroundName)?.color || '#ffffff';
        document.body.style.setProperty('background-color', backgroundColor);

        storage.updateCoinText();
    }

    generateAnswerButtons() {
        const answerButtonContainer = document.getElementById('answerButtons')!;
        answerButtonContainer.innerHTML = '';

        for (const country of this.countries) {
            const answerButton = document.createElement('button');
            answerButton.innerHTML = country.name;
            answerButton.onclick = () => this.answer(country.name);
            answerButtonContainer.appendChild(answerButton);
        }
    }

    getRandomCountry(): Country {
        const randomIndex = Math.floor(Math.random() * this.countries.length);
        return this.countries.splice(randomIndex, 1)[0];
    }

    setRandomFlag() {
        const randomCountry = this.getRandomCountry();
        const flagImage = document.getElementById('flagImage') as HTMLImageElement;
        flagImage.src = `assets/flags/${randomCountry.code}.webp`;
        this.correctAnswer = randomCountry;
    }

    answer(selection: string) {
        if (this.hasAnswered) {
            return;
        }
        this.hasAnswered = true;

        const result = document.getElementById('result')!;
        const resultMessage = document.getElementById('resultMessage')!;
        const resultLink = document.getElementById('resultLink')!;
        const wasCorrect = selection === this.correctAnswer!.name;

        result.style.display = 'inherit';

        if (wasCorrect) {
            this.correctAnswerCount++;
            this.storage.addCoins(this.reward);
            resultMessage.innerHTML = `Correct! The flag is for ${this.correctAnswer!.name}.`;
            resultLink.innerHTML = this.correctAnswerCount < 3 ? 'Next Question' : this.nextDifficulty ? `Try ${difficultyData[this.nextDifficulty].name}` : 'Back to Menu';
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

window.App = App;
