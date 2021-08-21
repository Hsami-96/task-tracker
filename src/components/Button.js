import PropTypes from 'prop-types'
 
// example of reusable component
const Button = ({color, text, onClick}) => {
   
    return (
        <>
            <button onClick={onClick} className='btn' style={{backgroundColor: color}}>{text}</button>                    
        </>
    )
}

Button.defaultProps = {
    color: 'steelBlue',
    text: 'Name needed'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
