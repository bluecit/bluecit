import styles from "../styles/Services.module.css";
export default function Services() {
  return (
    <div className={styles.services}>
      <h1>Our Services</h1>
      <div className='container'>
        <div className={styles.cardbox}>
          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <span className='material-icons'>api</span>
            </div>
            <div className={styles.cardRight}>
              <h2>
                <span>Software</span> Solutions
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus libero similique tenetur! Officiis ut ipsum, commodi
              </p>
              <a className='btn'> Learn More</a>
            </div>
          </div>
          {/* Web  */}
          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <span className='material-icons'>public</span>
            </div>
            <div className={styles.cardRight}>
              <h2>
                <span>Web</span> Solutions
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus libero similique tenetur! Officiis ut ipsum, commodi
              </p>
              <a className='btn'> Learn More</a>
            </div>
          </div>
        </div>
        {/* Network */}
        <div className={styles.cardbox}>
          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <span className='material-icons'>signal_cellular_alt</span>
            </div>
            <div className={styles.cardRight}>
              <h2>
                <span>Network</span> Solutions
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus libero similique tenetur! Officiis ut ipsum, commodi
              </p>
              <a className='btn'> Learn More</a>
            </div>
          </div>

          {/* Consulting */}

          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <span className='material-icons'>business_center</span>
            </div>
            <div className={styles.cardRight}>
              <h2>
                <span>Consulting</span> Solutions
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus libero similique tenetur! Officiis ut ipsum, commodi
              </p>
              <a className='btn'> Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
