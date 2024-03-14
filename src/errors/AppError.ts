export class AppError extends Error {
  constructor(public statusCode: number = 400, public message: string) {
    super(message);
  }
}
