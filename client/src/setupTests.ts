import { configure } from 'enzyme'; /* eslint-disable-line */
import Adapter from 'enzyme-adapter-react-16'; /* eslint-disable-line */
import 'regenerator-runtime/runtime'; /* eslint-disable-line */
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

global.window.matchMedia =
  global.window.matchMedia ||
  function (query: string) {
    return {
      matches: false,
      media: query,
      addListener: function () {},
      removeListener: function () {},
      onchange: null,
    } as unknown as MediaQueryList;
  };
