import FeaturedSection from "../components/FeaturedSection";
import HeaderPage from "../components/HeaderPage";

export default function Lancamentos () {
  return(
    <>
      <HeaderPage 
        title="Lançamentos"
        previous="Home"
        current="/Lançamentos"
        hrefPrevious="/"
        hrefCurrent="/lancamentos"
      >
        
      </HeaderPage>
      <FeaturedSection />
    </>
  );
};