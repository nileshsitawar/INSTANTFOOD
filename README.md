#  Namste React 
# parcel is a beast
 - dev build
 - Local server 
 - HMR(hot module replacement) refreshing page automatically for smooth development
 -File watching Algorithm -written in c++
 - Caching - Faster Builds
 -Image Optimization (this is the most costly thing )
 - Minification 
 - Bundling 
 - Compressing
 - consistent Hashing 
 - code spliting 
 Differential Bundling (after hosting app can open in all web engines like crome ,internet explorer) support older browers
 - Better Error handling 
 - Hosting on HTTPS
 - Tree shaking algo (removes unused code)
 - Different  development and production bundles



# namste Food
 /** Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */


 
Two types of Export/Import
 -Default export/import
 export default Compenent
     import Component from "path" 

 Named Export/Import
     export const component
     import {component} from "Path"

     # two types of Routing 
      -client Side Routing
      -Server Side Routing
      
      # Redux  Toolkit(RTK)
       - install @reduxjs/toolkit and ract-redux
        - Build our store
        - connect our store to our app
        - Crate a Slice (cartSlic)
        -dispatch(action)
        -selector

# Types of Testing (devloper)
 - Unit Testing  (test in isolation) only specific small component

  - Integration 
     - Testing the integration of so many components (multiple components envolved in testing )
  - End to End - Testing e2e testing
      - Testing start as soon as user lands on website to leave the website
       - It require Tools like selenius ,(cyprus)


# Setting Up Testing in our APP
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel
 - configure Parcel config file to disable default babel transpiler
 - jest configuration  
     - jest npx jest --init
- install jsdom library
- Install @babel/preset-react - to make JSx work in test cases
- Include @babel/preset-react inside my babel config
- Install  npm i -D @testing-library/jest-dom
  
