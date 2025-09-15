# Data Pipeline

## Problemet

En film-streaming-plattform vill skapa ett system som beräknar genomsnittliga betyg och
rekommendationer baserat på användarrecensioner. Plattformen samlar in stora mängder filmdata
och användarrecensioner varje dag. Data kommer från olika källor och behöver processeras för att
skapa meningsfulla statistiker och rekommendationer. Företaget vill använda functional
programming för att göra koden lättare att testa, underhålla och förstå.


## Uppgiften

Bygg ett system som använder functional programming principer för att bearbeta filmdata och
beräkna statistik. Systemet ska kunna filtrera filmer, beräkna genomsnitt, och skapa
rekommendationer utan att förändra originaldata. Fokusera på att skriva rena funktioner som kan
kombineras på olika sätt.


## Exempel

Input data:
```javascript
const movies = [
 { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010, ratings: [9, 8, 9, 7, 8] },
 { id: 2, title: "The Matrix", genre: "Sci-Fi", year: 1999, ratings: [9, 9, 8, 9, 8] },
 { id: 3, title: "Titanic", genre: "Romance", year: 1997, ratings: [7, 8, 6, 7, 8] },
 { id: 4, title: "Avatar", genre: "Sci-Fi", year: 2009, ratings: [8, 7, 8, 9, 7] }
];
```

Output exempel:
```javascript
// Sci-Fi filmer från 2000 och framåt, sorterade efter betyg
[
 { id: 2, title: "The Matrix", genre: "Sci-Fi", year: 1999, averageRating: 8.6 },
 { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010, averageRating: 8.2 },
 { id: 4, title: "Avatar", genre: "Sci-Fi", year: 2009, averageRating: 7.8 }
]
```


## Leverans

1. Grundfunktioner
 - `calculateAverage(ratings)` - Beräknar medelbetyg
 - `addAverageRating(movie)` - Lägger till averageRating till film-objekt
 - `filterByGenre(genre, movies)` - Filtrerar filmer efter genre
 - `filterByYear(minYear, movies)` - Filtrerar filmer efter år
 - `sortByRating(movies)` - Sorterar filmer efter betyg (högst först) 

 2. Higher-order funktioner:
 - `pipe(...functions)` - Kör funktioner i sekvens (vänster till höger)
 - `compose(...functions)` - Kör funktioner i sekvens (höger till vänster) 