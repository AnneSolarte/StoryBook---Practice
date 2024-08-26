import { MenuBar } from '../components/MenuBar';
export default {
  title: 'Components/MenuBar',
  component: MenuBar,
};

const Template = (args) => <MenuBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttons: [
    {
      label: "Inicio",
      selected: true,
      iconName: 'inicio',
      onClick: () => console.log('Selected clicked') ,
    },
    {
      label: "Agenda",
      selected: false,
      iconName: 'agenda',
      onClick: () => console.log('Selected clicked') ,
    },{
      label: "Gestión",
      selected: false,
      iconName: 'gestion',
      onClick: () => console.log('Selected clicked') ,
    },{
      label: "Portafolio",
      selected: false,
      iconName: 'portafolio',
      onClick: () => console.log('Selected clicked') ,
    },{
      label: "Perfil",
      selected: false,
      iconName: 'perfil',
      onClick: () => console.log('Selected clicked') ,
    },
  ],
};