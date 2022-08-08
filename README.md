# Enonic NextJS Redux Demo

### I created this demo based on the [NextJS-Enonic tutorial](https://developer.enonic.com/docs/next.xp/master) provided by the Enonic team, in order to build another demonstration project using the Redux library features along with NextJS and Enonic XP.

### The Redux library allow the developers to build React applications with complex states without the problems that commonly appears with them, making the state more predictable, the state manipulation more centralized and clear with the unidirectional data flow provided by the library.

### In this demo I built a simple E-commerce page example with a cart that dynamically manage the products that the user added or removed from him. The feature is implemented inside an Enonic part, the products are fetched from the Enonic headless API, and the product Content-Type can have multiple images related to it.

### *To run this demo, you need to have the Enonic CLI and the newest NPM version installed in your local machine.*

<br/>

> # Installation

- ### Enter on the **backend** folder and install the Enonic environment, running the command  `enonic project clean && enonic project build && enonic project deploy`. Then, create your new sandbox and run it. 
- ### I highly recommend to install the DataToolbox application from the Enonic market and restore the dumped data that are on the root folder of the repository.
- ### Enter on the **frontend** folder and run the command `npm install && npm run dev`
- ### If everything worked and you restored the dump, you should be able to open your `localhost:3000` and see the E-commerce example with 6 products.