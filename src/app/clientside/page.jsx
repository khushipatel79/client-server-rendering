"use client"; 

import { useEffect, useState } from "react";
import Link from "next/link";

const ClientSidePage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      setData(json); 
    } catch (error) {
      console.error("Error fetching client-side data:", error);
    } 
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div style={{ padding: '20px' }}>
      <h1>Client Side Rendering (CSR)</h1>
      <p>The data is fetched and rendered in the user's browser after the component mounts.</p>

      <Link href="/">
        <button style={{ marginBottom: '20px', padding: '8px 15px' }}>
          &larr; Back to Home
        </button>
      </Link>

        <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '10px' }}>ID</th>
              <th style={{ padding: '10px' }}>Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '8px', textAlign: 'center' }}>{item.id}</td>
                <td style={{ padding: '8px' }}>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default ClientSidePage;