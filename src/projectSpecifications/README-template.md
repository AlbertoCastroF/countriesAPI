# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![Desktop preview](./public/images/desktop_preview_dark.png)
![Mobile preview light mode](./public/images/mobile_preview_light.png)
![Mobile preview dark mode](./public/images/mobile_preview_dark.png)

### Links

- Solution URL: [Github](https://github.com/AlbertoCastroF/countriesAPI)
- Live Site URL: [GithupPages](https://albertocastrof.github.io/countriesAPI)

## My process

The first thing i had to think about was how many pages i would need to use since you have to be able to see the detail of each country. After deciding it would be two, i chose to use one single file to store all the logic using useContext hook, then, added styles using styled components.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

This is the first project where i have to implement BrowserRouter and useEffect hook. It was interesting figuring out the way to use router with useParams even though the project only has 2 pages, i have a better understanding on how it can be used on multiple pages site. I had some troubles with the dependencies array in the useEffect hook for fetching data the first time the site loads but i learned that you need to let useEffect know about all the data inside it from the render component to keep all data synchronized.

### Continued development

I read that Reducers can prevent the use of dependencies in useEffect since you can use an action to reference an operation with values in the render component so id like to use them in my next react project.

### Useful resources

- [React Router Guide](https://reactrouter.com/web/guides/quick-start) - Everything about react router.
- [UseEffect article](https://overreacted.io/a-complete-guide-to-useeffect/#dont-lie-to-react-about-dependencies) - A guide to understand useEffect better.

## Author

- Website - [Alberto Castro Flores](https://www.linkedin.com/in/alberto-castro-flores-02007959/)
- Frontend Mentor - [@AlbertoCastroF](https://www.frontendmentor.io/profile/AlbertoCastroF)

## Acknowledgments

Thanks to the slack community in frontendmentor.io who helped me in some of the troubles i had while creating this project 😁.

You can join frontendmentor.io slack community [HERE](https://www.frontendmentor.io/slack)
