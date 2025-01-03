import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import handleZodError from '../errors/handleZodError';
import { TErrorSources } from '../types/error';
import { handleDuplicateError } from '../errors/handleDuplicateError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];
  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode || statusCode;
    message = simplifiedError?.message || message;
    errorSources = simplifiedError?.errorSources || errorSources;
  }else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError?.statusCode || statusCode;
    message = simplifiedError?.message || message;
    errorSources = simplifiedError?.errorSources || errorSources;
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
  });
};

export default globalErrorHandler;
