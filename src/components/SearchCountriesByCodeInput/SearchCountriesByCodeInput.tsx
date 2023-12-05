import { useRef } from 'react';
import './styles.css';
import { DebouncedFunc } from 'cypress/types/lodash';

type PropTypes = {
  handleQueryChange: DebouncedFunc<(query: string) => Promise<void>>;
};

export const SearchCountriesByCodeInput = ({
  handleQueryChange,
}: PropTypes) => {
  const localInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = async () => {
    await handleQueryChange(localInputRef.current?.value ?? '');
  };

  return (
    <input
      ref={localInputRef}
      onChange={handleInputChange}
      className="search-countries-by-code-input"
      placeholder="Search..."
      aria-label="search-countries-by-code-input"
      maxLength={2}
      autoFocus
      role="search-countries-by-code"
    />
  );
};
