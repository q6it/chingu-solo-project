import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './routes/Router';
import store from './services/store';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>
);

export default App;
