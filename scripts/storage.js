class Storage {
    constructor() {
        this.init();
    }

    init() {
        if (!localStorage.getItem('coins')) {
            localStorage.setItem('coins', '0');
        }
        if (!localStorage.getItem('purchases')) {
            localStorage.setItem('purchases', '[]');
            this.addPurchase('white'); // Default background
        }
        if (!localStorage.getItem('difficulty')) {
            localStorage.setItem('difficulty', 'easy');
        }
        this.updateCoinText();
    }

    getCoins() {
        return parseInt(localStorage.getItem('coins')) || 0;
    }

    setCoins(amount) {
        if (typeof amount !== 'number' || amount < 0) {
            throw new Error('Invalid coin amount');
        }
        localStorage.setItem('coins', amount.toString());
        this.updateCoinText();
    }

    addCoins(amount) {
        if (typeof amount !== 'number' || amount < 0) {
            throw new Error('Invalid coin amount');
        }
        const currentCoins = this.getCoins();
        this.setCoins(currentCoins + amount);
    }

    spendCoins(amount) {
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
            coinText.innerHTML = this.getCoins();
        }
    }

    getPurchases() {
        return JSON.parse(localStorage.getItem('purchases')) || [];
    }

    hasPurchase(itemId) {
        const purchases = this.getPurchases();
        return purchases.includes(itemId);
    }

    addPurchase(itemId) {
        const purchases = this.getPurchases();
        if (!purchases.includes(itemId)) {
            purchases.push(itemId);
            localStorage.setItem('purchases', JSON.stringify(purchases));
        }
    }

    getDifficulty() {
        return localStorage.getItem('difficulty') || 'easy';
    }

    setDifficulty(difficulty) {
        const validDifficulties = ['easy', 'normal', 'hard', 'superHard'];
        if (!validDifficulties.includes(difficulty)) {
            throw new Error('Invalid difficulty');
        }
        localStorage.setItem('difficulty', difficulty);
    }

    setBackground(background) {
        if (typeof background !== 'string') {
            throw new Error('Invalid background');
        }
        localStorage.setItem('background', background);
    }

    getBackground() {
        return localStorage.getItem('background');
    }
}
