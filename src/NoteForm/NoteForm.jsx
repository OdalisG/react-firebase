import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        newNoteContent:'',
    };
        this.handleUserInput = this.handleUserInput.bind(this);
    }
//set newNoteContent
    handleUserInput(e) {
        this.setState({
            newNoteContent: e.target.value,
        })
    }


//button
render() {
    return (
        <div className ="formWrapper">
            <input className ="noteInput"
            placeholder ="Update Notes..." 
            value={this.state.newNoteContent}
            onChange={this.handleUserInput} />
            <button className = "noteButton"
            onClick={this.writeNote}>Edit Here
            </button>
        </div>
    )
}

}

export default NoteForm;