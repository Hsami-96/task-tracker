import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, propShowCloseText}) => {
    const onClick = (e) => {
        console.log(e)  
    }
    return (
        <header>
            <h1>{title}</h1>
            <Button 
                text={propShowCloseText ? 'Close' : 'Add'} 
                color={propShowCloseText ? 'red': 'green'} 
                onClick={onAdd}/>
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
} 
export default Header
