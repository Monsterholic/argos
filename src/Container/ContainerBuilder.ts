import { Container, interfaces } from 'inversify';
import { Types } from './Types';

export class ContainerBuilder {
    public static build(): Container {
        const container = new Container();

        // child container
        container
            .bind<interfaces.Container>(Types.Container)
            .toDynamicValue((context: interfaces.Context) => {
                return context.container;
            })
            .inRequestScope()
        return container;
    }
}
