import React from 'react';
import firebase from '../Firestore';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddRecipe extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: "",
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
    addRecipe = e => {
        e.preventDefault(); const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });

        // parse the instructions by line to be stored as an array in Firestore
        var instructionsList = this.state.instructions.split("\n");
        
        const recipeRef = db.collection("recipes").add({
            name: this.state.name,
            description: this.state.description,
            instructions: instructionsList
        });
        this.setState({
            name: "",
            description: "",
            instructions: ""
        });
    }

    render() {
        return (
            <Form onSubmit={this.addRecipe}>
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

export default AddRecipe;