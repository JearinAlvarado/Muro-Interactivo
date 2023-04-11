import './Publicaciones.css'
import { Post } from '../Post/Post'

export function Publications({posts}){


    return(
        <div className='containerpost'>
            {
                posts.map((post)=>(
                    <Post key={post.creado} post={post}/>
                ))
            }
        </div>
    )
}