import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './pages/Login'
import ConsultarPropostas from './pages/ConsultarPropostas';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    ConsultarPropostas
  })
);

export default Routes;