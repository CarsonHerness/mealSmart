import React from 'react';
import { Link } from 'react-router-dom';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const RecipeSearchItem = ({recipe}) => {
    return (
        <div className="recipe-search-item">
            <Card color="light">
                <CardImg top width="50%" src={recipe.thumbnail} alt={recipe.name} title={recipe.name} href={`/recipe/${recipe.id}`}/>
                <CardBody>
                    <CardTitle>{recipe.name}</CardTitle>
                    <CardText>{recipe.description}</CardText>
                    <Link to={`/recipe/${recipe.id}`}>Find out more</Link>
                </CardBody>
            </Card>
        </div>
    );
};

export default RecipeSearchItem;