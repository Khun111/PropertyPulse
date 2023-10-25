import Head from "./Header.module.css"


export default function Home() {
  return (
    <About/>
  )
}

const About = () => {
  return (
    <section className={Head.wrapper}>
      <div className="grid grid-cols-2 gap-1 text-sm">
        <div className=" bg-black text-white"><p>About</p></div>
        <div className="bg-black text-white">
          <h3>We&#39;ve found luxury homes for clients for a decade.</h3>
          <p>We take great pride in ensuring the satisfaction of our customers, which is why we guarantee that the products we sell will bring happiness to each and every customer. Our genuine care for customer satisfaction is what sets us apart.</p></div>
      </div>
      <div className="bg-black text-white">
        <p className="">We take great pride in ensuring the satisfaction of our customers. That&#39;s why we proudly guarantee the quality and reliability of our products.</p>
      </div>
      <div className=" bg-black text-white">
        <div>
          <h3>10 +</h3>
          <p>Awards Gained</p>
        </div>
        <div>
          <h3>20 +</h3>
          <p>Years of Experience</p>
        </div>
        <div>
          <h3>598 +</h3>
          <p>Rented Home Stay</p>
        </div>
      </div>
    </section>
  )
}