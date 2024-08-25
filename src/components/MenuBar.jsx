import { MenuButton } from "./MenuButton";
import PropTypes from 'prop-types';

export const MenuBar = ({ buttons }) => {
    return (
      <div>
        {buttons.map((item, index) => (
          <MenuButton 
            key={index} 
            label={item.label} 
            image={item.image}
            onClick={item.onClick} />
        ))}
      </div>
    );
};

MenuBar.propTypes = {
    buttons: PropTypes.array.isRequired,
};
  