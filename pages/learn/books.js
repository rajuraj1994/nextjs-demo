import Head from "next/head";
import Image from "next/image";
import Link from "next/link"
export const getStaticProps=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json()

    return {
        props:{books:data}
    }
}


const Book = ({books}) => {
    return (
        <>
        <Head>
        
            <title>Books</title>
        
        </Head> 
        <div>
            <h2>Welcome to Learning Section</h2>
            <Image src="/images/a.jpg" height="300" width="500"></Image>
        </div>
        {books.map(book=>(
            <Link key={book.id} href={`/learn/${book.id}`}>
                <a><h3>{book.name}</h3></a>
            </Link>
        ))}
        </>
     );
}
 
export default Book;