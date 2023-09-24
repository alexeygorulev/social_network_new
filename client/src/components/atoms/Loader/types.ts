import { Display, LoaderType } from 'components/_themes/light/types';
import { Size } from 'components/inputs/types';

export type Type = 'circle' | 'dots';

export type LoaderProps = Readonly<{
  size?: Size;
  display?: Display;
  type?: Type;
  centered?: boolean;
}>;

export type StyledLoaderProps = Readonly<{
  theme: LoaderType;
  sSize: Size;
  sType: Type;
  sDisplay: Display;
}>;
