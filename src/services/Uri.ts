import RawUriCollection from '../configs/RawUriCollection';
import Interpolate from '../__shared/utils/Interpolate';

interface UriFunctions {
  [key: string]: (data?: Record<string, string>) => string;
}

const Uri: UriFunctions = (() => {
  const ret: UriFunctions = {};
  for (const key in RawUriCollection) {
    if (typeof RawUriCollection[key] === 'string') {
      ret[key] = (data?: Record<string, string>) => {
        if (data) {
          return Interpolate(RawUriCollection[key], data);
        }
        return RawUriCollection[key];
      };
    }
  }
  return ret;
})();

export default Uri;
