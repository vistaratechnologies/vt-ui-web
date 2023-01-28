import './App.css';
// import img from './assets/images/birds.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="logo">
            <div className="short-name">VT</div>
            <div className="name">Vistara Technologies</div>
          </div>
      </header>
      <div className="banner">
        <div className="text">The world of <span>limitless possibilities</span></div>
        <div className="description">Delivering Customer value is our business value.</div>
        <div className="description">We serve our customer in planning, design, implementation and services of products and technology.</div>
      </div>
      <div className="products">
        <div className="product bg-red">
            <div className="title">DIGITAL TRANSFORMATION</div>
            <div className="description">Transform customer journeys. Deliver innovative results through new digital experiences</div>
        </div>
        <div className="product bg-grey">
            <div className="title">CLOUD & DEVOPS AUTOMATION</div>
            <div className="description">Save costs on maintenance and upgrades. Eliminate unnecessary capital expenditure</div>
        </div>
        <div className="product bg-red">
            <div className="title">PRODUCT DEVELOPMENT</div>
            <div className="description">Utilize highly-skilled development resources. Build workflows, software and digital processes</div>
        </div>
        <div className="product bg-grey">
            <div className="title">HUMAN CAPITAL</div>
            <div className="description">Build and grow knowledge, skills, habits, and personality attributes. Increase productivity.</div>
        </div>
      </div>
    </div>
  );
}

export default App;
