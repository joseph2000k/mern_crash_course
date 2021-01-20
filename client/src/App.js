import AppNavbar from "./components/AppNavbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import ShoppingList from "./components/ShoppingList";
import ItemModal from './components/ItemModal';
import { Provider } from "react-redux";
import store from "./store";
import {Container} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
          <ItemModal />
          <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
