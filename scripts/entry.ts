import Storage from './storage';
import shopData, { Background } from './shopData';
import App, { difficultyData } from './app';
import FlagDrag from './flagDrag';

// Attach to window for backward compatibility with inline scripts in HTML
declare global {
    interface Window {
        Storage: any;
        storage: any;
        shopData: any;
        App: any;
        FlagDrag: any;
        difficultyData: any;
    }
}

window.Storage = Storage;
window.shopData = shopData;
window.App = App;
window.FlagDrag = FlagDrag;
window.difficultyData = difficultyData;

// Export nothing; this file's sole purpose is to populate globals for legacy HTML
export {};
