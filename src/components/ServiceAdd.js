import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeServiceField,
  addService,
  cancelService,
} from "../actions/actionCreators";

function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();
  const isEdit = !!item.id;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addService(item.id, item.name, item.price));
  };

  const handelCancel = (evt) => {
    evt.preventDefault();
    dispatch(cancelService());
  };

  return (
    <form onSubmit={handleSubmit} onReset={handelCancel}>
      <input name="name" onChange={handleChange} value={item.name} />
      <input name="price" onChange={handleChange} value={item.price} />
      <button type="submit">Save</button>
      {isEdit && <button type="reset">Cancel</button>}
    </form>
  );
}

export default ServiceAdd;
