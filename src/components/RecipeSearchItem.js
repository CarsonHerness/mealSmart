import React from 'react';
import { Link } from 'react-router-dom';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const RecipeSearchItem = (props) => {
    return (
        <div className="recipe-search-item">
            <Card color="light">
                <CardImg top width="50%" src={props.recipe.thumbnail} alt={props.recipe.name} title={props.recipe.name} href={`/recipe/${props.recipe.id}`}/>
                <CardBody>
                    <CardTitle>{props.recipe.name}</CardTitle>
                    <CardText>{props.recipe.description}</CardText>
                    <Link to={`/recipe/${props.recipe.id}`}>Find out more</Link>
                </CardBody>
            </Card>
        </div>
    );
};

export default RecipeSearchItem;