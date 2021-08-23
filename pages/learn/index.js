import Image from "next/image";

const Home = () => {
    return ( 
        <> 
        <div>
            <h1>this page will automatically open when we write learn</h1>
        </div>
         <div className="container">
        
         <div className="row row-cols-1 row-cols-md-4 g-4">
     <div className="col">
       <div className="card">
        <Image src="/images/a.jpg" height="300" width="500" className="img-fluid"></Image>
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           
         </div>
       </div>
     </div>
     <div className="col">
       <div className="card">
       <Image src="/images/b.jpg" height="300" width="500" className="img-fluid"></Image>
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           
         </div>
       </div>
     </div>
     <div className="col">
       <div className="card">
       <Image src="/images/c.jpg" height="300" width="500" className="img-fluid"></Image>
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           
         </div>
       </div>
     </div>
     <div className="col">
       <div className="card">
       <Image src="/images/d.jpg" height="300" width="500" className="img-fluid"></Image>
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           
         </div>
       </div>
     </div>
   </div>
   </div>
   </>
    );
}
 
export default Home;