import React from 'react';
import firebase from '../Firestore';

class AddRecipe extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: ""
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
        e.preventDefault();const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const recipeRef = db.collection("recipes").add({
          name: this.state.name,
          description: this.state.description
        });  
        this.setState({
            name: "",
            description: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.addRecipe}>
                <input
                    type="text"
                    name="name"
                    placeholder="name of recipe"
                    onChange={this.updateInput}
                    value={this.state.name}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="one sentence description"
                    onChange={this.updateInput}
                    value={this.state.description}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default AddRecipe;