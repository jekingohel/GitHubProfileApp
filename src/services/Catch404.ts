import Errors from './Errors';

interface ErrorResponse {
  code?: number;
}

type ErrorHandler = (error: any) => void;

const Catch404 = (errorHandler: ErrorHandler, errorResponse: ErrorResponse) => {
  return (error: any) => {
    if (!Errors.is404(error)) {
      if (typeof errorHandler === 'function') {
        errorHandler(error);
      }
    } else {
      errorResponse.code = 404;
    }
  };
};

export default Catch404;
