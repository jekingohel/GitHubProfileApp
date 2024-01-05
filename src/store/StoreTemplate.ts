/**
 * Represents the action object for a container action.
 * @template TState - The state type.
 * @template TPayload - The payload type.
 */
type ContainerAction<TState, TPayload> = {
  type: string;
  payload?: TPayload;
};

/**
 * Represents a container of reducer functions.
 * @template TState - The state type.
 * @template TPayload - The payload type.
 */
type Container<TState, TPayload = any> = {
  [key: string]: (state: TState, payload?: TPayload) => TState;
};

/**
 * A template function to create a Redux store reducer.
 * @template TState - The state type.
 * @template TPayload - The payload type.
 * @param {TState} defaultState - The default state of the store.
 * @param {Container<TState, TPayload>} container - The container of reducer functions.
 * @returns {(state: TState, action: ContainerAction<TState, TPayload>) => TState} - The store reducer function.
 */
const StoreTemplate = <TState, TPayload>(
  defaultState: TState,
  container: Container<TState, TPayload>,
) => {
  return (
    state: TState = defaultState,
    action: ContainerAction<TState, TPayload>,
  ) => {
    if (typeof container[action.type] === 'function') {
      return container[action.type](state, action.payload);
    }
    return state;
  };
};

export default StoreTemplate;
