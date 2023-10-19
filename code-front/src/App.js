import logo from './logo.svg';
import './App.scss';
import {Provider}  from 'react-redux';
import { store } from './redux/store';
import { UploadFile } from './Components/UploadFile';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <UploadFile />
      </div>
    </Provider>
  );
}

export default App;
