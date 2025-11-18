import Link from "next/link";
import "./server.css"

export default function ServerSidePropsPage({ data }) {
  return (
    <>
      <h1>Server Side Props Page</h1>
      <Link href="/"><button>Back</button></Link>

      <table border="1" style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#2563eb", color: "#fff" }}>
            <th style={{ padding: "10px" }}>ID</th>
            <th style={{ padding: "10px" }}>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{ backgroundColor: "#f9fafb" }}>
              <td style={{ padding: "10px" }}>{item.id}</td>
              <td style={{ padding: "10px" }}>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts"); 
    const data = await res.json();

    return {
      props: { data: Array.isArray(data) ? data : [] },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: [] } }; 
  }
}

