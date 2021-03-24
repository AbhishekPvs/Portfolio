
import './App.css';
import './About.js';
import './Resume.js'
import About from './About.js';
import Resume from './Resume.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>Home</button>
        <button>About</button>
        <button>Resume</button>
        <button>Projects</button>
        <button>Contact</button>
      </header>
      <body className="App-body">
        <About/>
        <Resume/>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
