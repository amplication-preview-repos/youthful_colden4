import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ThreadService } from "./thread.service";
import { ThreadControllerBase } from "./base/thread.controller.base";

@swagger.ApiTags("threads")
@common.Controller("threads")
export class ThreadController extends ThreadControllerBase {
  constructor(protected readonly service: ThreadService) {
    super(service);
  }
}
