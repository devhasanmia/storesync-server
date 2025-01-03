import Customer from "./customer.model";
import { TCustomer } from "./customer.type";

const addCustomer = async (payload: TCustomer) => {
    const data = await Customer.create(payload);
    return data;
};

export const customerService = {
  addCustomer
};
