import React from 'react';
import PoweredBy from '../PoweredBy/PoweredBy.component';
import HitsWrapperComponent from './HitsWrapper.interfaces';
import Hit from '../Hit';
import {
  HitsWrapperAnchor,
  HitsWrapperFrame,
  HitsWrapperUl,
  HitsWrapperLi,
  HitsWrapperContainer,
} from './HitsWrapper.styles';

const HitsWrapper: HitsWrapperComponent = ({ hits }) => {
  return (
    <HitsWrapperAnchor>
      <HitsWrapperContainer>
        <HitsWrapperFrame>
          <HitsWrapperUl>
            {hits.map((hit, i) => (
              <HitsWrapperLi key={`hit${i}`}>
                <Hit {...hit} />
              </HitsWrapperLi>
            ))}
          </HitsWrapperUl>
          <PoweredBy />
        </HitsWrapperFrame>
      </HitsWrapperContainer>
    </HitsWrapperAnchor>
  );
};

export default HitsWrapper;
