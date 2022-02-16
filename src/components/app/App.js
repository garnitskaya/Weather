import { useSelector } from 'react-redux';

import Form from '../form/Form';
import Weather from '../weather/Weather';
import UpdateBtn from './../updateBtn/UpdateBtn';
import Spinner from './../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './app.scss';

const App = () => {
    const { city, cityStatus } = useSelector(state => state.city);

    const spinner = cityStatus === 'loading' ? <Spinner /> : null;
    const errorMessage = cityStatus === 'error' ? <ErrorMessage /> : null
    const content = !(spinner || errorMessage) ? <Weather /> : null;

    return (
        <div className="app">
            <h1>погода</h1>
            <Form />
            {errorMessage}
            {spinner}
            {content}
            {city.name && <UpdateBtn />}
        </div>
    );
}

export default App;