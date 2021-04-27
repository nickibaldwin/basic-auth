# Code 401: Advanced Software Development in Full-Stack Javascript : 
## Lab 06: Basic-Auth


## [Heroku Deployment: Food-Route](https://nbaldwin-api-server.herokuapp.com/food)

## [Heroku Deployment: Clothes-Route](https://nbaldwin-api-server.herokuapp.com/clothes)

## [Github actions](https://github.com/nickibaldwin/api-server/actions)

## [Github Pull Request](https://github.com/nickibaldwin/api-server/pull/4)

## Setup

- Clone repo down to your machine
- In the root directory, run `npm install` to install node modules
- Run `nodemon` to see your live server via local host in your browser.

### Use

- Uses MongoDB. You can add items to the database via a mock API service, like [Swagger](https://inspector.swagger.io/builder). Make sure you choose the POST option once in Swagger.
- Routes include `/signup` and `/signin`

### To add a food object, use the following data shape

```JS
// to create or update an object...
{ "username": " ", "password": " " }
// "name" must be entered as a string, and "calories" as a number. 
// "type" includes: 'FRUIT', 'VEG', 'MEAT'

// This is how the object appears in the database once an ID is added:
[
    {
        "_id": "6085e24dadd09d001519be9e",
        "name": "mango",
        "calories": 150,
        "type": "FRUIT",
        "__v": 0
    }
]
```

### To add a clothing object, use the following data shape. 

```JS
// to create or update an object...
{ "name": "TEE", "color": "RED", "type": "SHIRT" }
// "name", "color", and "type" must be entered as strings.
// "type" includes: 'SHIRT', 'PANTS', 'SHORTS'

// This is how the object appears in the database once an ID is added:
[
  {
      "_id": "6085e2c2add09d001519be9f",
      "name": "TEE",
      "color": "RED",
      "type": "SHIRT",
      "__v": 0
  }
]
```


### Architecture

```git
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── clothes.test.js
│   ├── food.test.js
│   ├── server.test.js
│   ├── logger.test.js
├── src
│   ├── error-handlers
│   │   ├── 404.js
│   │   ├── 500.js
│   ├── middleware
│   │   ├── logger.js
│   ├── models
│   │   ├── clothes-schema.js
│   │   ├── food-schema.js
│   │   ├── generic-collection.js
│   ├── routes
│   │   ├── clothes-routes.js
│   │   ├── food-routes.js
│   ├── server.js
├── index.js
└── package.json
```

### UML / WRRC

![](assets/2021-04-25-15-48-48.png)

### Contributions

Thank you Lydia MT and TA Kris for the structuring and debugging help!

[Notes on Atlas MongoDB Intigration](https://github.com/codefellows/seattle-301d72/blob/master/README.md)
