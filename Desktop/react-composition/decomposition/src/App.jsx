import NavLinks from './components/NavLinks';
import './App.css';
import SearchContainer from './components/SearchContainer';
import Banner from './components/Banner';
import InfoBlock from './components/InfoBlock';

function App() {

  const links = [
    {href: '#', text: 'Картинка'},
    {href: '#', text: 'Новости'},
    {href: '#', text: 'Карты'},
    {href: '#', text: 'Маркет'},
  ]
  return (
    <div className="App">
      <header>
        <NavLinks links={links}/>
        <SearchContainer />
      </header>
      <main>
        <Banner />
        <InfoBlock />
      </main>
    </div>
  );
}

export default App;
