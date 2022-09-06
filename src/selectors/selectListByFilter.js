import { createSelector } from "reselect";

export const selectListByFilter = createSelector(
  (state) => state.serviceList,
  (state) => state.serviceFilter,
  (seviceList, serviceFilter) => {
    console.log("filterService", serviceFilter);
    return seviceList.filter((item) =>
      new RegExp(serviceFilter, "gi").test(item.name)
    );
  }
);
