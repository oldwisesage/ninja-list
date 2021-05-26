import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar.js";
import Footer from "../comps/Footer.js";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        suscipit alias quis cupiditate blanditiis assumenda, magnam minima?
        Optio animi, aperiam aspernatur, ipsum quam quisquam esse porro nam
        nisi, beatae commodi?
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
