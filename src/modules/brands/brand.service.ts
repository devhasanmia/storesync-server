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

export const brandService = { addBrand };
