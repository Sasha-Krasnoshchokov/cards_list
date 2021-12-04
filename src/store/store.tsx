import { createStore } from 'redux';
import { state } from './initials';
import { reducer } from './reducer';

export const store = createStore(reducer, state);