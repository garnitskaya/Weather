const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit} className="App">
            <input name='city' type="text" placeholder='Погода в вашем городе' />
            <button>Получить погоду</button>
        </form>
    )
}

export default Form;