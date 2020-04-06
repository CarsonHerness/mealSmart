import React from 'react';
import { Link } from 'react-router-dom';

import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const RecipeSearchItem = ({recipe}) => {
    return (
        <div className="recipe-search-item">
            <Card color="light">
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