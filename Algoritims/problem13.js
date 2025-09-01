// ### 13. Deep clone med cirkulära referenser
// **Problem:** Implementera en funktion som gör en djup kopia av ett objekt och hanterar cirkulära referenser korrekt.

// **Indata:**
// ```javascript
// const obj = { a: 1, b: { c: 2 } };
// obj.circular = obj;
// ```

// **Förväntad utdata:** En kopia där `copy.circular === copy` (inte originalreferensen)