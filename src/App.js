import DefaultLayout from "./Components/DefaultLayout";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {publicRouter} from '../src/route'
import { Fragment } from "react";
function App() {
  return (
    <div className="wrapper-app">
        <Router>
          <Routes>
                {publicRouter.map((item,index) => {
                let Page = item.compoment
                let Layout = DefaultLayout
                  if(item.layout){
                    Layout = item.layout
                } else if(item.layout === null){
                  Layout = Fragment
                }
                return <Route key={index} path={item.to} element ={<Layout><Page/></Layout>}/>
              })}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
