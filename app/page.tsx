import Head from "./Header.module.css"


export default function Home() {
  return (
    <About/>
  )
}

const About = () => {
  return (
    <section className={Head.about}>
      <div className={Head.wrapper}>
      <div className="grid grid-cols-2 gap-1 py-10">
        <div className=""><p>About</p></div>
          <div className="mb-6">
          <h3 className=" tracking-tight uppercase text-3xl mb-4"><strong>We&#39;ve found luxury homes for clients for a decade.</strong></h3>
          <p>We take great pride in ensuring the satisfaction of our customers, which is why we guarantee that the products we sell will bring happiness to each and every customer. Our genuine care for customer satisfaction is what sets us apart.</p></div>
      <div className="">
        <p className="">We take great pride in ensuring the satisfaction of our customers. That&#39;s why we proudly guarantee the quality and reliability of our products.</p>
            <input type="button" value="Let's Have You" className="bg-[#E09B6B] text-[#050505] rounded-3xl p-2" />
      </div>
      <div className="inline-flex justify-between ">
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
      </div>
      </div>
    </section>
  )
}