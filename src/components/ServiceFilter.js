import { useSelector, useDispatch } from "react-redux";
import { filterService } from "../actions/actionCreators";

const ServiceFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.serviceFilter);

  const handleChange = (evt) => {
    dispatch(filterService(evt.target.value));
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Filter"
        onChange={handleChange}
        value={filter}
      />
    </form>
  );
};

export default ServiceFilter;
