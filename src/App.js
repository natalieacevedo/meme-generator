import logo from './logo.svg';
import "./main.scss";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}

export default App;

// eslint-disable-next-line no-lone-blocks
{
  /* <main>
            <h1>Boxes will go here</h1>
            {boxState.map(el => {
                
                return <div key={el.id} className={ el.on ? "relleno" : "box"}>
                
                </div> 
                
                })}
        </main> */
}