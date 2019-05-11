import Constants from "./contants";

const dummyData = [
  { id: 1, category: "selfie", image: "../asset/img/img.jpg" },
  { id: 2, category: "selfie", image: "../asset/img/img.jpg" },
  { id: 3, category: "selfie", image: "../asset/img/img.jpg" },
  { id: 4, category: "selfie", image: "../asset/img/img.jpg" },
  { id: 5, category: "selfie", image: "../asset/img/img.jpg" }
];

export const getData = (category, currentId) => {
  const data = dummyData.filter(
    items =>
      items.category == category &&
      items.id > currentId &&
      items.id <= currentId + Constants.num_rows_to_load
  );

  return data;
};

export const getLastId = () => {
  return dummyData[dummyData.length - 1].id;
};
