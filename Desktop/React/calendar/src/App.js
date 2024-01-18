import Calendar from "./components/Calendar";
import './App.css';

const currentDate = new Date();

function App() {
  return (
    <>
      <Calendar date={currentDate}/>
    </>
  );
}

export default App;
