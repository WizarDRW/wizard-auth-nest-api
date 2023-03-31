import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './controllers/users/users.module';
import { ClaimsModule } from './controllers/claims/claims.module';

@Module({
  imports: [UsersModule, ClaimsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
