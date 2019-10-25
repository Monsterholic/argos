import * as bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';

import './Presentation/HealthCheckController';
import { ContainerBuilder } from './Container/ContainerBuilder';

export class Main {
    public static start(): void {
        const container = ContainerBuilder.build();
        const server = new InversifyExpressServer(container);
        server.setConfig(app => {
            // add body parser
            app.use(
                bodyParser.urlencoded({
                    extended: true,
                }),
            );
            app.use(bodyParser.json());
        });

        const app = server.build();
        app.listen(3000);
    }
}
