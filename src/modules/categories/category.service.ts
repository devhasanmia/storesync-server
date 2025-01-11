import Category from "./category.model";
import { TCategory } from "./category.type";

const addCategory = async (payload: TCategory) => {
  try {
    const data = await Category.create(payload);
    return data;
  } catch (error) {
    throw error;
  }
};

const getCategories = async () => {
  try {
    const data = await Category.find().select('name')
    return data
  } catch (error) {
    throw error;
  }
};

const deletaCategory = async (id: string) => {
  try {
    const deletaCategory = await Category.findByIdAndDelete(id);
    return deletaCategory
  } catch (error) {
    throw error
  }
}
export const categoryService = {
  addCategory,
  getCategories,
  deletaCategory
};
