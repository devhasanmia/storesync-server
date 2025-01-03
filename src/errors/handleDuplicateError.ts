import { TErrorSources } from "../types/error";

export const handleDuplicateError = (err: any) => {
  const statusCode = 403;
  const match = err.message.match(/"([^"]+)"/);
  const extractMsg = match && match[1];
  const errorSources: TErrorSources = [
    {
      path: "",
      message: `${extractMsg} already exists`
    }
  ];
  return {
    statusCode,
    message: "Duplicate entry. Please check.",
    errorSources
  };
};
