import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Joaoof.png',
      name: 'João de Deus',
      role: 'CTO @ Rocketseat'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 <a href="">jane.design/doctorcare'},
      
    ],

    publisedAt: new Date('2023-03-08 05:58')

  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Joaoof.png',
      name: 'Jão1',
      role: 'Web'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 <a href="">jane.design/doctorcare'},
      
    ],

    publisedAt: new Date('2023-03-18 05:58')

  },
];

export function App() {
  return(

    <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      {posts.map(post => {
        return <Post />
      })}
      </main>
    
    </div>
      
    </div>

  )
}