import { MenuButton } from '../components/MenuButton';

import inicioIcon from './assets/images/inicio-icon.svg';
import agendaIcon from './assets/images/agenda-icon.svg';
import gestionIcon from './assets/images/gestion-icon.svg';
import portafolioIcon from './assets/images/portafolio-icon.svg';
import perfilIcon from './assets/images/perfil-icon.svg';


export default {
  title: 'Components/MenuButton',
  component: MenuButton,
};

const Template = (args) => <MenuButton {...args} />;

export const InicioButton = Template.bind({});
InicioButton.args = {
    label: 'Inicio',
    image: inicioIcon,
    onClick: () => console.log('Home clicked') 
};

export const AgendaButton = Template.bind({});
AgendaButton.args = {
    label: 'Agenda',
    image: agendaIcon,
    onClick: () => console.log('Agenda clicked') 

};

export const GestionButton = Template.bind({});
GestionButton.args = {
    label: 'Gestión',
    image: gestionIcon,
    onClick: () => console.log('Gestion clicked') 

};

export const PortafolioButton = Template.bind({});
PortafolioButton.args = {
    label: 'Portafolio',
    image: portafolioIcon,
    onClick: () => console.log('Portafolio clicked') 

};

export const PerfilButton = Template.bind({});
PerfilButton.args = {
    label: 'Perfil',
    image: perfilIcon,
    onClick: () => console.log('Perfil clicked') 

};