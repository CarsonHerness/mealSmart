import React from 'react';
import { Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Recipe extends React.Component {
    render() {
        // only display a recipe if a recipe has been chosen
        const { recipe } = this.props;
        if (recipe) {
            return (
                <div className="recipe">
                    <Row>
                        <Col xs="auto">
                            <h1>{recipe.name}</h1>
                            <p>{recipe.description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="auto">
                            <div> Posted by {recipe.authorFirstName} {recipe.authorLastName} </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="auto">
                            <ListGroup>
                                <h2>Ingredients</h2>
                                {recipe.ingredientsList.map(i =>
                                    <ListGroupItem key={i}>{i}</ListGroupItem>)}
                            </ListGroup>
                        </Col>
                        <Col xs="auto">
                            <ListGroup>
                                <h2>Appliances</h2>
                                {Object.keys(recipe.applianceList).map((keyName, i) => {
                                    if (recipe.applianceList[keyName]) {
                                        return <ListGroupItem key={i}>{keyName}</ListGroupItem>
                                }})}
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="auto">
                            <ListGroup>
                                <h2>Instructions</h2>
                                {recipe.instructionsList.map(i =>
                                    <ListGroupItem key={i}>{i}</ListGroupItem>)}
                            </ListGroup>
                        </Col>
                    </Row>
                </div>
            );
        } else {
            return (
                <div>
                    <p> Loading recipe...</p>
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const recipes = state.firestore.data.recipes;
    const recipe = recipes ? recipes[id] : null
    return {
        recipe: recipe
    }
}

export default compose(connect(mapStateToProps),
    firestoreConnect(props => [
        { collection: "recipes" }
    ]))(Recipe);