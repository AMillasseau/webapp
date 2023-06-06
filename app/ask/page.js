import Image from 'next/image'
import Link from 'next/link'

import style from 'app/page.module.css'

export default function Home() {
  return (
    <div>
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
          <form>
          <input className={style.ipt} id="name" name="name" type="text" placeholder="Name" autocomplete="off" required/>
          <input className={style.ipt} id="contact" name="contact" type="email" placeholder="Email contact"/>
          <textarea className={style.txta} id="message" name="text" placeholder="Your message" autocomplete="off" rows="12" required></textarea>
          <button className={style.btn} id="btn" type="submit"> Submit </button>
          </form>
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
      <script>
          document.getElementById("btn").onclick = () => {
            const url ="/save.php"
            const name = document.getElementById("name").value;
            const contact = document.getElementById("contact").value;
            const message = document.getElementById("message").value;
            makeRequest(url, name, contact, message);
          };
  function makeRequest(url, userName) {
  // …

  httpRequest.onreadystatechange = alertContents;
  httpRequest.open("POST", url);
  httpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  httpRequest.send(`userName=${encodeURIComponent(userName)}`);
};
</script>
    )
}
