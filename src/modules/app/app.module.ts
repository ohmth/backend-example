import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import configuration from '../../config/configuration'
import { CatsModule } from '../cats/cats.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    CatsModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {
}
