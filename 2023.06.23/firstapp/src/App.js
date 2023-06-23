import logo from './logo.svg';
import './App.css';
import ItemCard from './components/ItemCard'
import Greet from './components/Greet'

var Items = [
  { name: 'Trip to Lake', img: 'https://images.unsplash.com/photo-1583244685026-d8519b5e3d21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  { name: 'Bike Ride', img: 'https://images.unsplash.com/photo-1624535478774-c7269849fec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
  { name: 'Hababi! Come to Dubai', img: 'https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80' },
]


function App() {



  return (
    <div className="App">

      <Greet>Karan</Greet>

      <div id="TaskHolder">
        <h2>Let's plan, your holidays!</h2>
        <div>
          <ItemCard obj={Items[0]}></ItemCard>
          <ItemCard obj={Items[1]}></ItemCard>
          <ItemCard obj={Items[2]}></ItemCard>
        </div>
      </div>

    </div>
  );
}

export default App;
