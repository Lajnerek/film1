import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" integrity="sha256-2TnSHycBDAm2wpZmgdi0z81kykGPJAkiUY+Wf97RbvY=" crossorigin="anonymous"></link>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Tytuł Filmu </label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
      </form>
    </div>
  );
}

export default App;
