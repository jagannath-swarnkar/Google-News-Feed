import Head from "next/head";
import Navbar from "../Components/Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>Next.js</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
      <link
        rel="icon"
        href="https://cdn0.iconfinder.com/data/icons/ringtone-music-instruments/512/letter-n-latin-key-512.png"
      />
    </Head>
    <div>
      <Navbar />
      {props.children}
    </div>
  </div>
);

export default Layout;
