import IStore from './store';

export type ComponentProps = Readonly<{
  store: ReturnType<typeof IStore>;
  actions: {
    mount: () => void;
    unmount: () => void;
  };
}>;

export type IAuthInitialState = Readonly<{
  mounted: boolean;
}>;
