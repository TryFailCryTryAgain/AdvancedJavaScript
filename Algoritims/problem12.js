// ### 12. Implementera en debounce-funktion
// **Problem:** Skapa en debounce-funktion som begränsar hur ofta en funktion kan anropas. Funktionen ska vänta tills det gått en viss tid sedan sista anropet innan den faktiskt körs.

// **Indata:** 
// ```javascript
// const debouncedFunc = debounce((msg) => console.log(msg), 300);
// debouncedFunc("Hello"); // Körs inte direkt
// debouncedFunc("World"); // Avbryter föregående
// // Efter 300ms: loggar "World"

let abortController = null;

async function AsyncFunctionality(data) {
    // Cancel previous operation if it exists
    if (abortController) {
        abortController.abort();
    }
    
    // Create new abort controller for current operation
    abortController = new AbortController();
    const { signal } = abortController;
    
    try {
        const resultPromise = new Promise((resolve, reject) => {
            // Check if already aborted
            if (signal.aborted) {
                reject(new DOMException('Aborted', 'AbortError'));
                return;
            }
            
            const timeoutId = setTimeout(() => {
                resolve(data);
            }, 3000);
            
            // Clean up on abort
            signal.addEventListener('abort', () => {
                clearTimeout(timeoutId);
                reject(new DOMException('Aborted', 'AbortError'));
            });
        });
        
        const result = await resultPromise;
        console.log("Operation completed:", result);
        
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log("Operation was aborted (expected)");
        } else {
            console.error("Operation failed:", error);
        }
    }
}

// Usage
AsyncFunctionality("Hello");
setTimeout(() => AsyncFunctionality("World"), 1000); // This will cancel Request 1