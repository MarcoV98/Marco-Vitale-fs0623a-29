import './App.css';
import Components from './components'; 
import Navbar from './components/navbar';
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Footer />
      </header>
    </div>
  );
}

export default App;
