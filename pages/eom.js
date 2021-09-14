import React from "react";
import Image from "next/image";
import styles from "../styles/EOM.module.css";
import { Navbar } from "../components/Navbar";
import Head from 'next/head'

const EOM = ({ employee }) => {

  return (
    <div>
      <Head>
        <title>Employee Of The Month</title>
        <meta
          name="description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="og:image" content={employee.image} />
        <meta property="og:title" content="Employee Of The Month" />
        <meta
          property="og:description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="twitter:image" content={employee.image} />
        <meta property="twitter:title" content="Employee Of The Month" />
        <meta
          property="twitter:description"
          content={`This month's employee of the month is ${employee.name}`}
        />
      </Head>
    <div className="page-container">
      <Navbar />
      <div className={styles.main}>
        <h1>Employee of the Month</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h4>{employee.position}</h4>
          <img src={employee.image} alt="Profile Image" />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/AzriZzz/next-news-app/employeeOfTheMonth"
  );
  let employee = await apiResponse.json();
  employee.image = `${process.env.HOST}/images/profile_img.png`;

  return {
    props: {
      employee,
    },
  };
};

export default EOM;
