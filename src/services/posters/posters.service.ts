// Initializes the `posters` service on path `/posters`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Posters } from "./posters.class";
import hooks from "./posters.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    posters: Posters & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/posters", new Posters(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("posters");

  service.hooks(hooks);
}
