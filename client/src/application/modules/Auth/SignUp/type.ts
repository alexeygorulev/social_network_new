import { Data } from '../types';

export type SignUpProps = Readonly<{
  data: Data;
  handleChange: () => void;
  handleSubscribe: () => void;
  changeStep: () => void;
}>;

export type InputItem = Readonly<{
  id: string;
  label: string;
  value: string;
}>;
