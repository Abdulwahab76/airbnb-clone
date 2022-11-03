import React,{useState,useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { useRouter } from "next/router";
import { format } from "date-fns";
const Search = ({ searchResults }) => {
  const router = useRouter();
  const [searchValue,setSearchValue] = useState(searchResults)
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  console.log(searchResults);

  useEffect(() => {
    const filterOut = searchResults.filter(value=>value.location.toLowerCase().includes(location.toLowerCase()))
    setSearchValue(filterOut)
  }, [searchResults])
  
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs ">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden text-gray-800 whitespace-nowrap mb-4 md:flex space-x-4">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchValue.length > 0 ? (
              searchResults.map(({ img, location, title, description, price,star,total }) => (
                  <InfoCard
                    key={img}
                    img={img}
                    location={location}
                    price={price}
                    description={description}
                    star={star}
                    total={total}
                    title={title}
                  />
                )
              )
            ): <p className="text-xl font-semibold">No Results!</p>}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
export async function getServerSideProps() {
  const res = await fetch("https://api.npoint.io/bc5a7d237244b1290dc4");
  const searchResults = await res.json();
  return {
    props: {
      searchResults,
    },
  };
}
