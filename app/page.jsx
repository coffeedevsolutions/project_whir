import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Whir
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Connecting Communities, Empowering Local Businesses</span>
    </h1>
    <p className='desc text-center'>
    Our vision is to create a global network that enhances vibrant communities by supporting local establishments. We aim to bridge the gap between customers seeking the best deals and local businesses looking to thrive.
    </p>

    <Feed />
  </section>
);

export default Home;