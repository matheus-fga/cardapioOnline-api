# cardapioOnline-api
API for managing an online menu with categories and products.

## Tools and Prerequisites

Tools:
- NodeJS:
  - Node.js is a powerful and versatile technology that has the ability to handle high levels of concurrency. Furthermore, Node.js has a vast ecosystem of third-party packages available through the npm registry, making it easy to extend and customize its functionality.
- ExpressJS:
  - Express.js is a popular web framework for Node.js that offers many benefits like flexibility, modularity and extensibility. It provides a simple API for handling HTTP requests and responses, but it also lets you add middleware to your application for things like authentication, caching, and error handling.
- MongoDB (Mongoose):
  - MongoDB is a popular NoSQL database that offers a flexible data model and is highly scalable. Using Mongoose with MongoDB provides a powerful and flexible data model for your web application, with an easy-to-use API that makes working with data more efficient and straightforward.
- JsonWebToken:
  - jsonwebtoken is a library that allows you to create and verify JSON Web Tokens (JWTs), which are a compact, URL-safe means of representing claims to be transferred between two parties. JWTs can be used to provide authentication and authorization in web applications, APIs, and microservices. Overall, using jsonwebtoken can provide a secure and reliable way to authenticate users in your web application, with the added benefit of a large and active community to provide support and guidance.
   
Prerequisites: <br />
 - NodeJS
 - MongoDB
 
## Install and Run Locally
```bash

# clone
git clone https://github.com/matheus-fga/cardapioOnline-api.git

# enter the folder
cd cardapioOnline-api/

# install dependencies
yarn

# with a mongoDB instance running locally on port: 27017, run:
yarn db:seed

# and then, run:
yarn dev

```

## Usage

First, send a POST request to the endpoint <code>http://localhost:3001/auth/login</code> with the body <code>{"username":"admin", "password": "admin"}</code> to receive a JWT to be sended in the Authentication header of the other requests.

<h2> API Endpoints: </h2>

Category: <br /> <br />
   <code> > METHOD: GET </code> <br />
   <code> > URL: http://localhost:3001/category </code> <br />
   <code> > RETURN: A list of all categories </code>
<br />
<br />

Product: <br /> <br />
   <code> > METHOD: GET </code> <br />
   <code> > URL: http://localhost:3001/product </code> <br />
   <code> > RETURN: A list of all products </code>
<br />
<br />
   <code> > METHOD: GET </code> <br />
   <code> > URL: http://localhost:3001/product/56800b6b01c67c194e603e23 </code> <br />
   <code> > RETURN: A specific product </code> <br />
   <code> > OBSERVATIONS: for this request, use product id in url (56800b6b01c67c194e603e23) </code>
<br />
<br />
   <code> > METHOD: POST </code> <br />
   <code> > BODY: {"name":"Massa Carbonara","qty":1,"price":29.9,"categories": ["64321bf82ac1526ee4e1c322", "643471b507eb0237b8756db5"] } </code> <br />
   <code> > URL: http://localhost:3001/product </code> <br />
   <code> > RETURN: The product created </code>
<br />
<br />
   <code> > METHOD: PATCH </code> <br />
   <code> > BODY: {"name":"Massa Carbonara","qty":2,"price":59.8,"categories": ["64321bf82ac1526ee4e1c322", "643471b507eb0237b8756db5"] } </code> <br />
   <code> > URL: http://localhost:3001/product/56800afbf34739a94da174f0 </code> <br />
   <code> > RETURN: The product updated </code> <br />
   <code> > OBSERVATIONS: for this request, use product id in url (56800afbf34739a94da174f0) </code>
<br />
<br />
   <code> > METHOD: DELETE </code> <br />
   <code> > URL: http://localhost:3001/product/568564361cc5056325f52c3c </code> <br />
   <code> > RETURN: success or error </code> <br />
   <code> > OBSERVATIONS: for this request, use product id in url (568564361cc5056325f52c3c) </code>
<br /> 
<br />
