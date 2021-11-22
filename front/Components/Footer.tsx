import Link from "next/link";
import * as React from "react";
import { FooterStyles } from "@/styles/FooterStyles";
import {
  TwitterWithCircle,
  FacebookWithCircle,
  GithubWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social/";
import { FacebookCircle } from "@styled-icons/boxicons-logos";
import { somaliMessage, globalMessage } from "@/utils/getDay";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const countryData = await res.json();
  console.log(countryData);

  return {
    props: { countryData },
  };
}

const footerYear = new Date();
export default function Footer({ countryData }) {
  const [countMessage, setCountMessage] = React.useState(0);
  const messages = [globalMessage, somaliMessage];

  // React.useEffect(() => {
  //   setInterval(() => {
  //     let currentIdx = countMessage;
  //     setCountMessage(currentIdx + 1);
  //   }, 5000);
  // }, []);

  console.log(countryData);
  // let textThatChanges = messages[countMessage % messages.length];

  return (
    <FooterStyles>
      <div className='footer'>
        <div className='footerAddress'>
          <h2>BlueCIT Logo</h2>
        </div>
        <div className='footerMenu'>
          <ul>
            <h4>About</h4>
            <li>
              <a>Companay</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
        <div className='footerMenu'>
          <ul>
            <h4>Products</h4>
            <li>
              <a>Companay</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
        <div className='footerMenu'>
          <ul>
            <h4>Insights</h4>
            <li>
              <a>Companay</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='social'>
        <ul>
          <li>
            <a href='https://github.com/bluecit'>
              <GithubWithCircle size='50' />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/BlueCIT_'>
              <TwitterWithCircle size='50' />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/Bluecit.io'>
              <FacebookWithCircle size='50' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/bluecit_io'>
              <InstagramWithCircle size='50' />
            </a>
          </li>
        </ul>
      </div>
      <div className='copyright'>
        <span className='fade-in'>{globalMessage}</span>
        <br />
        <span className='fade-out'>{somaliMessage}</span>
      </div>
      <div className='copyright'>
        <p>
          © 2018 - {footerYear.getFullYear()} <span>BlueCIT</span>. All Rights
          Reserved.
        </p>
      </div>
    </FooterStyles>
  );
}
