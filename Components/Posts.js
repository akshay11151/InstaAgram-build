import { useEffect, useState } from "react"
import Post from "./Post"
import { collection, onSnapshot, query, orderBy } from '@firebase/firestore'
import { db } from '../firebase';

const posts = [{
    id:"123",
    username:"Akshay",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption : "shite",
},
{
    id:"123",
    username:"Akshay",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption : "shite",
},];
function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => 
        onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => {
            setPosts(snapshot.docs);
        }
    ), [db]);
    return (
        <div>
            {posts.map((post) => (
                <Post 
                    key={post.id}  id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                />
            ))}
        </div>
    );
}

export default Posts;
