import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import style from './App.module.css'

import './global.css'

export function App() {
  return(
    <div>
    <Header />


    <div className={style.wrapper}>
      <Sidebar />
      <main>
    <Post />

      </main>
    </div>
      
    </div>
  )
}