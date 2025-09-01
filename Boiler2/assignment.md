# Sales Reward Spinner

## Problemet

Ett bolag har säljare som säljer bolagets produkter digital. Bolaget vill införa ett belöningssystem: varje gång en säljare lycaks med en order få den ett spinn tillgogo i ett spinnhju. Spinnhjulet har flera priset (t. ex. 10 kr upp till 500 kr) med olika sannolikheter där lägre belopp är vanligare än högre. Utmaningen är att ta fram en teknsik lösning som är rättvis men också säker, samt att strukturera data så att systemet går att drifta och underhålla.

## Uppgiften

Din uppgift är att designa en helhetslösning som kan tilldela spinn vid inkommen order, låta säljaren spinna och avgöra vinst baserat på en sannolikhetsfördelning. Lösningen ska spara utfallet och gröa det möjligt att visa historik per säljare. Utgå från att ni är konsulter som ska bygga den här lösningen på bolaget. Fundera därför över hur era beslut kommer att påverka lösningen och bolaget.

## Exempel

En säljare genomför en order och får därmed 1 spinn tillgodo på sitt konto. Säljare öppnar sin sida och trycker på "Spinna". Systemet genererar ett slumpmässigt utfall baserat på en sannolikhetsfördelning där ex. 10kr är mer sannolikht än 500 kr. VInsten visas för säljaren och sparas som en del av säljarens spinn-historik.

## Leverans

Säljaren ska kunna se antal spinn tillgodo och genomföra ett spinn, samt se historiska spinns. Det måste finnas en endpoint på backend enligt nedan för att simulera eninkommander order, och det är denna endpoint som ska tilldela en spinn till den berörda användaren.

POST/order {
    order_id: string
    user_id: string
    created_at: string
}

Tekniska kravet är att använda Typescript och NodeJS. På frontend får ni använda vilken ramverk som helst eller köra med vanllia javascript. På backend får ni använda vilken ramverk och databas som helst.