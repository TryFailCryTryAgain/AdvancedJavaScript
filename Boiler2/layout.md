

Frontend:
Vite
React | .tsx
Typescripts
Tailwind

Backend:
Typescript
express.js
NodeJS

Endpoint for putting in an order

POST /order {
    order_id: string
    user_id: string
    created_at: string
    sales_men_id: string
}

Sales user {
    user_id: string
    username: string
    email: string
    password: hashsed string
    phone: string
    total_spins: int
    used_spins:
}

left_to_spin = total_spins - used_spins

used_spins <= total_spins

When "spin" is pressed;
if (used_spins + 1 > total_spins) {
    return;
}
else {
    used_spins + 1;
    SpinTheWheal(user_id);
}

Database:
SQL Database