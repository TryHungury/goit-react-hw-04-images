import { Component } from 'react';
import SearchBar_css from './SearchBar.module.css';

export class SearchBar extends Component {  
  state = {
    text: "",
  }  

  handleInputText = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    this.setState({[inputName]: inputValue})
  }

  handleSubmitText = (event) => {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { text } = this.state;

    this.setState((prevState)=>{
      if (prevState.text === "") {
        return
      }

      onSubmit(text.trim())

      return ({text: ""})
    })
  }

    render() {
        const { SearchBar, SearchForm, SearchForm_button, SearchForm_button_label, SearchForm_input } = SearchBar_css;
        const { text } = this.state;
        return (
        <header className={SearchBar}>
        <form onSubmit={this.handleSubmitText} className={SearchForm}>
          <button type="submit" className={SearchForm_button}>
            <span className={SearchForm_button_label}>Search</span>
          </button>
      
          <input
            className={SearchForm_input}
            name="text"
            type="text"
            value={text}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputText}
          />
        </form>
      </header>
      )
    }
}