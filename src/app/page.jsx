import Link from "next/link";

const HomePage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Choose Rendering Type</h1>
      <p>Click a button to see how Next.js fetches and renders data.</p>
      <div style={{ margin: '20px 0' }}>
        <Link href="/clientside">
          <button style={{ 
            padding: '10px 20px', 
            marginRight: '15px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}>
            Client Side
          </button>
        </Link>

        <Link href="/serverside">
          <button style={{ 
            padding: '10px 20px', 
            backgroundColor: '#008CBA', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}>
            Server Side
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;