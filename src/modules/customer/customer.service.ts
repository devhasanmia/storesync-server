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

const getCustomers = async () => {
  try {
    
    const data = await Customer.find().sort({ createdAt: -1 });

    if (data.length <= 0) {
      throw new AppError(404, "Customer Not Found");
    }



    return data;
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
