
import '../styles/App.css';
// import Logo from './components/Logo'
import Logo from './assests/images/image-header-desktop'
// import example: 
//      You can import static assets directly using a variable of your choosing

// import desktopImage from '../assets/images/image-header-desktop.jpg'
console.log(Logo)
function App() {
  return (
    <div className="App">
        {/* structure your HTML + CSS rules to match the designs provided */}
        <div className="left">
          <div>
            <h1>Get insights that help your business grow.</h1> 
            <p>Discover the benefits of data
      analytics and make better decisions regarding revenue, customer experience,
          and overall efficiency.</p> 
          </div>

          <div className="info">
          <h2>10k+</h2>companies 
          <h2>314</h2> templates 
          <h2>12m+</h2> queries
          </div>
        </div>
        <div className = "right">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
    </div>
  );
}

export default App;

