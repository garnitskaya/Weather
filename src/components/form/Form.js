import './form.scss';

const Form = (props) => {

    return (
        <form className='form' onSubmit={props.onSubmit}>
            <input
                name='city'
                type='text'
                placeholder='Погода в вашем городе'
                onChange={props.onChangeCity}
                value={props.cityName} />
            <button>Получить погоду</button>
        </form>
    )
}

export default Form;