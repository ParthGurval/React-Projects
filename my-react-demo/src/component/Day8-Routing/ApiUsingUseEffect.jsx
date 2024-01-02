import axios from 'axios'
import React,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
    

const ApiUsingUseEffect = () => {
 
    const [postData, setPostData] = useState([])

    useEffect(()=>{

        const getPostData = async()=>{

            try {
                    const result = await axios.get("https://jsonplaceholder.typicode.com/comments")
                    setPostData(result.data)
            } catch (error) {
                console.log(error);
            }
        }
            getPostData()
        
    })

    return (
    <>
        <h1>React Table For API Integration</h1>

        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {postData.map(post=>(

            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.email}</td>
                <td>{post.body}</td>
            </tr>
        ))}
      </tbody>
    </Table>

    </>
  )
}

export default ApiUsingUseEffect
