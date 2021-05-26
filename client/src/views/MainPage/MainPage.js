import { useEffect, useState } from 'react';
import { sortBy } from 'lodash';
import apiService from 'services/api';
import TextInput from 'components/TextInput';
import Results from 'components/Results';
import Alerts from 'components/Alerts';
import styles from './MainPage.module.scss';

const STOCK_CATEGORY = 'ticker';

function MainPage() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const fetchData = async (value) => {
    setIsLoading(true);

    const nextResults = await apiService.autocomplete(value);
    setResults(nextResults);

    setIsLoading(false);
  };

  useEffect(
    () => {
      if (search) fetchData(search);
    },
    [search]
  );

  const onDisplayAlert = (intent, title, content) => {
    const alertId = Date.now().toString();

    setAlerts([
      ...alerts,
      {
        id: alertId,
        intent,
        title,
        content,
      },
    ]);

    setTimeout(
      () => {
        setAlerts(alerts.filter(alert => alert.id !== alertId))
      },
      3000
    );
  };

  const isStockResult = (result) => result.category === STOCK_CATEGORY;

  const stockResults = results
    .filter(isStockResult)
    .slice(0, 9);

  const sortedResults = sortBy(
    stockResults,
    [(result) => result.label]
  );

  return (
    <div className={styles.container}>
      <TextInput
        inputWidth={400}
        label="Type in stock name:"
        placeholder="Type stock name..."
        value={search}
        onChange={(nextSearch) => setSearch(nextSearch)}
      />
      <section className={styles.results}>
        <Results isLoading={isLoading} results={sortedResults} onDisplayAlert={onDisplayAlert} />
      </section>
      <Alerts alerts={alerts} className={styles.alerts} />
    </div>
  );
}

export default MainPage;
