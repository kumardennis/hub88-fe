import debounce from 'lodash.debounce';

export const debounceFetchCall = (
  FetchRequestMethod: () => Promise<unknown>
): (() => void) => {
  const debouncedCall = debounce(() => {
    FetchRequestMethod();
  }, 900);

  return debouncedCall;
};
