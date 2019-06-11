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
    details_id: 35382,
    //Keeping this static for dev.
    pageIndex: 1
  };

  // AJAX CODE commented till dev
  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      //    console.log(data)
      const jsonData = await data.json();
      console.log(jsonData);
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

  //Separating the views for lists and recipe
  displayPage = (index) => {
    switch (index) {
      default:
      case 1:
        return (<RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails}/>)
      case 0:
        return (<RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex} />)

    }
  }

  //handling button clicks
  handleIndex = (index) => {
    this.setState({
      pageIndex: index
    })
  }

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    })
  }


  render() {
    //checking if the data recieved
    console.log(this.state.recipes)
    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}

export default App;
