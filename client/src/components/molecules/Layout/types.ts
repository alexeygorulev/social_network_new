import { Theme } from 'components/_themes/types';
import { Location } from 'react-router-dom';

export type LayoutSectionWidth = 's' | 'm' | 'l';

export type LayoutNavigationItem = Readonly<{
  id: string;
  path: string;
  title: string;
  items?: LayoutNavigationItem[];
}>;

export type LayoutNavigation = Readonly<{
  home: LayoutNavigationItem;
  auth: LayoutNavigationItem;
  items?: LayoutNavigationItem[];
}>;

export type LayoutProps = Readonly<{
  location: Location;
  navigation?: LayoutNavigation;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type LayoutStyledProps = Readonly<{
  theme?: Theme;
  auth: boolean;
}>;

export type LayoutMainProps = Readonly<{
  children?: React.ReactNode | React.ReactNode[];
}>;
