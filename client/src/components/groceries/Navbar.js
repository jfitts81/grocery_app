const styles = {
  link: { 
    cursor: 'pointer', 
    textDecoration: 'underline', 
    color: 'white',
    marginLeft: '5px',
    marginRight: '5px',
    
  }
}
const filterLink = (current, name, setFilter) => {
  if (current === name) {
    return <span>{name}</span>
  } else {
    return <span style={styles.link} onClick={() => setFilter(name)}>{name}</span>
  }
}
const Navbar = ({ filter, setFilter}) => {
  return (
    <div className="nav">
      {
        [].map( f => filterLink(filter, f, setFilter))
      }
    </div>
  )
}
export default Navbar;