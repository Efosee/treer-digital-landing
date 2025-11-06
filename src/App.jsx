import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contacts/Contacts';

function App() {

  return (
    <>
		<Header />
		<Intro />
		<Services />
		<Portfolio />
		<Contact />
    </>
  )
}

export default App
