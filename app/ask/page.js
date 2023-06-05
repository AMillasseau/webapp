import Image from 'next/image'
import Link from 'next/link'

import style from 'app/page.module.css'

export default function Home() {
  return (
    <div>
    <script type="text/javascript" src="pages/api/examples.js">
    function addToCSV() {
        var string1 = document.getElementById('s1').value;
        var string2 = document.getElementById('s2').value;
        var string3 = document.getElementById('s3').value;
        string3.replace(/,/g, ' ');
        const data = string1 + ',' + string2 + ',' + string3 + '\n';
        fs.writeFile('data.csv','name,email,message', 'utf8', (err) => (null));
        fs.appendFile('data.csv', data, (err) => (null));
    }
    
    </script>

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
          <div style={{paddingBottom: '10px'}} className={style.backarrow}>
            <a href="../">
            <Image 
              src="/backarrow.png"
              alt="Back"
              width={30}
              height="auto"
              priority
            />
            </a>
          </div>
          <input className={style.ipt} id="s1" name="name" type="text" placeholder="Name" autocomplete="off" required/>
          <input className={style.ipt} id="s2" name="contact" type="email" placeholder="Email contact"/>
          <textarea className={style.txta} id="s3" name="text" placeholder="Your message" autocomplete="off" rows="12" required></textarea>
          <button className={style.btn} onclick="addToCSV();"> Submit </button>
        
        <button className={style.btn} > Test </button>
      </div>

      <div className={style.tail}>
        <div className={style.notwide}>
          <a className={style.a} href="/credits"> Credits </a>
          <p> • </p>
          <a className={style.a} href="/ask"> Ask us </a>
        </div>
      </div>
    
      </main>
      </div>
    )
}
