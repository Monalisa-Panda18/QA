import React from 'react'
import { Route, Routes } from "react-router-dom";
// import { HomePage } from "../pages/HomePage"
// import { RaectAdvanceConcepts, ReactComponents, ReactHooks, ReactIntroduction, ReactPropsAndStates } from '../pages/react';
import { PageNotFound } from '../components/others/PageNotFound';
import { UnderConsruction } from '../components/others/UnderConsruction';
import {Dwh,InforQuestions,ScenarioBasedQues} from "../pages/informatica"
import { PlSql, QuerryQue, Ques } from '../pages/oracle';
import { ReactForm } from '../pages/other/ReactForm';
import { HomePage } from '../pages/HomePage';
import Contact from '../pages/contact/Contact';



export const AllRoutes = () => {
  return (


    <Routes>
      <Route path='/' Component={HomePage} />
      {/* <Route path='/' Component={QuestionCards}></Route> */}


      {/* path for react submenu */}
      {/* <Route path='/react/introduction' Component={ReactIntroduction}></Route>
      <Route path='/react/component' Component={ReactComponents}></Route>
      <Route path='/react/props' Component={ReactPropsAndStates}></Route>
      <Route path='/react/hooks' Component={ReactHooks}></Route>
      <Route path='/react/advance_concepts' Component={RaectAdvanceConcepts}></Route> */}
     

      {/* path for informatica submenu */}
      <Route path='/informatica/dwh' Component={Dwh}></Route>
      <Route path='/informatica/questions' Component={InforQuestions}></Route>
      <Route path='/informatica/scenario_based_ques' Component={ScenarioBasedQues}></Route>

      {/* path for oracle submenu */}
      <Route path='/oracle/questions' Component={Ques}></Route>
      <Route path='/oracle/query_questions' Component={QuerryQue}></Route>
      <Route path='/oracle/programming_sql' Component={PlSql}></Route>


      


      <Route path='/contact_page' Component={Contact}></Route>

      <Route path='under_maintenance' Component={UnderConsruction}></Route>

      <Route path="*" Component={PageNotFound}/>
    </Routes>

  )
}
