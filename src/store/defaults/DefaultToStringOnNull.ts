import DefaultToString from './DefaultToString';

const DefaultToStringOnNull = function (value: string | null): string {
  if (value === null) {
    return DefaultToString();
  }

  return value;
};

export default DefaultToStringOnNull;
