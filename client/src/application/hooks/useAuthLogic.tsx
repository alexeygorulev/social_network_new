import { useCallback, useState } from 'react';
import { useSendUserAuthDataMutation, useSubscribeUserMutation } from 'api/auth/store';
import { Data } from '../modules/Auth/types';
import { fieldsSignIn } from '../modules/Auth/SignIn/constants';
import { fieldsSignUp } from '../modules/Auth/SignUp/constants';

export const useAuthLogic = (data: Data) => {
  const [sendUserAuthData, { isLoading: isLoadingAuth }] = useSendUserAuthDataMutation();
  const [subscribeUser, { isLoading: isLoadingReg }] = useSubscribeUserMutation();
  const [token, setToken] = useState('');

  const onCheckLoginUser = useCallback(async () => {
    const res = await sendUserAuthData({
      login: data.valuesSignIn[fieldsSignIn.username],
      password: data.valuesSignIn[fieldsSignIn.password],
    });
    if ('data' in res) setToken(res.data);
  }, [sendUserAuthData, data]);

  const onSubscribeUser = useCallback(async () => {
    const userData = Object.keys(fieldsSignUp).reduce(
      (prev, item) => ({ ...prev, [item]: data.valuesSignUp[item] }),
      {},
    );

    const res = await subscribeUser(userData);
    if ('data' in res) setToken(res.data);
  }, [subscribeUser, data]);

  return { token, onCheckLoginUser, isLoadingAuth, onSubscribeUser, isLoadingReg };
};
