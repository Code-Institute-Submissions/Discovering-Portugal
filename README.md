# Discovering Portugal

This website was thought to work mainly as a sort of digital touristic guide, giving some tips and suggestions to anyone wishing to visit Portugal. Here you will not only find suggestions of the best places to visit in Portugal, but also some of the things to see and tips as to where to stay and what is the typical food of each place.
 
## UX
 
This project is intended for possible tourists to discover more about Portugal and go visit it.

### User Stories
- As a tourist, I want to receive suggestions of nice places to visit in Portugal, and information about said places so that I can make the most of my visit.

### Strategy Plane
My goal in this website is to showcase Portugal in the best possible light, and “sell” it as possible vacation destination.

### Scope Plane
In order to make this site as simple and user friendly as possible I decided to focus on Continental Portugal and use its main regions (the north, the center and the south) as the conductor line to the pages that should exist in my website. That being said, my website possesses 4 pages: the homepage with some generic information about the country, and the three regional pages (the north, the center and the south).

### Structure Plane
In terms of structure we can divide my work in two: the homepage and the regional pages (the three of them are structured in the same way to keep the design consistent).
The homepage – this page possesses an image of a famous landmark in Portugal and bellow the picture it has a section with basic information about the country, its regions and its accessibility. After that you will the option to choose between which of the three regional pages you would like to see first.
The regional pages – this pages possess a fixed to the top header that allows users to switch page anytime they want without having to scroll up or down. After that there is a map of the area side by side with a small quote from a known touristic website and the option to choose the type of tourism preferred by the user (nature tourism, city tourism or beach directed tourism). Bellow this comes the section with information about the selected places, which contain a picture of the place side by side with a quote about the place and some tips about it (for example where to stay, what to see and if there is any typical food from that place).

### Skeleton Plane
- Homepage wireframe
- North/Center/South page wireframe

### Surface Plane
Visually my website can be divided in the same way it was divided in the Structure Plane.
The homepage – From the start I knew I wanted to make a big visual impact when entering my website by having the chosen landmark image occupy the full device screen, however in order to do this and still have some general information about the country, as well as the navigation buttons, I felt the need to have some sort of indicator that there was more to see below the image. This way a simple, clean arrow was placed in the bottom of the image that when clicked takes the user to the section after the image. There you will find a sort of board with information and beneath it the navigational buttons. Both the board and the buttons have a grey background – this choice was made since the image has a lot of chromatic information and so I felt the need to make these elements a bit more neutral, but still in a way to give them a contrast.
The regional pages – Since one of the first elements of these pages is the map, in order to have chromatic consistency the headers’ background was coloured with the same blue as the one present in the map representing the ocean. The rest of the website has absolutely no background colour since these pages have a lot of images and if I added to that a background colour it would easily and fast become way too much visual information and have a negative effect on the experience. The only two elements that do have background colour are the tourism type choice buttons and the pictograms, here the background colour is the same grey tone used in the homepage. In terms of layout, in order to maximize the map and image space they occupy, when side by side with the information, 8/12 of the page and the text 4/12 – this same ratio was used when making the board for the homepage.
Finally, to ensure the cross device functionality the only difference between the desktop and mobile website is the fact that on the phone there are no elements side by side, and they are automatically placed one beneath the other.

## Features
 
### Existing Features
- This website uses JavaScript to hide or show determined sections of the website, according to the user choices.
- It also uses, on the homepage, an arrow that automatically scrolls the user to the next section of the page. 

### Features Left to Implement
For now, there are no plans to implement any future features.

## Technologies Used

- [Bootstap](https://getbootstrap.com/)
    - The project uses **Bootstrap** to simplify html, css and JavaScript coding.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Leaflet API](https://leafletjs.com/) and [OpenStreetMap](https://www.openstreetmap.org/#map=15/10.3714/-85.1239)
    - The project uses the **Leaflet API** together with **OpenStreetMap** to render the map in the regional pages.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.

## Credits

### Content
- The text in the website is all from my authory, apart from the quotes that are referenced accordingdly in the website, and all belong to the [VisitPortugal](https://www.visitportugal.com/en) website.

### Media
- The photo present in the homepage, as well as he photos of Aveiro, Gerês, Lisbon, Nazaré, Sintra and Porto were taken from [Unsplash](https://unsplash.com/).
- The photos of Evora, Tavira, Serra da Estrela and Costa Nova were taken from [Pixabay](https://pixabay.com/pt/).
- The photo of Praia da Marinha was taken from [Pexels](https://www.pexels.com/).
- The photo of Tomar was taken from [Free images](https://www.freeimages.com/).
- The remaining photos were taken by some friends who gave me their permission to use them in this website, for educational purposes.
