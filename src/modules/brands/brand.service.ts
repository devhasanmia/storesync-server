import { TBrand } from "./brand.type";
import Brand from "./brands.model";

const addBrand = async (payload: TBrand) => {
  try {
    const data = await Brand.create(payload);
    return data;
  } catch (error) {
    throw error;
  }
};

const getBrands = async (query: Record<string, unknown>) => {
  try {
    let searchKeyword: string = "";
    if (query?.searchTerm) {
      searchKeyword = query?.searchTerm as string;
    }
    const searchQueay = await Brand.find({
      $or: ["name"].map(field => ({
        [field]: { $regex: searchKeyword, $options: "i" }
      }))
    }).sort({ updatedAt: -1 });
    return searchQueay;
  } catch (error) {
    throw error;
  }
};



export const brandService = { addBrand, getBrands };
