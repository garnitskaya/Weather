import cloud from './../../resourses/img/cloud.png';

import './errorMessage.scss';

const ErrorMessage = () => {
    return (
        <div className="error">
            <img src={cloud} alt="error" />
            <h5>Упс, что-то пошло не так...</h5>
        </div>
    );
};

export default ErrorMessage;