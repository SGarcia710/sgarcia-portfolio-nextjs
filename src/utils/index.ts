import _ from 'lodash';
import { window } from 'browser-monads';

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const changeExtension = (url: string | undefined, extension: string) => {
  const extension_index = url?.lastIndexOf('.');
  url = url?.substring(0, extension_index);
  url += `.${extension}`;
  return url;
};

type GetResizedURLProps = {
  to?: string;
  tag?: string;
  dpr?: number;
  blur?: number;
  width?: number;
  fill?: boolean;
  height?: number;
  quality?: 'auto';
  scale?: boolean;
};

const getResizedURL = (url: string, options: GetResizedURLProps): string => {
  if (options.to) {
    url = changeExtension(url, options.to)!;
  }
  const paths = _.split(url, '/');
  let params: string[] = [];

  if (options.tag) {
    params.push(options.tag);
  }
  if (options.width) {
    params.push(`w_${Math.floor(options.width)}`);
  }
  if (options.height) {
    params.push(`h_${Math.floor(options.height)}`);
  }
  if (options.fill) {
    params.push('c_fill');
  }
  if (options.scale) {
    params.push('c_scale');
  }
  if (options.quality) {
    params.push(`q_${options.quality}`);
  }
  if (options.blur) {
    params.push(`e_blur:${options.blur}`);
  }
  if (options.dpr) {
    params.push(`dpr_${options.dpr}`);
  }

  const newUrl = paths
    .reduce((acc: any, item) => {
      if (item == 'upload') {
        acc = acc.concat(['upload', ...params]);
        return acc;
      }
      acc = acc.concat(item);
      return acc;
    }, [])
    .join('/');

  return newUrl;
};

const readingTime = ({
  text,
  wordCount = 0,
  lang = 'en',
}: {
  text?: string;
  wordCount?: number;
  lang?: 'es' | 'en';
}): string => {
  const wordsPerMinute = 200;
  const noOfWords = text ? text.split(/\s/g).length : wordCount;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  let singular;
  let plural;

  switch (lang) {
    case 'es':
      singular = 'minuto de lectura';
      plural = 'minutos de lectura';
      break;
    default:
      singular = 'min read';
      plural = 'min read';
      break;
  }

  return readTime === 1 ? `${readTime} ${singular}` : `${readTime} ${plural}`;
};
const isMobile = window.innerWidth <= 818 ? true : false;

export { fetcher, changeExtension, getResizedURL, readingTime, isMobile };
