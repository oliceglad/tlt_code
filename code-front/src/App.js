import './App.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { UploadFileContainer } from './Components/UploadFile/UploadFile';
import { Header } from './Components/Header/Header';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Header />
        <div className='container' >
          <UploadFileContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
