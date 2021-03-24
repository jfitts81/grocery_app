import { Component } from 'react';
class GroceryForm extends Component {
  state = { title: "", complete: false }
  componentDidMount() {
    if (this.props.id) {
      const { id, title, complete } = this.props 
      this.setState({ id, title, complete})
    }
  }
  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      const { updateGrocery, id, toggleForm } = this.props 
      updateGrocery(id, this.state)
      toggleForm()
    } else {
     
      this.props.addGrocery(this.state)
    }

    this.setState({ title: "", complete: false })
  }
  render() {
    const { title } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="title"
          value={title} 
          onChange={this.handleChange} 
          required
          placeholder="Title"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default GroceryForm;