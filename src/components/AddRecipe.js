import React, {Component} from 'react';

import { connect } from 'react-redux'
import { addRecipe } from '../store/actions/recipeActions'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddRecipe extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: "",
            ingredients: "",
            ingredientsList: [],
            instructions: "",
            instructionsList: []
        };
    }

    /* updates the corresponding state as values are 
    entered into the inputs */
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    /*  Prevents the page from refreshing, returns the 
        state to default empty, and submits the data to 
        Firestore after the submit button is pressed
    */
    handleSubmit = (e) => {
        e.preventDefault();

        // parse the ingredients by line to be stored as an array in Firestore
        this.setState(previousState => {
            return {
              ingredientsList: previousState.ingredients.split("\n")
            }
        })

        // parse the instructions by line to be stored as an array in Firestore
        this.setState(previousState => {
            return {
              instructionsList: previousState.instructions.split("\n")
            }
        })

        // Pass state into action performed by mapDispatchToProps
        this.props.addRecipe(this.state);

        console.log(this.state)
        
        // reset state to be blank
        this.setState({
            name: "",
            description: "",
            ingredients: "",
            ingredientsList: [],
            instructions: "",
            instructionsList: []
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="name of recipe" onChange={this.handleChange} value={this.state.name} />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" placeholder="brief description of the recipe" onChange={this.handleChange} value={this.state.description} />
                </FormGroup>
                <FormGroup>
                    <Label for="ingredients">Ingredients</Label>
                    <Input type="textarea" name="ingredients" id="ingredients" placeholder="Put each ingredient on a new line" onChange={this.handleChange} value={this.state.ingredients} />
                </FormGroup>
                <FormGroup>
                    <Label for="instructions">Instructions</Label>
                    <Input type="textarea" name="instructions" id="instructions" placeholder="Put each instruction on a new line" onChange={this.handleChange} value={this.state.instructions} />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}

// mapDispatchToProps tells connect to perform an action before updating props
const mapDispatchToProps = (dispatch) => {
    return {
        addRecipe: (recipe) => dispatch(addRecipe(recipe))
    }
}

export default connect(null, mapDispatchToProps)(AddRecipe);