import { Data } from '../types';

export type SignInProps = Readonly<{
  data: Data;
  handleChange: () => void;
  isLoading: boolean;
  onCheckLoginUser?: () => void;
  changeStep?: () => void;
}>;
