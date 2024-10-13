import Header from './components/header';
import Hero from './components/hero';
import Features from './components/features';
import Footer from './components/footer';
import './App.css'; // Import your styles
function App() {
  return (
      <div className="App">
        <Header />
        <Hero />
        <Features />
        <Footer />
      </div>
  );
}
export default App;