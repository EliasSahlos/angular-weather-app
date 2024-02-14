# Angular-Weather App ☀️

This is a simple weather app created using Angular. It fetches weather data from the [OpenWeather API](https://openweathermap.org/) and displays basic information.

You can view a live demo of the website deployed on Vercel by following this link: [Live Demo](https://angular-weather-app-omega.vercel.app/)

## Features
- View current weather conditions for a specific location.
- Display temperature, humidity, wind speed, and weather description.
- Search for weather information for different locations.
- Save and delete saved cities for quick access.

## Technologies Used 💻
- Angular

## Prerequisites
- Node.js installed on your machine.
- Angular CLI (if not installed, you can install it globally by running `npm install -g @angular/cli`)

## Installation ⚙️
1. Clone the repository: ``git clone https://github.com/EliasSahlos/angular-weather-app.git``
2. Navigate into the project directory: ``cd angular-weather-app ``
3. Install dependencies: ``npm install``

## Configuration
To fetch weather data, you'll need an API key from OpenWeather. Once you have the API key, create a `environments/environment.ts` file in the `src` directory and add your API key:
```typescript
export const environment = {
production: false,
apiKey: 'your-api-key-here'
};
```

## Usage 🚀
- Start the development server: ``ng serve``
- Open your browser and navigate to `http://localhost:4200` to view the website.

## Author ✍️
- Elias Sahlos
- [Find me on Github](https://github.com/EliasSahlos/)
