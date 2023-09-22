import IStore from './store';

type Data = Readonly<{
  values: { [key: string]: string };
}>;

export type ComponentProps = Readonly<{
  store: ReturnType<typeof IStore>;
  actions: {
    mount: () => void;
    unmount: () => void;
    handleChange: () => void;
  };
}>;

export type IAuthInitialState = Readonly<{
  mounted: boolean;
  data: Data;
}>;
