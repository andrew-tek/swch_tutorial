import React, {Component} from 'react';
import Header from './Header.jsx';
//import Footer from '../components/Main/Footer.jsx';

export default class MainLayout extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        {/*<Footer />*/}
      </div>
    );
  }
}
