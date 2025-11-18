import Link from "next/link";
import "./globals.css" 

const page = () => {
  return (
    <>
      <h1>rendering</h1>
      <Link href="/clientside"><button>client</button></Link>
      <Link href="/serverside"><button>server</button></Link>
    </>
  )
}

export default page
