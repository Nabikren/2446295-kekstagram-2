import { getRandomNumber, getRandomArrayElement } from '../util.js';
import { DESCRIPTIONS } from '../const.js';
import { generateComments } from './comments.js';

// Генерация данных для одной фотографии
const generatePhotoData = (id) => {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: generateComments()
  };
}

// Генерация массива данных для фотографий
const generatePhotosData = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push(generatePhotoData(i));
  }
  return photos;
}

export { generatePhotosData };