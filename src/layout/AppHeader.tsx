import logo from '../logo.svg';

export const AppHeader = (): JSX.Element => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <div className="App-header-text">
      <span aria-label="App-header-title" className="App-header-title">
        Hub88 - FE
      </span>
      <small aria-label="App-header-subtitle" className="App-header-subtitle">
        Consume countries graphql api
      </small>
    </div>
  </header>
);
