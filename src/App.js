import {useEffect, useState} from 'react';
//Components
import InfectedAll from './InfectedAll';
import InfectedToday from './InfectedToday';
import RecoveredAll from './RecoveredAll';
import DeathsAll from  './DeathsAll';
import TestsAll from './TestsAll';
import TestsToday from './TestsToday';
import DeathsToday from './DeathsToday';
import RecoveredToday from './RecoveredToday';
import ActiveCases from './ActiveCases';
import axios from 'axios';

const App = () => {
  const [chartData, setChartData] = useState([]);

  const fetchData = async () => {
    try {
      let response = await axios.get('https://covid19-azerbaijan.ahmcho.com/api/cases/all');
      setChartData(response.data);
      localStorage.setItem('data', JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() =>{
    if(localStorage.getItem('data') === null){
      fetchData();
    } else {
      setChartData(JSON.parse(localStorage.getItem('data')));
    }
  },[]);

  return(
    <>
      <InfectedAll data={chartData} />
      <InfectedToday data={chartData} />
      <RecoveredAll data={chartData} />
      <RecoveredToday data={chartData} />
      <ActiveCases data={chartData} />
      <DeathsAll data={chartData} />
      <DeathsToday data={chartData} />
      <TestsAll data={chartData} />
      <TestsToday data={chartData} />
    </>
  )
}

export default App;
