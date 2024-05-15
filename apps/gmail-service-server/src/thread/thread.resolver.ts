import * as graphql from "@nestjs/graphql";
import { ThreadResolverBase } from "./base/thread.resolver.base";
import { Thread } from "./base/Thread";
import { ThreadService } from "./thread.service";

@graphql.Resolver(() => Thread)
export class ThreadResolver extends ThreadResolverBase {
  constructor(protected readonly service: ThreadService) {
    super(service);
  }
}
