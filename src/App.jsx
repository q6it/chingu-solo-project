import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ProvideAuth } from 'src/hooks/useAuth';
import Router from './routes/Router';
import store from './services/store';

const App = () => (
    <Provider store={store}>
        <ProvideAuth>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ProvideAuth>
    </Provider>
);

export default App;
