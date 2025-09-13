// ### 16. Asynkron kedja med felhantering
// **Problem:** Skapa en funktion som tar en array av asynkrona funktioner och kör dem i sekvens. Om någon funktion misslyckas, ska kedjan avbrytas och felet returneras. Implementera även retry-logik för varje steg.

// **Indata:**
// ```javascript
// const tasks = [
//   () => fetchUserData(),
//   (userData) => fetchUserPosts(userData.id),
//   (posts) => processPosts(posts)
// ];

// runSequence(tasks, { retries: 3, delay: 1000 })


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runSequence(tasks, options = {}) {
    const { retries = 3, delay: delayMs = 1000 } = options;
    let previousResult = null;
    
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let lastError = null;
        let attempt = 0;
        
        // Retry logic for current task
        while (attempt <= retries) {
            try {
                console.log(`Running task ${i + 1}, attempt ${attempt + 1}/${retries + 1}`);
                
                // Execute the task with previous result (if any)
                const result = await task(previousResult);
                
                // If successful, store result for next task and break retry loop
                previousResult = result;
                console.log(`Task ${i + 1} completed successfully`);
                break;
                
            } catch (error) {
                attempt++;
                lastError = error;
                
                if (attempt > retries) {
                    console.error(`Task ${i + 1} failed after ${retries + 1} attempts`);
                    throw new Error(`Sequence aborted at task ${i + 1}: ${error.message}`);
                }
                
                console.warn(`Task ${i + 1} failed (attempt ${attempt}/${retries + 1}), retrying in ${delayMs}ms...`);
                
                // Wait before retrying
                await delay(delayMs);
            }
        }
    }
    
    return previousResult; // Return final result
}

// Example usage with mock fetch functions
const mockFetchUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random failure (30% chance)
            if (Math.random() < 0.3) {
                reject(new Error('Failed to fetch user data'));
            } else {
                resolve({ id: 123, name: 'John Doe' });
            }
        }, 500);
    });
};

const mockFetchUserPosts = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject(new Error('Failed to fetch user posts'));
            } else {
                resolve([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
            }
        }, 500);
    });
};

const mockProcessPosts = (posts) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject(new Error('Failed to process posts'));
            } else {
                resolve({ processed: true, count: posts.length });
            }
        }, 500);
    });
};

// Test the function
const tasks = [
    mockFetchUserData,
    (userData) => mockFetchUserPosts(userData.id),
    (posts) => mockProcessPosts(posts)
];

// Run with error handling
runSequence(tasks, { retries: 2, delay: 1000 })
    .then(finalResult => {
        console.log('Sequence completed successfully:', finalResult);
    })
    .catch(error => {
        console.error('Sequence failed:', error.message);
    });