import React, { Component } from 'react';
import './App.css';
//import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


class App extends Component {
  state = {
    //for dev
    //recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=7ceb253de53f24e234b0cce99d371aa3",
    details_id: 35382
  };

  //AJAX CODE commented till dev
  // async getRecipes() {
  //   try {
  //     const data = await fetch(this.state.url);
  // //    console.log(data)
  //     const jsonData = await data.json();
  //     console.log(jsonData);
  //     this.setState({
  //       recipes: jsonData.recipes
  //     });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // //lifecycle mehods.....
  // componentDidMount() {
  //  console.log("component mounted")
  //   this.getRecipes()
  // }


  render() {
    //checking if the data recieved
   console.log(this.state.recipes)
    return (
      <React.Fragment>
        <RecipeList recipes={this.state.recipes}/>

        <RecipeDetails id={this.state.details_id}/>
      </React.Fragment>
    );
  }
}

export default App;
