// import { header } from "./header.mjs";
import { updateLoginVisibility } from "./authentication.mjs";
// import { footer } from "./footer.mjs";
import { registerListener } from "../listener/authenticationListener/registerListener.mjs";

export default () => {
  //   submitDataLogIn();
  updateLoginVisibility();
  registerListener();
};
