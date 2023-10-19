import logo from './logo.svg';
import './App.scss';
import {Provider}  from 'react-redux';
import { store } from './redux/store';
import { UploadFileContainer } from './Components/UploadFile/UploadFile';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <UploadFileContainer />
      </div>
    </Provider>
  );
}

export default App;
