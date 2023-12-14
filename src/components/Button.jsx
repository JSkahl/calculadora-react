import './Button.css'

const Button = ({ value, onClick }) => {
    return (
        <button className={value === '=' ? 'equals' : ''} onClick={onClick}>
            {value}
        </button>
    )
}

export default Button