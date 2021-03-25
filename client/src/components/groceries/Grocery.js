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
    const { id, title, price, complete, desc, deleteGrocery, updateComplete } = this.props
    return(
      <>
       
      <div className="cardrow">
        <div className="cardstyle">
        <h1 className="htitle">Title: {title}</h1>
        <h3 className="htitle">Price: {price}</h3>
        <h3 className="htitle">Description: {desc}</h3>
        <p className="cardp" style={ complete ? {...styles.complete } : null }
          onClick={() => updateComplete(id)}>
          Check off Item
        </p>
        <div className="buttons">
        {
          editing ? 
            <GroceryForm 
              {...this.props}
              toggleForm={this.toggleForm}
            />
          :
          
          <button className="btn" onClick={() => this.toggleForm()}>Edit</button>
        }
        <button className="btn" onClick={() => deleteGrocery(id)}>Delete</button>
        </div>
        </div>
        </div>
      </>
    )
      
    }
  }
  const styles = {
    complete: {
      color: 'dimgrey',
      textDecoration: 'line-through'
    }
}
export default Grocery;