import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {

  const [content, setContent] = useState('about');

  function displayContent() {
    switch (content) {
      case 'about':
        return <AboutMe />
      case 'portfolio':
        return <Portfolio />
      case 'contact':
        return <Contact />
      case 'resume':
        return <Resume />
      default:
        return <AboutMe />
    }
  }
  return (
    <div>
      <Header content={content} setContent={setContent} />
      <main>{displayContent()}</main>
      <Footer />
    </div>
  );
}

export default App;
