import Header from "../components/Header";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
const Home = ({ exploreData,cardData }) => {
  console.log("data", cardData);

  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-3xl font-semibold pb-5 flex self-start">Explore Nearby</h2>
          {/* pull some data from a server api */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item) => (
            <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance}/>
          ))}
          </div>
          
        </section>
        <section>
          <h2 className="text-3xl font-semibold py-8 ">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide">
          {cardData?.map(item=>(
            <MediumCard key={item.img} img={item.img} title={item.title}/>
          ))}
          </div>
        
        </section>
        <LargeCard img='https://links.papareact.com/4cj' 
        title='The Greatest Outdoors'
        description='Wishlist curated by Airbnb.'
        buttonText='Get Inspired'
        />
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await res.json();
  const cardData = await fetch('https://api.npoint.io/ff2b900e07ab684f471d').then(res => res.json())
  return {
    props: {
      exploreData,
      cardData
    },
  };
}
export default Home;
