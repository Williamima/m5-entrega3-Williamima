import {
  validateBodyMock,
  validateSchemaMock,
  invalidateBodyMock,
  invalidateIdMock,
} from "./ensureValidateBody.mock";
import { createCarControllerMock } from "./controllers/createCarController.mock";
import { createCarServicesMock } from "./services/createCarServices.mock";
import { getCarControllerMock } from "./services/getCarServices";
import { patchCarServicesMock } from "./services/patchCarServices";
import { patchCarControllersMock } from "./controllers/patchCarController";

export {
  validateBodyMock,
  validateSchemaMock,
  invalidateBodyMock,
  createCarControllerMock,
  createCarServicesMock,
  invalidateIdMock,
  getCarControllerMock,
  patchCarServicesMock,
  patchCarControllersMock,
};
