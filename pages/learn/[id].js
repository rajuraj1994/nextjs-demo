//to get  id in the path

export const getStaticPaths=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await res.json()

   const paths=data.map(book=>{
       return{
           params:{id:book.id.toString()}
       }
   })

    return {
        paths,
        fallback:false
    }
}

//to show details associated with id
export const getStaticProps=async(context)=>{
    const id=context.params.id
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data= await res.json()

    return{
        props:{book:data}
    }

}



const Details = ({book}) => {
    return ( 
        <>
        <h1>{book.name}</h1>
        <p>{book.email}</p>
        <p>{book.website}</p>
        <p>{book.address.city}</p>
        </>
     );
}
 
export default Details;