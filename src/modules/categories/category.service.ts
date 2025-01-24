import AppError from "../../errors/AppError";
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

const getCategories = async (searchTerm: string) => {
  let searchKeyword = ""
  if (searchTerm) {
    searchKeyword = searchTerm
  }
  try {
    const searchQueay = await Category.find({
      $or: ["name", "mobile", "address", "email"].map((field) => ({
        [field]: { $regex: searchKeyword, $options: "i" }
      }))
    });
    return searchQueay
  } catch (error) {
    throw error;
  }
};

const deletaCategory = async (id: string) => {
  try {
    const existingCategory = await Category.findById(id);
    if (!existingCategory) {
      throw new AppError(404, "Category does not exist");
    }
    const deletedCategory = await Category.findByIdAndDelete(id);
    return deletedCategory;
  } catch (error) {
    throw error
  }
}
export const categoryService = {
  addCategory,
  getCategories,
  deletaCategory
};
