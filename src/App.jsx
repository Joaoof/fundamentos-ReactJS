import { Header } from './components/Header'
import './global.css'

import style from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return(
    <div>
    <Header />


    <div className={style.wrapper}>
      <Sidebar />
      <main></main>
    </div>
      
    </div>
  )
}