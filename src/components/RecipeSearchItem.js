import React from 'react';

// props: recipe, handleClick
class RecipeSearchItem extends React.Component {
    render() {
        return (
            <div className="recipe-search-item">
                <article>
                    <div>
                        <img src={this.props.recipe.thumbnail} alt={this.props.recipe.name} title={this.props.recipe.name} />
                        <h1>{this.props.recipe.name}</h1>

                        <div className="btn-group">

                            <button onClick={() => this.props.func(this.props.recipe)}>
                                See recipe</button>

                        </div>
                    </div>
                </article >
            </div>


        );
    }
}

export default RecipeSearchItem;