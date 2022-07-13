# Olio Interview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run Instructions

1. Install packages with: `npm install`
2. Run in develop mode: `npm start`
3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Test run Instructions

Run `npm test` to run jest tests. Test files are in src/__test__

### Lauren's next step if I had more time

- If the api has the capacbility of getting individual articles with an ID number I would have used this to improve the details page loading
- The getBounds function could be simplified
- Add error handling on fetchArticles
- Add error page for a failed request
- Add some pagination so larger number of requests don't make the page messy
- Change the page icon from the react default
- Add a Olio head, banner and styling
- Use tailwind rather than keep all the styling in the create-react-app app.css
- Make the page responsive and mobile friendly
- Atricle details page and article page have similar code that could be improved
- Clicking on pin on map should scroll to the option in the list
- Add back to homepage navigation from the details page
- Accessibility improvements
- Convert the fetch to use async await
- Alot of styling!

### Dependencies

I used [leaflet](https://leafletjs.com/index.html) for the map functionality and [OpenStreetMaps](https://www.openstreetmap.org/copyright) for the tiles.
