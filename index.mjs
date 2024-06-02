// Adapted from https://stackoverflow.com/a/8809472/2993077
if (typeof globalThis.crypto === 'undefined' || !globalThis.crypto.randomUUID) {
    if (!globalThis.crypto) {
        globalThis.crypto = {};
    }

    globalThis.crypto.randomUUID = () => {
        let
            d = new Date().getTime(),
            d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            let r = Math.random() * 16;
            if (d > 0) {
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
}

const randomUUID = globalThis.crypto.randomUUID.bind(globalThis.crypto);
export { randomUUID }