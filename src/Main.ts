import * as bodyParser from 'body-parser';
import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';

import './Presentation/HealthCheckController';
import {ContainerBuilder} from "./Container/ContainerBuilder";

export class Main {
    public static start(): void {
        const container = ContainerBuilder
    }
}