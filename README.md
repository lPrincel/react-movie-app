# React Movie App

A frontend web application built with React and Vite that allows users to search for movies and manage a list of favorites. Data is fetched from the TMDB API, and favorite movies are persisted in the browser using `localStorage`.

## Features

* **Movie Search:** Query the TMDB API to find movies by title.
* **Popular Movies:** Displays a list of trending movies on the home page.
* **Favorites Management:** Add or remove movies from a personalized favorites list.
* **Persistent Storage:** Favorites are saved to the browser's `localStorage` to prevent data loss on page refresh.
* **Global State:** Utilizes the React Context API to distribute the favorites state across multiple components.

## Technologies Used

* **Framework:** React 18
* **Build Tool:** Vite
* **Styling:** Standard CSS
* **API:** The Movie Database (TMDB) REST API
* **Deployment:** Netlify

## Prerequisites

To run this project locally, you need the following installed:
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* A free API key from [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)

## Installation and Setup

**1. Clone the repository**
```bash
git clone [https://github.com/lPrincel/react-movie-app.git](https://github.com/lPrincel/react-movie-app.git)
cd react-movie-app