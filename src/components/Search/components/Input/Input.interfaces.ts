import { SearchHit } from '../Hit/Hit.interfaces';

interface SearchQuery {
  indexName: string;
  query: string;
  params: {};
}

export type SetSearchQuery = React.Dispatch<React.SetStateAction<SearchQuery>>;

export type GetInputOnChange = (
  setQuery: SetSearchQuery,
  setHits: React.Dispatch<React.SetStateAction<SearchHit[]>>,
) => (event: React.ChangeEvent<HTMLInputElement>) => void;

interface InputProps {
  focus: boolean;
  setQuery: SetSearchQuery;
  query: SearchQuery;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  setHits: React.Dispatch<React.SetStateAction<SearchHit[]>>;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

type InputComponent = React.FC<InputProps>;

export default InputComponent;
