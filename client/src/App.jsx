import React from 'react';
import { Provider } from 'react-redux';
import LinkList from './components/LinkList';
import { store } from './app/store';
import { setupSocketListeners } from './features/linksSlice.jsx'
setupSocketListeners(store)

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <LinkList />
            </div>
        </Provider>
    );
};

export default App;
