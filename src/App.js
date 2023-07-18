import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import World from './components/World';
import Hello2Component from './components/Hello2';
import Person from './components/Person';
import Customer from './components/Customer';
import Employee from './components/Employee';
import ProductList from './components/ProductList';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Hello />
       <World />
       <Hello2Component /> */}

       {/* <Person name= "keerthana" />
       <Person name= "Gouthami" />
       <Person name= "Sandhya" />
       
       <Employee  id= "101" name= "keerthana" email = "keeth@gmail.com"/>
       <Employee  id= "102" name= "Gouthami" email = "gouthu@gmail.com"/>
       <Employee  id= "103" name= "sandhya" email = "sandy@gmail.com" />

       <Customer data = {{ id : 101, name :'sun' , email : "sun@gmail.com"}} />
       <Customer data = {{ id : 102, name :'moon' , email : "moon@gmail.com"}} />
       <Customer data = {{ id : 103, name :'earth' , email : "earth@gmail.com"}} /> */}

       <ProductList />

      </header>
    </div>
  );
}

export default App;
