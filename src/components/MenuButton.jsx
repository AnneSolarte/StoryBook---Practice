import PropTypes from 'prop-types';

export const MenuButton = ({ label, image, onClick }) => (
    <button 
        className="nav-item" 
        onClick={onClick}>
        <img 
            src={image} 
            alt={label} />
        {label}
    </button>
);

MenuButton.propTypes = {
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};
  