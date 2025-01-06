import AppError from "../../errors/AppError";
import Customer from "./customer.model";
import { TCustomer } from "./customer.type";

const addCustomer = async (payload: TCustomer) => {
  try {
    const data = await Customer.create(payload);
    return data;
  } catch (error) {
    throw error;
  }
};

const getCustomers = async (query: Record<string, unknown>) => {
  try {
    let searchKeyword: string = "";
    const queryObject = { ...query };
    if (query?.searchTerm) {
      searchKeyword = query?.searchTerm as string;
    }
    const searchQueay = Customer.find({
      $or: ["name", "mobile", "address", "email"].map((field) => ({
        [field]: { $regex: searchKeyword, $options: "i" }
      }))
    });
    const fieldsToExclude = ["searchTerm", "sort", "limit", "page", "fields"];
    fieldsToExclude.forEach((field) => delete queryObject[field]);
    
    console.log("baseQuery:", query, "Remove Query: " ,queryObject)

    const filterQuery = searchQueay.find(queryObject)

    let sort = "-createdAt";

    if (query?.sort) {
      sort = query.sort as string
    }

    const sortQuery = filterQuery.sort(sort);
    let page: number = 1;
    let limit: number = 2;
    let skip: number = 0;

    if (query?.limit) {
      limit = Number(query?.limit)
    }
    if (query?.page) {
      page = Number(query.page);
      skip = (page-1)* limit
    }
   const paginateQuery = sortQuery.skip(skip);
    const limitQuery = paginateQuery.limit(limit)
  
    let fields = "-__v";

    if (query.fields) {
      fields = (query.fields as string).split(",").join(" ");
    }

    const fieldsQuery = await limitQuery.select(fields);

    if (fieldsQuery.length <= 0) {
      throw new AppError(404, "Customers Not Found");
    }

    return fieldsQuery;
  } catch (error) {
    throw error;
  }
};


const getCustomer = async (id: string) => {
  try {
    const data = await Customer.findById(id);
    return data;
  } catch (error) {
    throw error;
  }
};

const updateCustomer = async (id: string, payload: TCustomer) => {
  try {
    const data = await Customer.findByIdAndUpdate(id, payload, { new: true });
    return data;
  } catch (error) {
    throw error;
  }
};

const deleteCustomer = async (id: string) => {
  try {
    await Customer.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

export const customerService = {
  addCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer
};
