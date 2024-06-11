
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'


const UserPage = () => {
  return (
    <>
      <UserHeader/>
      <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle="Let's talk about threads."/>
      <UserPost likes={451} replies={12} postImg="/post2.png" postTitle="Hello everyone"/>
      <UserPost likes={100} replies={4} postImg="/post3.png" postTitle="What a guy!"/>
      <UserPost likes={600} replies={251}  postTitle="My first post!"/>
      
    </>
  )
}

export default UserPage
