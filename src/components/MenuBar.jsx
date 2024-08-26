import { MenuButton } from "./MenuButton";
import PropTypes from 'prop-types';

export const MenuBar = ({ buttons }) => {
    return (
      <div className="inline-flex w-auto flex-row py-custom-xs px-custom-xs gap-2 items-center bg-background-primary">
        {buttons.map((item, index) => (
          <MenuButton 
            key={index} 
            label={item.label} 
            iconName={item.iconName}
            selected={item.selected}
            onClick={item.onClick} />
        ))}
      </div>
    );
};

MenuBar.propTypes = {
    buttons: PropTypes.array.isRequired,
};
  