import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchInput from './SearchInput'
import DataTable from './DataTable'

function App() {

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(  () => {
    
    const fetchData = async () => {
      const response = await  fetch('https://jsonplaceholder.typicode.com/users')
      const result = await response.json();

      console.log(result);
      setUsers(result);
      setFilteredUsers(result)
      
    } 

    fetchData();

  }, [])
  
  function handleOnInputChange(e){
    console.log("handle");
    const searchTerm = e.target.value
    setSearch(searchTerm)

    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setFilteredUsers(filtered)

  }


  return (
    <>
     <h1>User Rolodex</h1>
      <SearchInput onInputChange={handleOnInputChange} />
      <DataTable users={filteredUsers}/>
    </>
  )
}

export default App
