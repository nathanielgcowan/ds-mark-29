import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
    <div>
      <Image 
        src={`/D.png`}
        placeholder='blurDataURL'
        alt='Draw Start Logo'
        width='25'
        height='25' />
    </div> 
    <p data-testid="footer-text">
      <a href="./public/drawstartlogo.png"></a>
      <a href="./public/drawstartlogo.png"></a>
    </p>
    <p data-testid="footer-text">
      © Cowan Media
    </p>
    <div>
      <Link href='/privacy-policy'>
        <a>Privacy Policy</a>
      </Link>{" "}|{" "}
      <Link href='/terms-and-conditions'>
        <a>Terms and Conditions</a>
      </Link>
    </div>
  </footer>
);

export default Footer;
