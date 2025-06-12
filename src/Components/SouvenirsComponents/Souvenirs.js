import { useSelector } from "react-redux";
import dataSouvenirs from "../../souvenirsData/dataSouvenirs";
import Souvenir from "./Souvenir";
import { getSelectedCategory } from "../../redux/souvenirsUnit";

const Souvenirs = () => {
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <div>
      {
        dataSouvenirs
          .filter(souvenir => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === souvenir.category;
          })
          .map(souvenir =><Souvenir key={souvenir.id} souvenir={souvenir} />)
      }
    </div>
  );
};

export default Souvenirs;
