import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

import style from 'app/page.module.css'

export default function Home() {
  function createCSV() {
    const string1 = document.getElementById('s1').value;
    const string2 = document.getElementById('s2').value;
    const string3 = document.getElementById('s3').value;

    try {
      const response = await fetch('/api/create-csv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ string1, string2, string3 })
      });

      if (response.ok) {
        console.log('CSV file created successfully.');
      } else {
        console.error('Failed to create CSV file.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

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
          <input className={style.ipt} id="s1" name="name" type="text" placeholder="Name" autocomplete="off" required/>
          <input className={style.ipt} id="s2" name="contact" type="email" placeholder="Email contact"/>
          <textarea className={style.txta} id="s3" name="text" placeholder="Your message" autocomplete="off" rows="12" required></textarea>
          <button className={style.btn} onClick={createCSV}> Submit </button>
          
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
