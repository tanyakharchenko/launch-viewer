import { Store } from '../types';

export const selectLaunches = ({ launches }: Store) => launches.items;
export const selectStatus = ({ launches }: Store) => launches.status;
