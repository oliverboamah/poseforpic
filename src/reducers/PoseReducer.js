import {
  getData as getPoseData,
  getLastId as getPoseLastId
} from "../api/pose";

export const getData = (e, currentId) => {
  const data = getPoseData(currentId);

  // intentionally delay to mimick actual server
  setTimeout(
    () => e.setState({ currentId: data[data.length - 1].id, data }),
    10000
  );
};

export const getLastId = e => {
  const lastId = getPoseLastId();

  // intentionally delay to mimick actual server
  setTimeout(() => e.setState({ lastId }), 5000);
};
