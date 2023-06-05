import Image from 'next/image'
import Link from 'next/link'

import style from 'app/page.module.css'

export default function Home() {
  return (
    <main className={style.main}>
  
      <div className={style.head}>
        <div className={style.notwide}>
          <p> Website of Arena </p>
          <div className={style.logo}>
            <Image 
              src="/logo.png"
              width={100}
              height={100}
              alt="Arena's logo"
            />
          </div>
        </div>
      </div>

      <div className={style.center}>
        <input className={style.ipt} id="name" type="text" placeholder="Name" autocomplete="off"/>
        <input className={style.ipt} id="contact" type="email" placeholder="Email contact"/>
        <textarea className={style.ipt} id="text" placeholder="Your request" autocomplete="off" rows="5"></textarea>
        <button className={style.btn} id="submit"> Submit </button>
      </div>

      <div className={style.tail}>
        <div className={style.notwide}>
          <a className={style.a} href="/credits"> Credits </a>
          <p> • </p>
          <a className={style.a} href="/ask"> Ask us </a>
        </div>
      </div>
    
      </main>
    )
}
