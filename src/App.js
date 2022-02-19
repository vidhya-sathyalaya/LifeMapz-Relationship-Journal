import logo from './logo.svg';
import './App.css';
import Router from './Router.js'
import { withAuthenticator } from 'aws-amplify-react'

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings : true });