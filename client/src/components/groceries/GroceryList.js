import Grocery from './Grocery';
const GroceryList = ({ grocerys, deleteGrocery, updateGrocery }) => {
  return(
    <>  
      { grocerys.map( t => 
        <Grocery
          key={t.id}
        
          {...t}
          deleteGrocery={deleteGrocery}
          updateGrocery={updateGrocery}
        />
      )}
    </>
  )
}
export default GroceryList;