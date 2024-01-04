const Interpolate = (str: string, data: Record<string, string>): string => {
  for (const item in data) {
    if (Object.prototype.hasOwnProperty.call(data, item)) {
      str = str.replace(new RegExp(`:${item}`, 'gi'), data[item]);
    }
  }
  return str;
};

export default Interpolate;
