import React, { ReactNode } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Header } from '../Header'
import { GlobalStyle } from '../Globals'

import { isURL, isComponent } from './NavItem'

export interface RouterProps {
  routes: RouteProps[],
}

export interface RouteProps {
  path?: string,
  url?: string,
  element?: ReactNode,
  title: string,
  description: string
}

const Router = (props: RouterProps) => {

  const mapRoute = (i: RouteProps, id: number): JSX.Element | null => {
    return isComponent(i) ? <Route key={id} path={i.path} element={i.element} /> : null
  }

  return (<>
    <HashRouter>
      <GlobalStyle />
      {props.routes && <Header {...props} />}
      <Routes>
        {props.routes && props.routes.map(mapRoute)}
      </Routes>
    </HashRouter>

  </>
  )
}


export { Router }