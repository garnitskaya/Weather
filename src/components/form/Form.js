import { useSelector, useDispatch } from 'react-redux';

import { fetchCityWeather, cityFetching, cityNameFetched } from './../../redux/actions';

import './form.scss';


const Form = () => {
    const { cityName } = useSelector(state => state.city);
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (cityName) {
            dispatch(fetchCityWeather(cityFetching, cityName))
        }
    }

    const onChangeCity = (e) => {
        dispatch(cityNameFetched(e.target.value));
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <input
                name='city'
                type='text'
                placeholder='Погода в вашем городе'
                onChange={onChangeCity}
                value={cityName} />
            <button>Получить погоду</button>
        </form>
    )
}

export default Form;