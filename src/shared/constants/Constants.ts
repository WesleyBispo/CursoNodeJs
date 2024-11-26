export class Constants {
  static ErrorMessages = {
    ProductNotFound: "Product not found",
    ProductAlreadyExists: "There is already one product with this name"
  };

  static HttpStatusCode = {
    Success: 200,
    Created: 201,
    NoContent: 204,
    Unauthorized: 401,
    Forbidden: 403,
    InternalServerError: 500,
    BadGateway: 502,
    NotFound: 404,
    Conflict: 409,
    BadRequest: 400,
  }
}
