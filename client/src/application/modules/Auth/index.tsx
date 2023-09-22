import { useSelector } from 'react-redux';
import Component from './ApplicationAuth';
import { RootState } from 'main';
import { mount, unmount, handleChange } from './store';
import { useActions } from 'application/hooks/useActions';

const Module: React.FC = () => {
  const store = useSelector((state: RootState) => state.authReducer);
  const actions = useActions({ mount, unmount, handleChange });

  return <Component store={store} actions={actions} />;
};

export default Module;
