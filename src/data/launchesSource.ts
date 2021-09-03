import {apiService} from './api';

// TODO: Add interfaces for data
export const getLaunches = () => apiService('launch/upcoming/?format=json');