import {Module} from "@nestjs/common";
import { TodosController } from "./todo.controller";
import { TodoService } from "./todo.service";
import { todoProviders } from "./todo.providers";
import { DatabaseModule } from "src/db/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [TodosController],
    providers: [TodoService, ...todoProviders]
})

export class TodoModule{}