import { MenuBar } from '../components/MenuBar';
import { AgendaButton, GestionButton, InicioButton, PerfilButton, PortafolioButton } from './MenuButton.stories';

export default {
  title: 'Components/MenuBar',
  component: MenuBar,
};

const Template = (args) => <MenuBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttons: [
    {
      label: InicioButton.args.label,
      image: InicioButton.args.image,
      onClick: InicioButton.args.onClick,
    },
    {
      label: AgendaButton.args.label,
      image: AgendaButton.args.image,
      onClick: AgendaButton.args.onClick,
    },
    {
      label: GestionButton.args.label,
      image: GestionButton.args.image,
      onClick: GestionButton.args.onClick,
    },
    {
      label: PortafolioButton.args.label,
      image: PortafolioButton.args.image,
      onClick: PortafolioButton.args.onClick,
    },
    {
      label: PerfilButton.args.label,
      image: PerfilButton.args.image,
      onClick: PerfilButton.args.onClick,
    },
  ],
};