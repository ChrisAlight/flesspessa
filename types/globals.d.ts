import { App } from '../scripts/App';
import { FlagDrag } from '../scripts/FlagDrag';
import { AppStorage } from '../scripts/Storage';
import { shopData } from '../scripts/shopData';
import { difficultyData, EDifficulty } from '../scripts/DiffucultyData';

export {};

declare global {
    interface Window {
        App: typeof App;
        FlagDrag: typeof FlagDrag;
        Storage: typeof AppStorage;
        AppStorage: typeof AppStorage;

        shopData: typeof shopData;
        difficultyData: typeof difficultyData;
        storage: AppStorage;
    }
}
