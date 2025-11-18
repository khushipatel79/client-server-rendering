import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ServerSidePage() {
  const data = await getData();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Server Side Rendering (SSR)</h1>
      <p>The data was fetched and the HTML was generated on the Next.js server.</p>

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
}