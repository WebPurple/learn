import { css, FlattenSimpleInterpolation } from 'styled-components';
import { Sizes, Medias, WrapStylesInMedia } from './interfaces/css-utils.interfaces';

export const colorGrape = '#432867';
export const colorWarmGrey = '#a1a1a1';
export const colorGreyishBrown = '#545454';
export const colorLipstick = '#e62270';
export const colorVividPurple = '#9012fe';
export const colorVerise = '#ee2a7b';
export const colorWarmPurple = '#662d91';
export const colorRouge = '#b21d3d';
export const colorRosePink = '#f290b7';
export const colorLiliac = '#c788fe';

export const sizes: Sizes = {
  phone: 599,
  tablet: 768,
  desktop: 1200,
  hd: 1800,
};

const wrapStylesInMedia: WrapStylesInMedia = emSize => (...args): FlattenSimpleInterpolation => css`
  @media (min-width: ${emSize}em) {
    ${css(...args)};
  }
`;

export const media: Medias = Object.keys(sizes).reduce<Medias>((accumulator, label) => {
  const emSize = sizes[label] / 16;

  accumulator[label] = wrapStylesInMedia(emSize);
  return accumulator;
}, {});
