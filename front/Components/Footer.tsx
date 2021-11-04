import Link from "next/link";
import styled from "styled-components";
// import styles from "../styles/Footer.module.css";
// import Logo from "./Logo";
const footerYear = new Date();

const FooterStyles = styled.footer`
  padding: var(--paddingLayout);

    max-width: 1200px;
    display: grid;
    margin: 0 auto;
    grid-gap: 1rem;
   
    @media (min-width: 600px) {
      div {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 900px) {
      .div {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;
export default function Footer() {
  return (
    <FooterStyles>
      <div className='info'>
        <div>
          <h2>ASAL SOLUTIONS LTD</h2>
          <div>
            <svg>
              <use xlinkHref='/assets/sprite.svg#icon-location-pin'></use>
            </svg>
            <span>Taleh Rd, Hodon District, Mogadishu - Somalia</span>
          </div>
          <div>
            <svg>
              <use xlinkHref='/assets/sprite.svg#icon-phone'></use>
            </svg>
            <span>
              <a href='tel:+252852929'>(+252) 852929 </a>or{" "}
              <a href='tel:+252616965458'>(+252) 616965458 </a>
            </span>
          </div>
          <div>
            <svg>
              <use xlinkHref='/assets/sprite.svg#icon-mail'></use>
            </svg>
            <span>
              <a href='mailto:info@asalsolutions.com'>info@asalsolutions.com</a>
            </span>
          </div>
        </div>
        <div>
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
        <div>
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
        <div>
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
      <div>
        <ul>
          <li>
            <a href='https://github.com/asalsolutions'>
              <svg>
                <use xlinkHref='/assets/sprite.svg#icon-github-with-circle'></use>
              </svg>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/asalsolutions'>
              <svg>
                <use xlinkHref='/assets/sprite.svg#icon-twitter-with-circle'></use>
              </svg>
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/asalsolutions'>
              <svg>
                <use xlinkHref='/assets/sprite.svg#icon-facebook-with-circle'></use>
              </svg>
            </a>
          </li>
          {/* <li>
            <a>
              <svg className={styles.socialIcon}>
                <use xlinkHref="/assets/sprite.svg#icon-linkedin-with-circle"></use>
              </svg>
            </a>
          </li> */}
        </ul>
      </div>
      <div>
        <p>
          © 2007 - {footerYear.getFullYear()} <a>Asal Solutions</a>. All Rights
          Reserved.
        </p>
      </div>
    </FooterStyles>
  );
}
