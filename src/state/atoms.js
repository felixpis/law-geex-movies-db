import { atom } from "recoil";

export const moviesState = atom({
  key: 'moviesState',
  default: []
})

export const queryState = atom({
  key: 'queryState',
  default: ''
})

export const selectedYearState = atom({
  key: 'selectedYearState',
  default: ''
})

