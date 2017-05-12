import { debug } from './_dev';
import './_load';
import './_cover';

if (process.env.NODE_ENV !== 'production') {
  debug({
    skipCover: false
  });
}
