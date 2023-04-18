import { Controller } from '@nestjs/common';
import { IClaimController } from 'src/interfaces/controllers/claim.controller.interface';

@Controller('claims')
export class ClaimsController implements IClaimController {}
