<?php
// Retrieve the request data
$name = $_POST['name'];
$email = $_POST['email'];

// Perform any necessary operations or validations

// Prepare the response data
$response = [
    'message' => 'Received the following data:',
    'name' => $name,
    'email' => $email
];

// Set the response headers
header('Content-Type: application/json');

// Send the response as JSON
echo json_encode($response);
?>

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
