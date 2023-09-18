import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmitModuleBase } from "./base/emit.module.base";
import { EmitService } from "./emit.service";
import { EmitController } from "./emit.controller";
import { EmitResolver } from "./emit.resolver";

@Module({
  imports: [EmitModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmitController],
  providers: [EmitService, EmitResolver],
  exports: [EmitService],
})
export class EmitModule {}
