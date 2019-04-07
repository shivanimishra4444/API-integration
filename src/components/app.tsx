import * as React from 'react'
import SiteList from './SiteList'
class App extends React.Component<any, {}> {
  public render() {
    return (
      <div className="text-center">
        <h1>Welcome to Cobiro sites</h1>
        <SiteList />
      </div>
    )
  }
}

export default App
