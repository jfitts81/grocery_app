import { Component } from 'react';
import GroceryForm from './GroceryForm';
class Grocery extends Component {
  state = { editing: false }
  toggleForm = () => {
    const { editing } = this.state 
    this.setState({ editing: !editing })
  }
  render() {
    const { editing } = this.state
    const { id, title, complete, deleteGrocery } = this.props
    return(
      <>
        <h1>Title: {title}</h1>
        <p>
          { 
            complete ?
            "completed" :
            "active"
          }
        </p>
        {
          editing ? 
            <GroceryForm 
              {...this.props}
              toggleForm={this.toggleForm}
            />
          :
          <button onClick={() => this.toggleForm()}>Edit</button>
        }
        <button onClick={() => deleteGrocery(id)}>Delete</button>
      </>
    )
  }
}
export default Grocery;