import Calendar from './Component/Calendar/Calendar';
import './App.css'


function App() {
  const date = new Date('2023-03-20');

  return (
    <div className="App">
      <Calendar date={date}/>
    </div>
  );
}

export default App;
