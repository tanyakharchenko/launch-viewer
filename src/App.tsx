import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUpcomingLaunches } from './store/launches/actions';
import { selectLaunches, selectStatus } from './store/launches/selectors';
import { MemoMap } from './components/Map';
import './App.css';
import { Status } from './store/types';

function App() {
  const dispatch = useDispatch();
  const launches = useSelector(selectLaunches);
  const status = useSelector(selectStatus);

  React.useEffect(() => {
    dispatch(getUpcomingLaunches());
  }, [dispatch]);

  if (status === Status.Loading) {
    return <div>Loading...</div>
  }

  return (
    <MemoMap launches={launches} />
  );
}

export default App;
