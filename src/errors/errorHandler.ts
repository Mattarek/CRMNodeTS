class errorHandler extends Error {
  constructor(public message: string, private statusCode: Number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const createCustomError = (message: string, statusCode: number) => {
  return new errorHandler(message, statusCode);
};

export default createCustomError;
