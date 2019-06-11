import React, { Component } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch'
//import { recipes } from '../tempList';

export default class RecipeList extends Component {

    render() {
        console.log('checking for the props in RList');
        console.log(this.props.recipes);

        //UNCOMMENT TO USE AJAX CALL
        const { recipes, handleDetails } = this.props;
        console.log(recipes);


        return (
            <React.Fragment>
                <RecipeSearch />
                <div className="container my-5">
                    {/* title */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted">
                                recipe list
                        </h1>
                        </div>
                    </div>
                    {/* end of the title */}
                    <div className="row">
                        {
                            recipes && recipes.map(recipe => {
                                console.log(recipe)
                                return (
                                    <Recipe
                                        key={recipe.recipe_id}
                                        recipe={recipe}
                                        handleDetails={() => handleDetails(0, recipe.recipe_id)} />
                                )
                            })
                        }

                    </div>
                </div>

            </React.Fragment>
        )
    }
}
