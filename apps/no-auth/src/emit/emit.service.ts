import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmitServiceBase } from "./base/emit.service.base";

@Injectable()
export class EmitService extends EmitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
