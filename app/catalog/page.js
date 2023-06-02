import Image from 'next/image'
import Link from 'next/link'

import style from 'app/page.module.css'

export default function Home() {
  return (
    <main className={style.main}>
  
      <div className={style.head}>
        <p> Website of Arena </p>
        <div className={style.logo}>
          <Image 
            src="/logo.png"
            width={50}
            height={50}
            alt="Arena's logo"
          />
        </div>
      </div>

      <div className={style.center}>
        
        
        
      </div>

      <div className={style.tail}>
        
      </div>
    
      </main>
    )
}
