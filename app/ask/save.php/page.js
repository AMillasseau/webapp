<?php
$ar = [$_GET["name"],$_GET["contat"],$_GET["message"] 

 $fname = 'data.csv'; //NAME OF THE FILE
 $fcon = fopen($fname,'a');
 $fputcsv($con,$ar);
 fclose($fcon);
 ?>

import Image from 'next/image'
import Link from 'next/link'

import style from 'app/page.module.css'

export default function Home() {
  return (
    <div>
   <?php
$ar = [$_GET["name"],$_GET["contat"],$_GET["message"] 
 $fname = 'data.csv'; //NAME OF THE FILE
 $fcon = fopen($fname,'a');
 $fputcsv($con,$ar);
 fclose($fcon);
 ?>
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
