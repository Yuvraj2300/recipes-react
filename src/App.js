import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


class App extends Component {
  state = {
    recipes: [],
    url: "https://www.food2fork.com/api/search?key=7ceb253de53f24e234b0cce99d371aa3"
  };

  // AJAX CODE
  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      this.setState({
        recipes: jsonData.recipes
      });
    } catch (error) {
      console.log(error)
    }
  }

  //lifecycle mehods.....
  componentDidMount() {
    console.log("component mounted")
    this.getRecipes()
  }


  render() {
    //checking if the data recieved
    console.log(this.state.recipes)
    return (
      <React.Fragment>
        <RecipeList />

        <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;
