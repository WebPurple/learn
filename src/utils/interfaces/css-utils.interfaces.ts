import { CSSObject, SimpleInterpolation, FlattenSimpleInterpolation } from 'styled-components';

export interface Sizes {
  [label: string]: number;
}

export interface Medias {
  [label: string]: (
    ...args: [CSSObject | TemplateStringsArray, ...SimpleInterpolation[]]
  ) => FlattenSimpleInterpolation;
}

export type WrapStylesInMedia = (
  emSize: number,
) => (first: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => FlattenSimpleInterpolation;
