import MainPage from 'views/MainPage';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>
          TipRanks Technical Web Interview - AutoComplete
        </h1>
      </header>
      <main className={styles.main}>
        <MainPage />
      </main>
    </div>
  );
}

export default App;
