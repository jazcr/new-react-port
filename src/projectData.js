import holderImg from '../src/Assets/comp.jpg';

const projectData = [
    {
        name: '4thKind',
        image: {holderImg},
        info: 'A simple blog site that allows extraterrestrial believers to create posts and drop pins where they have seen suspicious activity. Created in a team setting.',
        tech: 'JavaScript, Handlebars, CSS',
        repo: 'https://github.com/jazcr/4thKind',
        deployed: 'https://the-4th-kind.herokuapp.com',
    },
    {
        name: 'Make My Day App',
        image: {holderImg},
        info: 'Simply generate random GIFs, fox images, and inspirational quotes to brighten your day. Created in a team setting.',
        tech: 'JavaScript/jQuery, HTML5, CSS',
        repo: 'https://github.com/jazcr/Make_My_Day_app',
        deployed: 'https://jazcr.github.io/Make_My_Day_app/index.html',
    },
    {
        name: 'Work-Day Planner',
        image: {holderImg},
        info: 'This is a simple scheduling app that allows you to input events for each hour of the typical work day. These events are saved to local storage, so they will not be lost when the page is refreshed.',
        tech: 'JavaScript, HTML5, CSS',
        repo: 'https://github.com/jazcr',
        deployed: 'https://jazcr.github.io/Work-Day-Schedule/',
    },
    {
        name: 'Weather App',
        image: {holderImg},
        info: 'This simple weather app where you enter a city name into the search box and the current weather andthe future 5 day forecast displays.',
        tech: 'JavaScript, HTML5, CSS3',
        repo: 'https://github.com/jazcr/weather-app',
        deployed: 'https://jazcr.github.io/weather-app',
    }
];

export default projectData;