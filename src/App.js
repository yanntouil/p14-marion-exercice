import { Route, Switch } from "wouter"
import Layout from "./components/layout"
import CreateUser from "./pages/create-user"
import Homepage from "./pages/home"
import { Provider } from 'react-redux'
import store from "./store"


const App = () => {
  return <>
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route path="/create-user" component={CreateUser} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Layout>
    </Provider>
  </>
}


export default App
