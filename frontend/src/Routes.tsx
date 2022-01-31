import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import {Switch, Route}  from "react-router-dom";

import { BrowserRouter } from "react-router-dom";

const Routes = () => {
    return (
       <BrowserRouter>
            
            <Switch>
                <Route path= "/" exact>
                    <Home />
                </Route>

                <Route path ="/dashboard">
                    < Dashboard/>
                </Route>

            </Switch>

       </BrowserRouter>
    );
}

export default Routes;