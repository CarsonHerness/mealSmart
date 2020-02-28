import React from 'react';
 
class Recipe extends React.Component {
    render() {
        return (
            <div>
               <h1>{this.props.recipe.name}</h1>
               <p>{this.props.recipe.instructions}</p>
            </div>
         );
    }
}
 
export default Recipe;