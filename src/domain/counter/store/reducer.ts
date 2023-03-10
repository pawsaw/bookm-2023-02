export const counterFeatureName = 'counter';

export interface CounterState {
  count: number;
}

export const initialCounterState: CounterState = {
  count: 0,
};

export const counterReducer = (state: CounterState = initialCounterState) => {
  return state;
};
