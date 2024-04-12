import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-iujuk8p50ajand6f.us.auth0.com"
    clientId="VFIAXSg4z9xRiAWKc4sI2VFTcdT7NO5B"
    authorizationParams={{redirect_uri:window.location.origin}}
  >
    <Router>
        <App />
    </Router>
  </Auth0Provider>,
);
