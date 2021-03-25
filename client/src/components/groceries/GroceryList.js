import Grocery from './Grocery';
const GroceryList = ({ grocerys, deleteGrocery, updateGrocery, updateComplete }) => {
  return(
    <>  
      { grocerys.map( t => 
        <Grocery
          key={t.id}
        
          {...t}
          deleteGrocery={deleteGrocery}
          updateGrocery={updateGrocery}
          updateComplete={updateComplete}
        />
      )}
    </>
  )
}
export default GroceryList;