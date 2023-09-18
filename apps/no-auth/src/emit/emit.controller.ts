import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmitService } from "./emit.service";
import { EmitControllerBase } from "./base/emit.controller.base";

@swagger.ApiTags("emits")
@common.Controller("emits")
export class EmitController extends EmitControllerBase {
  constructor(
    protected readonly service: EmitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
