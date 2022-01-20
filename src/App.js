import './App.css';
import AddTransection from './components/AddTransection';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpences from './components/IncomeExpences';
import TransectionList from './components/TransectionList';
import { GolbalProvider } from './context/GloalState';
function App() {
  return (
    <GolbalProvider>
      <Header/>
      <div className='container'>
      <Balance/>
      <IncomeExpences/>
      <TransectionList/>
      <AddTransection/>
      </div>
    </GolbalProvider>
  );
}

export default App;
