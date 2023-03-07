import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {
  return(

    <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
    <Post 
    author="João"
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil mollitia sunt laudantium dolores adipisci expedita et, accusamus voluptates distinctio aliquid nulla laborum quisquam perferendis impedit voluptate numquam debitis exercitationem quis.
    "/>
    <Post 
    author="João"
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil mollitia sunt laudantium dolores adipisci expedita et, accusamus voluptates distinctio aliquid nulla laborum quisquam perferendis impedit voluptate numquam debitis exercitationem quis.
    "/>
      </main>
    
    </div>
      
    </div>

  )
}