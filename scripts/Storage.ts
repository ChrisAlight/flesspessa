import { difficultyData, EDifficulty } from './DiffucultyData';
import { shopData } from './ShopData';

export class AppStorage {
    private popUpShown = false;

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
        
        // Check for special condition - only if we haven't shown the popup yet
        if (!localStorage.getItem('flesspessaMasterAchieved')) {
            if (this.getCoins() >= 2026 && this.hasEverythingPurchased()) {
                localStorage.setItem('flesspessaMasterAchieved', 'true');
                this.showSpecialPopUp();
            }
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

    hasEverythingPurchased(): boolean {
        const purchases = this.getPurchases();
        console.log('Checking if everything purchased. Purchases:', purchases);
        console.log('shopData:', shopData);
        
        for (const category in shopData) {
            for (const item of (shopData as any)[category]) {
                console.log(`Checking item: ${item.name}, has it: ${purchases.includes(item.name)}`);
                if (!purchases.includes(item.name)) {
                    console.log(`Missing: ${item.name}`);
                    return false;
                }
            }
        }
        console.log('All items purchased!');
        return true;
    }

    showSpecialPopUp() {
        if (this.popUpShown) return;
        this.popUpShown = true;

        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;

        const modal = document.createElement('div');
        modal.style.cssText = `
            background-color: white;
            padding: 40px;
            border-radius: 10px;
            text-align: center;
            max-width: 500px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        `;

        const title = document.createElement('h2');
        title.innerText = '🎉 Congratulations! 🎉';
        title.style.color = '#1976d2';

        const message = document.createElement('p');
        message.innerText = 'Your account has turned into a master account! You are truly a Flesspessa master! But your journy doesn\'t end here...';
        message.style.fontSize = '18px';
        message.style.marginBottom = '30px';

        const closeButton = document.createElement('button');
        closeButton.innerText = 'Close';
        closeButton.style.cssText = `
            padding: 10px 30px;
            font-size: 16px;
            background-color: #1976d2;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: block;
            margin: 0 auto;
        `;
        closeButton.onclick = () => overlay.remove();

        modal.appendChild(title);
        modal.appendChild(message);
        modal.appendChild(closeButton);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    }

    reset(): void {
        localStorage.clear();
        this.init();
    }
}

window.AppStorage = AppStorage;
window.storage = new AppStorage();
