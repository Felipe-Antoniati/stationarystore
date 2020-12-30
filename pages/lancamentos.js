import FeaturedSection from "../components/FeaturedSection";
import HeaderPage from "../components/HeaderPage";
import Select from "../components/Select";

export default function Lancamentos() {
  return (
    <>
      <HeaderPage
        title="Lançamentos"
        previous="Home"
        current="Lançamentos"
        hrefPrevious="/"
        hrefCurrent="/lancamentos"
      >
        <Select
          name="subject"
          label="Pesquisar por: "
          options={[
            { value: "Caneta", label: "Caneta" },
            { value: "Lapis", label: "Lapis" },
          ]}
        />
      </HeaderPage>
      <FeaturedSection/>
    </>
  );
}
