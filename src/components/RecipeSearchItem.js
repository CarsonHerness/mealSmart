import React from 'react';

// props: recipe, handleClick
class RecipeSearchItem extends React.Component {
    render() {
        return (
            <article className="recipe-search-item" id={this.props.recipe.id}>
                <div>
                    <img src={this.props.recipe.thumbnail} alt={this.props.recipe.name} title={this.props.recipe.name} />
                    <h1>{this.props.recipe.name}</h1>

                    <div className="btn-group">

                        <button onClick={() => this.props.func(this.props.recipe)}>
                            See recipe</button>

                    </div>
                </div>
            </article>

        );
    }
}

export default RecipeSearchItem;