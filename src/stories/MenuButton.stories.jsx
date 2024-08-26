import { MenuButton } from '../components/MenuButton';

export default {
  title: 'Components/MenuButton',
  component: MenuButton,
};

const Template = (args) => <MenuButton {...args} />;

export const NonSelectedButton = Template.bind({});
NonSelectedButton.args = {
    label: 'Inicio',
    selected: false,
    iconName: 'inicio',
    onClick: () => console.log('Selected clicked') 
};

export const SelectedButton = Template.bind({});
SelectedButton.args = {
    label: 'Inicio',
    selected: true,
    iconName: 'inicio',
    onClick: () => console.log('Non selected clicked') 
};



