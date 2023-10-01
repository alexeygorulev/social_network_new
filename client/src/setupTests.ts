import 'regenerator-runtime/runtime'; /* eslint-disable-line */
import '@testing-library/jest-dom';

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
