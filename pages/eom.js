import React from 'react'

const EOM = ({employee}) => {
  return (
    <div className='page-container'>
      <div className=''>
        <h1>Employee of the Month</h1>
      </div>
    </div>
  )
}

export const getServerSideProps = async pageContext => {
  const apiResponse = await fetch('https://my-json-server.typicode.com/AzriZzz/next-news-app');
  const employee = await apiResponse.json();

  return {
    props: {
      employee
    }
  }

}

export default EOM
