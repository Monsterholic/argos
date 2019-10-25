import * as express from "express";
import { interfaces, controller, httpGet} from "inversify-express-utils";

@controller("/")
export class HealthCheckController implements interfaces.Controller {
  @httpGet("/health")
    private healthCheck(req: express.Request, res: express.Response, next: express.NextFunction): void {
        res.status(200).json({status:"ok"})
    }
}