# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Future development](#future-development)

## Overview

### The challenge

Users should be able to:

- Make the app fully responsive
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"
- Themes for each planet

#### Added Features

- View each planet in 3D with the ability to rotate.
- View in augmented reality on iOS.

### 📸 Preview

![preview](preview.png)

### 🔗 Links

- Solution URL: [Solution](https://github.com/jkellerman/planet-viewer)
- Live Site URL: [Live](https://planetviewer.netlify.app)

### 🧰 Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Model-viewer](https://modelviewer.dev/) - 3D/AR Models
- [Framer-motion](https://www.framer.com/motion/) - For animations

## My process

I've always been intrigued by the planets, so I was really excited to complete this challenge but also add my own spin on it 🌍. I decided to style my app with Styled Components because I've been styling my react applications this way recently and have found it to be a much better developer experience when styling within the component you're working on. It also works really well when building each component across all breakpoints with a mobile-first workflow.

There were some tricky styling challenges along the way, one example being the navigation. I could have built a separate nav as a sidebar for mobile screens but I decided it would be much cleaner to just build one and alter the styling at each breakpoint. Each nav link had an overline in desktop and a bullet point in mobile navigation which I built using pseudo elements and changed their shape in the corresponding media query. As each nav link had it's own unique color for pseudo elements, the long option would have been to write out each nth child pseudo element, but I found a more elegant way (see snippet below), which was to create a js function that loops through the theme array that I created and then returns the colour based on the index. I would then call the function within the styled component.

```js
const getBackgroundColor = (i, colorsIndex) => {
  return `
    &:nth-child(${i + 1}n)::before{
      background: ${THEME[colorsIndex++].color};
    }
  `;
};

export const calculateBackgrounds = () => {
  let str = "";
  let colorsIndex = -1;
  for (let index = 0; index < THEME.length; index++) {
    colorsIndex++;
    if (colorsIndex === colorsIndex.length - 1) colorsIndex = 0;
    str += getBackgroundColor(index, colorsIndex);
  }
  return str;
};
```

I created a pages file where I placed the components that would be shared across each route. When switching route, the tab needed to default back to overview which would have required some prop drilling, so I used the Context API which held state for the current tab. This would then enable me to **useContext** across the application when switching routes and conditionally rendering planet descriptions.

As for the models, they were actually pretty easy to implement during development, however I strumbled across a few issues when switching routes. The images for the planet between renders would spill over into the the next one. For example, if I am on mars and then switch to Jupiter, as Jupiter is much larger, the image of mars would flash before Jupiter at Jupiters size which looked very clunky. Luckily, I was able to solve this was using animations to make the planet transition out of the viewport before the next planet transitioned in, so using framer motion was very handy here.

I also stumbled across a problem in production, where my application my header and main elements were duplicating themselves on first load. I had to retrace my steps to figure out what was going on. Turns out I had implemented animated presence incorrectly on my routes based on a tutorial I was following. I had put the routes key as as location.key, with some digging I found that it should be changed to location.pathname and the issue was resolved.

### 🧑‍💻 Future development

In hindsight, there were a few things that I would probably have done differently in relation to performance, but these are things that I have learned during the process and will continue to educate myself on to make better apps in the future. In reality, models will always take time to load, however there are a few solutions to allow for better user experience. This is where **lazy loading** comes in. The models will take a few seconds to render but I added a poster file so that an image is displayed before the model fully loads which means less time for the user to be staring at nothing.

I also went in quite blindly rendering 3d models using framer motion animations as there isn't much information out there about doing this. If the client has good internet speed then it actually works pretty well, however if they are on fast 3G or worse, it will take some time for the models to load.

However, this has peaked my interest in how to make web apps more performant, such as how to reduce unused Javascript and the potential for steering away from css-in-js to minimise main-thread work.
