import { Controller } from '@nestjs/common';
import { IAuthController } from 'src/interfaces/controllers/auth.controller.interface';

@Controller('auth')
export class AuthController implements IAuthController {}
