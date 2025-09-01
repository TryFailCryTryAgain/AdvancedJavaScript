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