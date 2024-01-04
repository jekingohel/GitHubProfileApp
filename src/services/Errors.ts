interface ErrorsFunctions {
  is404: (error: any) => boolean;
}

const Errors: ErrorsFunctions = (() => {
  const ret: ErrorsFunctions = {} as ErrorsFunctions;
  ret.is404 = (error: any) => {
    if (error?.response?.status === 404) {
      return true;
    }
    return false;
  };
  return ret;
})();

export default Errors;
