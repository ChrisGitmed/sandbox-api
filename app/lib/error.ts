interface ErrInt {
  message: string,
  code: number,
  context: string,
};

export class Err extends Error {
  constructor ({ message, code = 500, context = '' }:ErrInt) {
    super(message);
    this.code = code;
    this.context = context;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errHandler = (err: Err | string, next: Function, context = 'No context provided') => {
  if (err instanceof Err) return next(err);
  return next(new Err({ message: err, code: 500, context }));
};

