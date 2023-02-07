import { Header } from './components/Header'
import './global.css'

import style from './App.module.css'

export function App() {
  return(
    <div>
    <Header />

    <div className={style.wrapper}>
      <aside>
        sidebar
      </aside>
      <main></main>
    </div>
      
    </div>
  )
}