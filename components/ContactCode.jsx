import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'nikhilkumarjain28@gmail.com',
    href: 'mailto:nikhilkumarjain28@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/nikhilkumar-jain2411',
    href: 'www.linkedin.com/in/nikhilkumar-jain2411',
  },
  {
    social: 'GitHub',
    link: 'github.com/Jain-nikhilkumar',
    href: 'https://github.com/Jain-nikhilkumar',
  },
  {
    social: 'Credly by pearson',
    link: 'credly.com/nikhil-jain.09508026',
    href: 'https://www.credly.com/users/nikhil-jain.09508026',
  },
  {
    social:'Google.dev',
    link : 'g.dev/developer2411',
    href : 'https://g.dev/developer2411',
  },
  {
    social: 'Website',
    link: 'gkos.dev',
    href: 'https://nkradha.vercel.app/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>production</a>
        </p>
      <p className={styles.line}>
        <span>Nikhilkumar</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
