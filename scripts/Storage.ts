import { difficultyData, EDifficulty } from './DiffucultyData';

export class AppStorage {
    init() {
        if (!localStorage.getItem('coins')) {
            localStorage.setItem('coins', '0');
        }
        if (!localStorage.getItem('purchases')) {
            localStorage.setItem('purchases', '[]');
            this.addPurchase('white'); // Default background
        }
        if (!localStorage.getItem('difficulty')) {
            localStorage.setItem('difficulty', EDifficulty.Easy);
        }
    }

    getCoins(): number {
        return parseInt(localStorage.getItem('coins') || '0') || 0;
    }

    setCoins(amount: number) {
        if (typeof amount !== 'number' || amount < 0) {
            throw new Error('Invalid coin amount');
        }
        localStorage.setItem('coins', amount.toString());
        this.updateCoinText();
    }

    addCoins(amount: number) {
        if (typeof amount !== 'number' || amount < 0) {
            throw new Error('Invalid coin amount');
        }
        const currentCoins = this.getCoins();
        this.setCoins(currentCoins + amount);
    }

    spendCoins(amount: number) {
        if (typeof amount !== 'number' || amount < 0) {
            throw new Error('Invalid coin amount');
        }
        const currentCoins = this.getCoins();
        if (currentCoins < amount) {
            throw new Error('Not enough coins');
        }
        this.setCoins(currentCoins - amount);
    }

    updateCoinText() {
        const coinText = document.getElementById('coinText');
        if (coinText) {
            coinText.innerHTML = String(this.getCoins());
        }
    }

    getPurchases(): string[] {
        return JSON.parse(localStorage.getItem('purchases') || '[]') || [];
    }

    hasPurchase(itemId: string): boolean {
        const purchases = this.getPurchases();
        return purchases.includes(itemId);
    }

    addPurchase(itemId: string) {
        const purchases = this.getPurchases();
        if (!purchases.includes(itemId)) {
            purchases.push(itemId);
            localStorage.setItem('purchases', JSON.stringify(purchases));
        }
    }

    getDifficulty(): EDifficulty {
        return localStorage.getItem('difficulty') as EDifficulty || EDifficulty.Easy;
    }

    setDifficulty(difficulty: EDifficulty) {
        const validDifficulties = Object.keys(difficultyData);
        if (!validDifficulties.includes(difficulty)) {
            throw new Error('Invalid difficulty');
        }
        localStorage.setItem('difficulty', difficulty);
    }

    setBackground(background: string) {
        if (typeof background !== 'string') {
            throw new Error('Invalid background');
        }
        localStorage.setItem('background', background);
    }

    getBackground(): string | null {
        return localStorage.getItem('background');
    }

    reset(): void {
        localStorage.clear();
        this.init();
    }
}

window.AppStorage = AppStorage;
window.storage = new AppStorage();
