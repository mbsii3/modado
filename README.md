# Modado

Modado is a social media dashboard that allows users to create, edit and delete their own posts and leave comments on other users posts.  The dashboard dynamically renders popular upcoming events near them based on their geo IP location and the top news articles trending.  The dash also includes a quick and easy weather data fetching widget thats allows users to get prepared for their day while getting caught up on the current events going on in the world.

## About The Project

![App Auth Page](./src/images/modado-auth.jpg)

![App index Dash](./src/images/modado-index.jpg)

![App User Profile](./src/images/modado-user-profile.jpg)

![App Post Comment page](./src/images/modado-comments.jpg)

![App Light Theme](./src/images/modado-light.jpg)

I was inspired to develop Modado because social media is a great way for individuals to connect with others who have similar interests. There are many different types of social media platforms, but I wanted to create one that is in a dashboard layout that allows users easy access to information that they are interested in, kind of like a daily news and social media dashboard.  Due to React's powerful utilization of components and state, I wanted to create a UI where many components can render different information depending on user input and it not affect other components due to re-rendering. Several third party APIs are being utilized to to pull information from other sources and it was great to test the capabilities of React's state and component features.

* The application is user-centric, so all users are able to create and see their posts on the public feed, however on their profile feed they will only see their own posts that they have created.
* The application provides full CRUD functionality, allowing users to create, edit, and delete new posts and are able to create comments on posts as well.
* The UI was developed with simplicity and a user-first mindset with a heavy focus on a social media dashboard feel.
* JWT was utilized to create an authorized user and securely salt the users password in the database. 
* EnsureLoggedIn middleware was utilized to ensure no rogue users are able to access user information if the server timesout.
* Data was sourced from OpenWeather API, NewsData.io, and SeatGeek API for the weather widget, top news headlines, and upcoming events.
* Application utilizes Heroku for easy access and deployment.

## Built With:

* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
* ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
* ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
* ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
* ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Getting Started

The web application is currently deployed on Heroku and can be accessed here: https://modado.herokuapp.com/

Link to Trello board for project organization and task management: https://trello.com/b/Omz0kvAe/project-4

## Future Features

* Optimize the application with a responsive design for mobile, tablet, and smaller screen devices.
* Allow users to upload photos to their posts.
* Allow users to like other users posts.
* Allow users to follow other users.