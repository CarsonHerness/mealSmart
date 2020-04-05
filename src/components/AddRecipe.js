import React from 'react'; // We could add { Component } here to clean up code
import { connect } from 'react-redux'
import { addRecipe } from '../store/actions/recipeActions'
import firebase from '../fbConfig';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddRecipe extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: "",
            ingredients: "",
            instructions: ""
        };
    }

    /* updates the corresponding state as values are 
    entered into the inputs */
    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    /*  Prevents the page from refreshing, returns the 
        state to default empty, and submits the data to 
        Firestore after the submit button is pressed
    */
    handleSubmit = e => {
        e.preventDefault();

        // parse the ingredients by line
        var ingredientList = this.state.ingredients.split("\n");

        // parse each ingredient by amount and type
        var parsedIngredients = []
        var ingredient;
        var parsedIngredient;
        for (ingredient in ingredientList) {
            // TODO: create RegEx for ingredient (number, space, letters, space, everything else is type)
            // TODO: catch and handle errors
            parsedIngredient = ingredient.split(" ");
            ingredient = {
                amount: parsedIngredient[0],
                unit: parsedIngredient[1],
                type: parsedIngredient[2]
            };
            parsedIngredients.concat(ingredient);
        }

        // // parse the instructions by line to be stored as an array in Firestore
        // var instructionsList = this.state.instructions.split("\n");

        // // Add ingredients to Firestore
        // let ingredientListRef = db.collection('ingredient-lists').doc();
        // ingredientListRef.set({
        //     ingredients: parsedIngredients,
        //     ingredientList: ingredientList
        // });

        // // Add recipe to Firestore, with link to ingredients
        // // TODO: Add link to ingredients document
        // db.collection("recipes").add({
        // this.state.instructions = this.state.instructions.split("\n");

        // // Pass state into action performed by mapDispatchToProps
        // this.props.addRecipe(this.state)
        
        /*const recipeRef = db.collection("recipes").add({
            name: this.state.name,
            description: this.state.description,
            instructions: instructionsList
        });

        // reset the state to default blanks
        this.setState({
            name: "",
            description: "",
            ingredients: "",
            instructions: ""
        });*/
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="recipeName">Name</Label>
                    <Input 
                        type="text" 
                        name="name" 
                        id="recipeName" 
                        placeholder="name of recipe" 
                        onChange={this.updateInput} 
                        value={this.state.name} 
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="recipeDescription">Description</Label>
                    <Input 
                        type="textarea" 
                        name="description" 
                        id="recipeDescription" 
                        placeholder="brief description of the recipe" 
                        onChange={this.updateInput} 
                        value={this.state.description} 
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="recipeIngredients">Ingredients</Label>
                    <Input 
                        type="textarea" 
                        name="ingredients" 
                        id="recipeIngredients"
                        placeholder="Put each ingredient on a new line"
                        onChange={this.updateInput}
                        value={this.state.ingredients}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="recipeInstructions">Instructions</Label>
                    <Input 
                        type="textarea" 
                        name="instructions" 
                        id="recipeInstructions"
                        placeholder="Put each instruction on a new line"
                        onChange={this.updateInput}
                        value={this.state.instructions}
                    />
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