import React from "react";
import {withRouter} from 'react-router-dom';
import HomeBar from '../components/HomeBar.js';
import Head from '../components/Head.js';
import Apply from "../components/Apply.js";
import "../utils/Config";
import '../css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/responsive.css';

class ManageView extends React.Component{
    render(){
        return(
            <body>
         <Head />
         <section>
             <div className="container"> 
                <div className="row">
                    <HomeBar />
                    <div class="col-sm-9 padding-right" >
                        <div class="features_items">  
                          <Apply />
                        </div>             
                    </div>        
                </div>
               
             </div>
            
         </section>
        
        </body>
        );
    }
}

export default withRouter(ManageView);

