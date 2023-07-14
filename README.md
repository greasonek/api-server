# api-server

I'd add description of lab and lab names (3, 4)

## Author: Emily Greason

## Setup

### .env requirements

- PORT = 3000

- DATABASE_URI = postgres://localhost:5432/postgres
(maybe this is what I was actually mssing yesterday?)^^

### Running the app

- npm start

- Endpoint
  - /
  - /dogs
  - /cats

  - Returns Objects
    - /dogs {
      "dogName": "name",
      "dogBreed": "breed",
      "dogMood": "mood"
    }
    - /cats {
      "catName": "name",
      "furColor": "color",
      "catMood": "mood"
    }

### UML

![server whiteboard](./img/lab-01-drawing.png)

## LAB 04 - Modeling

### Pair Programming

- Partner: Mike Pace

- Takeaway: Interesting to read someone else's code to see how they did things and to be able to understand what they've written even though it looks a little different from ine

- https://github.com/greasonek/api-server/pull/3/commits/652b638474050771c4fd5884006c0a6b6f4889d1

- https://github.com/catdude2000/api-server/compare/main...greasonek:api-server-1-mike:emilyReview
