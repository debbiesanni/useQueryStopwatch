import { useRef } from 'react';
import {useQuery} from 'react-query';
import './App.css';

//stopwatch in minutes in minute

function StopWatch() {
    function createStopwatch(){
        const startTime = Date.now()
        return ()=> {
        return (Date.now() - startTime)/ (60*1000)
        
        }

    }

    const timeRef = useRef(createStopwatch());


    const {data:time} = useQuery('stopwatch', timeRef.current, {
        refetchInterval: 60000
    });

  return (
    <>
      <header className="App-header">
        <h1>Stopwatch</h1>
      </header>
      <div><h3>{time}</h3></div>
    </>

  );
}

export default StopWatch;
