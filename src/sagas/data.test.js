import {
  put, fork, takeLatest, call,
} from 'redux-saga/effects';
import { GET_DATA_SAGA } from '../actions/types';
import {expectSaga} from 'redux-saga-test-plan';
import { fetchDataSuccess, fetchDataError } from '../actions/dataActions';
import api from '../api';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import {getData} from './data';


describe('Testing Api Call', () => {
  it('testing api call', () => {
    const generator = cloneableGenerator(getData)(fetchDataSuccess)
    expect(generator.next().value).toEqual(call(api.json.getData));
  })
})