import { Component } from 'react'
import GroceryForm from './components/groceries/GroceryForm';
import GroceryList from './components/groceries/GroceryList';
import axios from 'axios';
class App extends Component {
  state = { grocerys: [] }
  componentDidMount() {

    axios.get('/api/grocerys')
      .then( res => {
        
        this.setState({ grocerys: res.data })
      })  
      .catch( err => console.log(err))
  }
  addGrocery = (grocery) => {
   
    axios.post('/api/grocerys', { grocery })
      .then( res => {
      
        const { grocerys } = this.state 
        this.setState({ grocerys: [ ...grocerys, res.data ] })
      })
      .catch( err => console.log(err))
  }
  updateGrocery = (id, grocery) => {
    
    axios.put(`/api/grocerys/${id}`, { grocery })
      .then( res => {

        const grocerys = this.state.grocerys.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        this.setState({ grocerys })
      })
      .catch( err => console.log(err))
  }
  deleteGrocery = (id) => {
   
    axios.delete(`/api/grocerys/${id}`)
      .then( res => {
       
        const { grocerys } = this.state 
        this.setState({ grocerys: grocerys.filter( t => t.id !== id )})
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }
  updateComplete = (id) => {
    const { grocerys } = this.state
    this.setState({
      grocerys: grocerys.map( t => {
        if (t.id === id) {
          return {
            ...t, 
            complete: !t.complete
          }
        }
        return t
      })
    })
  }
  render() {
    const { grocerys } = this.state
    return (
      <>
        <h1>Grocery List</h1>
        <GroceryForm addGrocery={this.addGrocery} />
        <GroceryList 
          grocerys={grocerys} 
          deleteGrocery={this.deleteGrocery}
          updateGrocery={this.updateGrocery}
        />
      </>
    )
  }
}
export default App;