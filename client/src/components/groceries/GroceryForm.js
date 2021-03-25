import { Component } from 'react';
class GroceryForm extends Component {
  state = { title: "", complete: false }
  componentDidMount() {
    if (this.props.id) {
      const { id, title, price, complete } = this.props 
      this.setState({ id, title, price, complete})
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

    this.setState({ title: "", price: "", complete: false })
  }
  render() {
    const { title, price, desc } = this.state
    return(
      <form className="list" onSubmit={this.handleSubmit}>
        <p>New</p>
        <input className="listinput"
          type="text"
          name="title"
          value={title} 
          onChange={this.handleChange} 
          required
          placeholder="Title"
        />
        <input className="listinput"
          type="text"
          name="price"
          value={price} 
          onChange={this.handleChange} 
          required
          placeholder="Price"
        />
           <input className="listinput"
          type="body"
          name="desc"
          value={desc} 
          onChange={this.handleChange} 
          required
          placeholder="Description"
        />
        <button className="sbtn" type="submit">Submit</button>
      </form>
    )
  }
}
export default GroceryForm;