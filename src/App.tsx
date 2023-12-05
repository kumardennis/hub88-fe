import './App.css';
import { CountriesPage } from 'pages/CountriesPage';
import { ApolloProvider } from '@apollo/client';
import { client } from 'apollo/client';
import { AppHeader } from 'layout/AppHeader';
import ErrorBoundary from 'ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <div className="App">
          <AppHeader />

          <main>
            <CountriesPage />
          </main>
        </div>
      </ApolloProvider>
    </ErrorBoundary>
  );
}

export default App;
