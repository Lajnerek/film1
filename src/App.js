
import './App.css';

function App() {
  return (
    <div className="App">
  <form method="post">
        <div className="form-group">
          <label htmlFor="filmTitle">Tytuł filmu</label>
          <input
            type="text"
            name="filmTitle"
            id="filmTitle"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="filmType">Rodzaj</label>
          <select name="filmType" id="filmType" className="form-control">
            <option></option>
            <option value="1">Komedia</option>
            <option value="2">Obyczajowy</option>
            <option value="3">Sensacyjny</option>
            <option value="4">Horror</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Dodaj
          </button>
        </div>
      </form>
      </div>  
  );
}

export default App;
