import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar.js";
import Footer from "../comps/Footer.js";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.title}>
        <h1 className={styles.text}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          suscipit alias quis cupiditate blanditiis assumenda, magnam minima?
          Optio animi, aperiam aspernatur, ipsum quam quisquam esse porro nam
          nisi, beatae commodi?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </Fragment>
  );
}
