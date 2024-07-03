import { Module } from '@nestjs/common';
import { TransaccionModule } from './Transaccion/Transaccion.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TransaccionModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'websoc',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
   ],
  controllers: [],
  providers: [],
})
export class AppModule {}