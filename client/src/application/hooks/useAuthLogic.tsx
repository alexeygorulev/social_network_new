// ApplicationAuthLogic.js
import { useCallback } from 'react';
import { useSendUserAuthDataMutation, useSubscribeUserMutation } from 'api/auth/store';
import { Data } from '../modules/Auth/types';
import { fieldsSignIn } from '../modules/Auth/SignIn/constants';
import { fieldsSignUp } from '../modules/Auth/SignUp/constants';

export const useAuthLogic = (data: Data) => {
  const [sendUserAuthData, { isLoading: isLoadingAuth }] = useSendUserAuthDataMutation();
  const [subscribeUser, { isLoading: isLoadingReg }] = useSubscribeUserMutation();

  const onCheckLoginUser = useCallback(async () => {
    await sendUserAuthData({
      login: data.valuesSignIn[fieldsSignIn.username],
      password: data.valuesSignIn[fieldsSignIn.password],
    });
  }, [sendUserAuthData, data]);

  const onSubscribeUser = useCallback(async () => {
    const userData = Object.keys(fieldsSignUp).reduce(
      (prev, item) => ({ ...prev, [item]: data.valuesSignUp[item] }),
      {},
    );

    await subscribeUser(userData);
  }, [subscribeUser, data]);

  return { onCheckLoginUser, isLoadingAuth, onSubscribeUser, isLoadingReg };
};
