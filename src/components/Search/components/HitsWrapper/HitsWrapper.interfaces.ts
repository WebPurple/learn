import { SearchHit } from '../Hit/Hit.interfaces';

interface HitsWrapperProps {
  hits: SearchHit[];
}

type HitsWrapperComponent = React.FC<HitsWrapperProps>;

export default HitsWrapperComponent;
