import './global.css'
import Image from 'next/image'
import Background from '@/images/background.jpeg'

export const metadata = {
  title: 'Next.js Todo App',
  description: 'Next.js Todo App, Gökhan Demir',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body id='top'>
        <div className='backgroundContainer'>
          <Image src={Background} alt='todo app' placeholder="blur" blurDataURL={'../images/background.jpeg'} fill />
        </div>
        {children}
      </body>
    </html>
  )
}
