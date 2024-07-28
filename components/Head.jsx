import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Jain Nikhilkumar's Profolio."
      />
      <meta
        name="keywords"
        content="Jain Nikhilkumar, Jain, Nikhilkumar, FLutter Developer portfolio, machine learning engineer, Nikhilkumar Jain's portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Jain Nikhilkumar's Portfolio" />
      <meta
        property="og:description"
        content="Jain Nikhilkumar's Portfolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://gkos.dev" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Jain Nikhilkumar',
};
