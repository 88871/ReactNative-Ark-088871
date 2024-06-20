import { categoryDescriptions } from './CategoryDescriptions';

export const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  const formattedData = [];
  for (let i = 0; i < data.length; i += numColumns) {
    formattedData.push(data.slice(i, i + numColumns));
  }

  return formattedData;
};

export const categorizeDinosaurs = (data) => {
  const categories = {};

  data.forEach((dino) => {
    if (!categories[dino.Category]) {
      categories[dino.Category] = [];
    }
    categories[dino.Category].push(dino);
  });

  return Object.keys(categories).map((category) => ({
    title: category,
    description: categoryDescriptions[category],
    data: formatData(categories[category], 2),
  }));
};
