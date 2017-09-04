# MyReads

A React app that lets users select and categorize books. Categories include Read, Want to Read, and Currently Reading. Users can also search for books and add or remove them from their shelves.

## Getting started

### Installation

Install dependencies

```
npm install
```

### Running

Start the app
```
npm start
```

After running your browser should open to [http://localhost:3000/](http://localhost:3000/). At any point while `npm start` is running you can return to this url to access the app.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 


## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).