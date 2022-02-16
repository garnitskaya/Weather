const WeatherWrap = ({ children, title, cl, activeCl = '', onAction }) => {
    return (
        <div className={`weather-${cl}`}>
            <h3 onClick={onAction}
                className={`weather-${cl}__title  ${activeCl}`}>
                {title}
            </h3>
            {children}
        </div>
    );
};

export default WeatherWrap;