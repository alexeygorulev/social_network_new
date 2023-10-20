import IStore from './store';

export type Data = Readonly<{
  valuesSignIn?: { [key: string]: string };
  valuesSignUp?: { [key: string]: string };
}>;

export type ComponentProps = Readonly<{
  store: ReturnType<typeof IStore>;
  actions?: {
    mount: () => void;
    unmount: () => void;
    handleChange: () => void;
  };
}>;

export interface WrapperProps {
  children: React.ReactNode;
}

export type Visibility = Readonly<{
  signIn: boolean;
  signUp: boolean;
}>;

export type Step = 'signIn' | 'signUp';

export type IAuthInitialState = Readonly<{
  mounted: boolean;
  data: Data;
  step: Step;
}>;

export type Values = { [key: string]: string };
