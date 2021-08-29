import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, propShowCloseText}) => {
    const location = useLocation()
    return (
        <header>
            <h1>{title}</h1>
            {location.pathname === '/' &&
            <Button 
                text={propShowCloseText ? 'Close' : 'Add'} 
                color={propShowCloseText ? 'red': 'green'} 
                onClick={onAdd}/>
            }
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
