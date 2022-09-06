import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  EDIT_SERVICE,
  CANCEL_SERVICE,
  CHANGE_SERVICE_FIELD,
  FILTER_SERVICE,
} from "./actionTypes";

export function addService(id, name, price) {
  return { type: ADD_SERVICE, payload: { id, name, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function editService(item) {
  return { type: EDIT_SERVICE, payload: { item } };
}

export function cancelService() {
  return { type: CANCEL_SERVICE };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function filterService(value) {
  return { type: FILTER_SERVICE, payload: { value } };
}
