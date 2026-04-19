import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './task.model';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }
    @Get()
    getAllTasks(): Tasks[] {
        return this.tasksService.getAllTasks()
    }

}
