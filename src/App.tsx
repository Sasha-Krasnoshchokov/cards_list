import './App.scss';
import { Main } from './components/Main/Main';

import {useGetDataFromServer } from './controllers/controller';

function App() {
  useGetDataFromServer();

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
