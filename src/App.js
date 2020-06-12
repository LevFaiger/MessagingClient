import React,{useReducer,useCallback,useEffect} from 'react';
import 'semantic-ui-css/semantic.min.css';
import Menu from './Components/Menu'

export const initialState = {Users: []}
export const MessagingContext = React.createContext(null);
export const actions = { setUsers: "setUsers"}
export const MessagingReducer = (state, action) => {
    switch (action.type) {
        case actions.setUsers: {
            return { ...state, Users: action.payload }
        }
        default:
            return state;
    }
}

function App() {
  const [state, dispatch] = useReducer(MessagingReducer, initialState);

  const fetchMyAPI = useCallback(async () => {
  
    let response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/users`,{
    method: "GET",
    headers: {
      "Accept": "application/json"
    }});
    response = await response.json();
    dispatch({ type: actions.setUsers, payload: response.data })
  }, [])

  useEffect(() => {
    fetchMyAPI()
  }, [fetchMyAPI]);
  return (
    <MessagingContext.Provider value={{state,dispatch}}>
      <Menu></Menu>
    </MessagingContext.Provider>
  );
}
export default App;
