# api-server

## Author: Emily Greason

## Setup

### .env requirements

- PORT = 3000

- DATABASE_URI = postgres://localhost:5432/postgres

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
