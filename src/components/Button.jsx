import PropTypes from 'prop-types';

export const Button = ({ mode, size, label, ...props }) => {
  const modeClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-500 text-white hover:bg-gray-700',
    danger: 'bg-red-500 text-white hover:bg-red-700',
  };

  const baseStyle = 'font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2';

  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };
  
  return (
    <button
      type="button"
      className={`${baseStyle} ${sizeClasses[size]} ${modeClasses[mode]}`}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  mode: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  mode: 'primary',
  size: 'medium',
  onClick: undefined,
};


