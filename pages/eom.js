import React from 'react'

const EOM = ({employee}) => {
  console.log(employee);
  return (
    <div className='page-container'>
      <div className=''>
        <h1>Employee of the Month</h1>

      </div>
    </div>
  )
}

export const getServerSideProps = async pageContext => {
  const apiResponse = await fetch('https://my-json-server.typicode.com/AzriZzz/next-news-app/employeeOfTheMonth');
  const employee = await apiResponse.json();

  return {
    props: {
      employee
    }
  }

}

export default EOM
