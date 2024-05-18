import './App.css';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chat initialMessages={[
        { sender: 'Assistant', text: "Hello, I'm a helpful assistant! How may I help you?", isLeft: true },
      ]}/>
      </header>
    </div>
  );
}

export default App;
