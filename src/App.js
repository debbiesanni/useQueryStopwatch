import {QueryClientProvider, QueryClient} from 'react-query';
import StopWatch from './stopwatch';
import './App.css';

function App() {
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <StopWatch/>
    </div>      
    </QueryClientProvider>

  );
}

export default App;
