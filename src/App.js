import logo from './logo.svg';
import useMultiStepForm from './hooks/useMultiStepForm';

function App() {
  const { steps, currentIndex, goBack, goForward, step } = useMultiStepForm([])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
