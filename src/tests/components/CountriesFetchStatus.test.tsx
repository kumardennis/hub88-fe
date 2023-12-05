import React from 'react';
import { render, screen } from '@testing-library/react';
import { ApolloError, NetworkStatus } from '@apollo/client';
import { CountriesFetchStatus } from 'components/CountriesFetchStatus/CountriesFetchStatus';

describe('CountriesFetchStatus', () => {
  it('renders loading message when loading', () => {
    render(
      <CountriesFetchStatus
        networkStatus={NetworkStatus.ready}
        loading={true}
        error={undefined}
      />
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    const testError = new ApolloError({
      errorMessage: 'Test error message',
      networkError: new Error('Test error message'),
    });
    render(
      <CountriesFetchStatus
        networkStatus={NetworkStatus.error}
        loading={false}
        error={testError}
      />
    );
    expect(
      screen.getByText(/Error! : Test error message/i)
    ).toBeInTheDocument();
  });

  it('renders fetching message during refetch', () => {
    render(
      <CountriesFetchStatus
        networkStatus={NetworkStatus.refetch}
        loading={false}
        error={undefined}
      />
    );
    expect(screen.getByText(/Fetching!/i)).toBeInTheDocument();
  });

  it('renders nothing when not loading, no error, and not refetching', () => {
    const { container } = render(
      <CountriesFetchStatus
        networkStatus={NetworkStatus.ready}
        loading={false}
        error={undefined}
      />
    );
    expect(container.firstChild).toBeNull();
  });
});
