function createLocalStorage(key = 'historyItems') {
  function setState(state) {
    window.localStorage.setItem(
      key,
      JSON.stringify(state)
    );
  }

  function getState() {
    return JSON.parse(window.localStorage.getItem(key));
  }

  function updateState(partialState) {
    setState({
      ...getState(),
      ...partialState
    });
  }

  function clearState() {
    window.localStorage.removeItem(key);
  }

  return {
    setState,
    getState,
    updateState,
    clearState
  };
}

export default createLocalStorage;