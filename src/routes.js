import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './pages/Login'
import ConsultarPropostas from './pages/ConsultarPropostas';
import BemVindo from './pages/BemVindo';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    BemVindo,
    ConsultarPropostas
  })
);

export default Routes;