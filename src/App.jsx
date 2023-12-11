import Dynamic from './components/Dynamic';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <h2>THIS IS APP.JSX</h2>
      <Products
        title='Amazon Echo'
        description='Your Assistant'
        price='29,99'
      />
      <Products title='Amazon Kindle' description='Read books' price='99,99' />
      <Form />
      <Dynamic />
    </div>
  );
}

export default App;
