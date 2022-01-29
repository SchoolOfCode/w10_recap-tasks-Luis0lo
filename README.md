# WikiPigeon

## Purpose

This is a [blog](http://localhost:3000/) about pigeons to 
which you will need to log in to have access to its privileged information.  
This way we keep can filter who has access to our App.

## Components 
Header  (Blog Title)  

User  (Display user profile if loged in)  
> LoginButton  (login logic using AUTH0)   
> LogoutButton  (logout)

Article  (Display all the blog articles)  
> Content (title, paragraphs)  
> Comments (author and comment)


## Basic Requirements
This project was built with Create React App. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine.  
Having an account on [AUTH0](https://auth0.com/)

## Getting Started 

#### Clone the Repo
 - **npm install** downloads dependencies defined in the package. json file and generates a node_modules folder with the installed modules.  


#### Authentication
To enable the authentication feature you'll need to get your own 
credentials from **AUTH0** and add it to
[.env.example](https://github.com/SchoolOfCode/w10_recap-tasks-Luis0lo/blob/master/.env.example) file. 
Afterwards, change the file name to .env  
Not sure about how to get the credentials! You can follow the steps on 
[AUTH0](https://auth0.com/docs/quickstart/spa/react/01-login) up to
"Install the Auth0 React SDK" step. 
 

#### Run the app locally

 - **npm start** You'll be able to see the App on your browser. By default http://localhost:3000/


## Dependencies 

- "@auth0/auth0-react": "1.9.0"  
- "antd": "4.18.5"  
- "react": "17.0.2"  
- "react-dom": "17.0.2",























