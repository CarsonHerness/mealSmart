import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Recipe extends React.Component {
    render() {
        // only display a recipe if a recipe has been chosen
        if (this.props.recipe !== undefined) {
            return (
                <div className="recipe">
                    <Row>
                        <Col xs="auto">
                            <h1>{this.props.recipe.name}</h1>
                            <p>{this.props.recipe.description}</p>
                        </Col>
                        <Col>
                            <img src={this.props.recipe.thumbnail} alt={this.props.recipe.name} title={this.props.recipe.name} />
                        </Col>
                    </Row>
                    <Row>
                    
                        <Col xs="auto">
                            <ListGroup>
                            <h2>Ingredients</h2>
                                {this.props.recipe.ingredients.map(i =>
                                    <ListGroupItem>{i.amount} {i.unit} {i.name}</ListGroupItem>
                                )
                                }
                            </ListGroup>
                            <h2>Instructions</h2>
                            <p>{this.props.recipe.instructions}</p>
                        </Col>
                    </Row>

                </div>
            );
        } else {
            return (
                <div>
                    <h1> Please select a recipe. </h1>
                </div>
            );
        }
    }
}

export default Recipe;