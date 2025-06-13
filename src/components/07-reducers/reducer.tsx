// A reducer is like a special function that takes your current state and action then returns a new state. its useful when you have complex state logic with multiple ways to update the same data
// basic

// Define what state looks like
export type CounterState = {
    count: number;
    status: string;
}

// storing state
export const initialState: CounterState = {
    count: 0,
    status:'pending...'
}
type UpdateAction = {
    type: 'increment'|'decrement'|'reset'
}
type SetStatusAction = {
    type: 'setStatus';
    payload: 'active' | 'inactive';

}
type CounterAction = UpdateAction | SetStatusAction
// reducer function
export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    case 'setStatus':
      return { ...state, status: action.payload };
    default:
      const unhandledActionType: never = action;
      throw new Error(
        `Unexpected action type: ${unhandledActionType}. Please double check the counter reducer.`
      );
  }
};

