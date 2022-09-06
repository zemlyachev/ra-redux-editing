import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editService, removeService } from "../actions/actionCreators";
import { selectListByFilter } from "../selectors/selectListByFilter";

function ServiceList() {
  const items = useSelector(selectListByFilter);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  const handleEdit = (o) => {
    dispatch(editService(o));
    console.log("o", o);
  };

  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o)}>✎</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
