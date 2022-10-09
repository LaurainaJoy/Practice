import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


import './App.css';

const App = () => {
  console.log('render')
  const [searchField, setsearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters)
  

  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
     });
     setfilteredMonsters(newFilteredMonsters)
     console.log('effect is firing')
  },[monsters,searchField])

  
 

  const onSearchChange = (event)=>
  { console.log(event.target.value);
    const searchFieldString = event.target.value.toLocaleLowerCase();
     setsearchField(searchFieldString);
  }

  

  return (
    <div className="App">
   <h1 className='card-title'> MONSTER BALL</h1>

   <SearchBox 
   className = 'monsters-search-box' 
    onChangeHandler ={onSearchChange}
     placeholder = 'search monsters' />

     
  
   {
     <CardList monsters = {filteredMonsters}/>
   }
   </div>


)}




 





//  render () {   

    //const {onSearchChange} = this;
   //const{monsters, searchField} = this.state;
    
     
 // return  ( 
    
   // );
   //  } 
  
//}

export default App;
