import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './controllers/users/users.module';
import { ClaimsModule } from './controllers/claims/claims.module';
import { AuthModule } from './controllers/auth/auth.module';
import { ModeModule } from './controllers/mode/mode.module';

@Module({
  imports: [UsersModule, ClaimsModule, AuthModule, ModeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
