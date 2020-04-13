import React, {Component} from 'react';

import { connect } from 'react-redux'
import { addRecipe } from '../store/actions/recipeActions'

import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddRecipe extends Component {
    constructor() {
        super();

        this.addIngredient = this.addIngredient.bind(this);
        this.updateIngredients = this.updateIngredients.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: "",
            description: "",
            ingredients: "",
            ingredientsList: [],
            instructions: "",
            instructionsList: [],
            ingredientNum: 0
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

        // parse the instructions by line to be stored as an array in Firestore
        this.setState(previousState => {
            return {
              instructionsList: previousState.instructions.split("\n")
            }
        })

        // Pass state into action performed by mapDispatchToProps
        this.props.addRecipe(this.state);
        
        // reset state to be blank
        this.setState({
            name: "",
            description: "",
            ingredients: "",
            ingredientsList: [],
            instructions: "",
            instructionsList: [],
            ingredientNum: 0
        })
    }

    /* Updates the state ingredients list from the input fields */
    updateIngredients = (e) => {
        this.state.ingredientsList[e.target.id] = e.target.value

        this.setState({ingredientsList: this.state.ingredientsList})
    }

    /* Adds another (empty) element in the ingredients list and
       updates the current number of ingredients stored in state*/
    addIngredient(){
        let newIngredientsList = this.state.ingredientsList.concat([" "])
        let newIngredientNum = this.state.ingredientNum + 1

        this.setState({ingredientsList: newIngredientsList, ingredientNum: newIngredientNum})
    }

    render() {
        return (
            <div>
                <AvForm onSubmit={this.handleSubmit}>
                    <AvGroup>
                        <Label for="name">Name</Label>
                        <AvInput type="text" name="name" id="name" placeholder="name of recipe" onChange={this.handleChange} value={this.state.name} />
                    </AvGroup>
                    <AvGroup>
                        <Label for="description">Description</Label>
                        <AvInput type="textarea" name="description" id="description" placeholder="brief description of the recipe" onChange={this.handleChange} value={this.state.description} />
                    </AvGroup>
                    <AvGroup>
                        <Label for="ingredients">Ingredients</Label>
                        
                        {/* Creates an input field for every array element */}
                        {[...Array(this.state.ingredientNum)].map((e, i) =>
                            <AvInput required name="ingredient" id={i} onChange={this.updateIngredients} value={this.state.ingredientsList[i]} />
                        )}
                        <hr />
                        <Button color="info" onClick={this.addIngredient}>Add Ingredient</Button>{' '}
                    </AvGroup>
                    <AvGroup>
                        <Label for="instructions">Instructions</Label>
                        <AvInput type="textarea" name="instructions" id="instructions" placeholder="Put each instruction on a new line" onChange={this.handleChange} value={this.state.instructions} />
                    </AvGroup>
                    <Button type="submit">Submit</Button>
                </AvForm>
            </div>
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