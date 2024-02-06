import Card from './components/Cards';
import CardItem from './components/CardItem';
import './App.css';

function App() {
  const cards = [ {
     img: 'https://t4.ftcdn.net/jpg/06/67/51/17/240_F_667511760_xu8SAN5jHCaMsULL70BNqaJqRUG4OjQG.jpg',
     title: 'Card title',
     text: 'Some quick example text to build on the card title and make up the bulk of the card'
    },

    {
      img: 'https://t3.ftcdn.net/jpg/06/70/64/46/240_F_670644630_vAqpX1YZDzCWZYMIVNewIFFGJgIOO9Rp.jpg',
      title: 'Card title',
      text: 'Some quick example text to build on the card title and make up the bulk of the card'
     } 
  ]

  return (
    <div className="App">
      <CardItem title={'Items'}>
        {cards.map((card, i) => 
          <Card card={card} key={i} />
        )}
      </CardItem>
    </div>
  );
}

export default App;
