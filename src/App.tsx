import Aside from './components/Aside';
import Navbar from './components/Navbar';
import Layout from './views/_layout';

function App() {
  return (
    <div>
      <Aside />
      <Navbar />
      <Layout title='Mis datos' />
    </div>
  );
}

export default App;
