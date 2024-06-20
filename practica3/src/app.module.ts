import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CajaModule } from './caja/caja.module';
import { ConceptoModule } from './concepto/concepto.module';
import { TransaccionModule } from './transaccion/transaccion.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [CajaModule, ConceptoModule, TransaccionModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'webS',
      synchronize: true,
      autoLoadEntities:true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }
