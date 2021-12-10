import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter } from 'react-router-dom';


// 1
import {ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client'

//2
const httpLink = createHttpLink({uri: 'http://localhost:4000'});

// //3
// const client = new ApolloClient({
//   link : httpLink,
//   cache : new InMemoryCache()
// });

// 3
const authLink = setContext((_, { headers }) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYzOTEyNjM2NX0.RgGQUdivzL-ltLbBjiA508b83az47Fx0a2sef9mzfWM';
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

//4
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


ReactDOM.render(
//5
  <BrowserRouter>
    <ApolloProvider client = {client} >
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
