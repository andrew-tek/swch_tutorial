import React, {Component} from 'react';
import Header from './Header.jsx';
import { Provider } from 'react-redux';
import Store from '/imports/ui/redux/store/store';
// import Footer from '../components/Main/Footer.jsx';
export default class MainLayout extends Component {
  render() {
    if(this.props.loading){
      return (<div>loading...</div>)
    } else {
      return (
        <Provider store={Store}>
          <div>
          <Header {...this.props}/>
          {this.props.children}
          {/* <Footer /> */}
          </div>
        </Provider>
      );
    }
  }
}
MainLayout.propTypes = {
  currentUser: React.PropTypes.object,
  children: React.PropTypes.element,
  isLoggedIn: React.PropTypes.bool,
};
