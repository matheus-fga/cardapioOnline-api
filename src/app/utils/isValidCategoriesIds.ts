import { isValidObjectId } from 'mongoose';

export function isValidCategoriesIds(categories: string[]) {
  let isValid = true;

  categories.forEach(categoryId => {
    if (!isValidObjectId(categoryId)) {
      isValid = false;
    }
  });

  return isValid;
}
