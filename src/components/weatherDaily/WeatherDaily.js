import { useSelector, useDispatch } from 'react-redux';

import { fetchDaily, setShowDailyContent } from "../../redux/actions";
import WeatherWrap from './../common/WeatherWrap';
import WeatherDailyContent from '../weatherDailyContent/WeatherDailyContent';

import './weatherDaily.scss';

const WeatherDaily = () => {
    const { showDailyContent } = useSelector(state => state.weatherDaily);
    const { city } = useSelector(state => state.city);
    const dispatch = useDispatch();

    const { coordLat, coordLon } = city;
    const activeContent = showDailyContent ? 'active' : '';

    const onShowContent = () => {
        dispatch(setShowDailyContent(!showDailyContent));
        if (!activeContent) {
            dispatch(fetchDaily(coordLat, coordLon));
        }
    }

    return (
        <WeatherWrap
            cl='daily'
            title='Прогноз на 8 дней'
            activeCl={activeContent}
            onAction={onShowContent}
        >
            <WeatherDailyContent />
        </WeatherWrap>
    )
}

export default WeatherDaily;
