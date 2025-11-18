import axios from "axios"
import  Link  from "next/link"

const serverPage = async() => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const data = res.data
  return (
    <>
        <h1>server page</h1>
        <Link href="/"><button>back</button></Link>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((item , index)=>(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default serverPage
