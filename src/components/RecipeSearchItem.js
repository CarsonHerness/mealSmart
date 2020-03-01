import React from 'react';
import { Link } from 'react-router-dom';

// props: recipe
class RecipeSearchItem extends React.Component {
    render() {
        return (
            <div className="recipe-search-item">
                <article>
                    <div>
                        <img src={this.props.recipe.thumbnail} alt={this.props.recipe.name} title={this.props.recipe.name} />
                        <h1><Link to={`/recipe/${this.props.recipe.id}`}>{this.props.recipe.name}</Link></h1>
                    </div>
                </article >
            </div>


        );
    }
}

export default RecipeSearchItem;