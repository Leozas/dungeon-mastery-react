import React from 'react';
import './App.css';
import './themestr.css';

import NavbarMain from './components/NavbarMain';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.GetToken = this.GetToken.bind(this);

  }
  GetToken() {

    const UserToken = window.localStorage.getItem('user_token');
    this.setState({ UserToken: UserToken });

  }

  componentDidMount() {
    this.GetToken();
  }

  render() {
    return (
      <div className="App">
        <>

              <NavbarMain />

        </>
      </div >
    );
  }
}
export default App;
