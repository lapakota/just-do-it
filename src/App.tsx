import React from 'react';
import './App.scss';
import { Header } from './shared/Header';
import { Todos } from './pages/TodoPage';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <Todos />
            </div>
        </Provider>
    );
}

export default App;
