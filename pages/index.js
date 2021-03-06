import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div>
          <h1>This is a Homepage</h1>
          <p>m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</p>
        </div>

      </main>
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
   
      
    </div>
  )
}
