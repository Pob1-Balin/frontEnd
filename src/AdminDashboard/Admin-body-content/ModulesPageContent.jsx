import React from "react";
import Footer from '../../ClientsDashboard/components/Footer';
import Module1 from '../../ClientsDashboard/components/Modules';
import Module2 from '../components/Modules';
import "../admin.css";
import { Link } from 'react-router-dom';

function ModulesPageContent(props) {
     const head = props.display;
  return (
    <>
       <main className="px-md-4 wrapper2">
        {head=="admin" ?
        <>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom modulehome">
            <h4 style={{marginTop:'2rem'}}><p><Link className="return-home" style={{textDecoration: 'none'}} to='/services'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span style={{ fontSize: '1.3rem', color: 'gray', fontStyle: 'bold', fontWeight: '550' }}>Modules</span></p></h4>
            <Link className="return-home" style={{textDecoration: 'none'}} to='/addmodule'>
              <div>
                <button className="add-buttons">Add Modules</button>
              </div>
            </Link>
          </div>
          <div style={{marginTop:"2rem"}} className="wrapper3">
             <Module2 image="./images/Cature.png" title="asdfgg" module_name="module1" timePassed="jhjk" score="dfer" />
             <Module2 image="./images/Cature.png" title="asdfgg" module_name="module1" timePassed="jhjk" score="dfer" />
             <Module2 image="./images/Cature.png" title="asdfgg" module_name="module1" timePassed="jhjk" score="dfer" />
             <Module2 image="./images/Cature.png" title="asdfgg" module_name="module1" timePassed="jhjk" score="dfer" />
          </div>
          <Footer destination="/adminlegal" />
        </>
          :
          <>
            <div className="module-resizing-cards justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom modulehome">
              <h1 className="h2" style={{ color: '#0d3360' }}><b>MODULES</b></h1>
            </div>
            <h4 style={{paddingTop:"7px"}}><p><Link className="return-home" style={{ textDecoration: 'none' }} to='/'><span className="home">Home</span></Link> <span className="stroke_color">/</span> <span>Modules</span></p></h4>
            <div style={{marginTop:"2rem"}} className="wrapper3">
               <Module1 image="./images/Cature.png" title="asdfgg" module_name="module1" timePassed="jhjk" score="dfer" />
               <Module1 image="./images/Cature.png" title="asdfgg" module_name="module1" timePassed="jhjk" score="dfer" />
               <Module1 image="./images/Cature.png" title="asdfgg" module_name="module1" timePassed="jhjk" score="dfer" />
               <Module1 image="./images/Cature.png" title="asdfgg" module_name="module1" timePassed="jhjk" score="dfer" />
            </div>
            <Footer destination="/legalnotice" />
          </>
        }
      </main>

    </>
  )
}

export default ModulesPageContent;