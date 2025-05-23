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
        }
        if (!localStorage.getItem('difficulty')) {
            localStorage.setItem('difficulty', 'normal');
        }
    }

    getCoins() {
        return parseInt(localStorage.getItem('coins')) || 0;
    }

    setCoins(amount) {
        if (typeof amount !== 'number' || amount < 0) {
            throw new Error('Invalid coin amount');
        }
        localStorage.setItem('coins', amount.toString());
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
        return localStorage.getItem('difficulty') || 'normal';
    }

    setDifficulty(difficulty) {
        const validDifficulties = ['easy', 'normal', 'hard', 'superHard'];
        if (!validDifficulties.includes(difficulty)) {
            throw new Error('Invalid difficulty');
        }
        localStorage.setItem('difficulty', difficulty);
    }
}
