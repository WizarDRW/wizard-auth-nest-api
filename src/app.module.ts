import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './controllers/users/users.module';
import { ClaimsModule } from './controllers/claims/claims.module';
import { AuthModule } from './controllers/auth/auth.module';

@Module({
  imports: [UsersModule, ClaimsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
