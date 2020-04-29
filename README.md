# Hivery Product Dashboard

## Task summary
Run the stack by following Available scripts section. The project contains a few unit tests but it's far from a recommended test coverage.

### Implemented features
- Fulltext Search
- Select/Deselect products for comparison
- Expandable table
- Revenue chart
- Sorting by all columns
- Stock capacity
- Notifications
- Artificial loader to emulate network request

### Things I would improve if I had more time
- Higher test coverage
- Avoiding occasional "any" in types
- Closer match to the design
- Precommit checks
- CI - Run unit tests, Eslint, type check, Prettier
- Understanding datasets better and the whole problem
- Normalization and ORM mapping of data
- Customization of AntD less variables to get closer match
- Better responsivness and optimisation for legacy browsers
- Leveraging PWA caching
- Making sure Tree shaking works and strips unnecessary modules

## Tech stack

- Redux - store data
- AntD - UI framework
- Jest and testing-library - Unit testing
- Chartjs - Charting library
- Emotion - CSS in JS
- Typescript
- Tailwind - Utility CSS

## Task

### Data

- A list of current products information
- A list of product change data

### ToDo

- Page as per design provided
- Selected products panel should show current product items
- On current product click there should be a list of products show from product change data
- This list must contain all products but the one selected on the left
- On each item click show revenue summary information based on `cannibalised` data inside product info.
- Net Gain should expand into a list of all the cannibalised products.
  Please feel free to substituted missed data values with dummy numbers (i.e. Vends, Cols)

### Information

You are encouraged to use AntD framework to speed up the process and help with components build. If you are not familiar with AntD, feel free to use the one you have experience with, but AntD is the preferred choice.

To fetch images use `https://cdn.vendinganalytics.com/reyes-ccb/tb/PRODUCT_CODE.png` url.

`VPD == average_sales`

`Revenue = VPD * price`

`Net Gain = Selected Product Revenue - Current ProductRevenue - sum(Cannibalised products revenue)`

All prices are given in cents.

## Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.