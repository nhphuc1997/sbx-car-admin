import { Module } from '@nestjs/common';
import { AdminModule } from '@adminjs/nestjs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import provider from './admin/auth-provider.js';
import * as AdminJSTypeorm from '@adminjs/typeorm'
import AdminJS from 'adminjs'
import { TypeOrmModule } from '@nestjs/typeorm';
import componentLoader from './admin/component-loader.js';
import uploadFeature from '@adminjs/upload';
import { Banner } from './entities/Banner.entity.js';
import { awscredentials } from './aws/index.js';
import { Car } from './entities/Car.entity.js';
import { Category } from './entities/Category.entity.js';
import { Interior } from './entities/Interior.js';
import bannerResource from './resources/banner.resource.js';
import carResource from './resources/car.resource.js';
import fullteriorResource from './resources/fullterior.resource.js';
import { Exterior } from './entities/Exterior.js';
import { Mechanical } from './entities/Mechanical.js';
import { Document } from './entities/Document.js';
import { Video } from './entities/Video.js';
import { Order } from './entities/Order.entity.js';
import { BookTest } from './entities/BookTest.entity.js';

AdminJS.registerAdapter({
  Resource: AdminJSTypeorm.Resource,
  Database: AdminJSTypeorm.Database,
})

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DATABASE_HOST'),
        port: config.get<number>('DATABASE_PORT') || 3306,
        username: config.get<string>('DATABASE_USER'),
        password: config.get<string>('DATABASE_PASSWORD'),
        database: config.get<string>('DATABASE_NAME'),
        entities: [
          Banner,
          Car,
          Category,
          Interior,
          Exterior,
          Mechanical,
          Document,
          Video,
          Order,
          BookTest
        ],
        synchronize: true,
      })
    }),
    AdminModule.createAdminAsync({
      useFactory: async () => {
        return {
          adminJsOptions: {
            componentLoader,
            rootPath: '/sbx-car/admin',
            loginPath: '/sbx-car/admin/login',
            logoutPath: '/sbx-car/admin/exit',
            resources: [
              Category,
              Video,
              Order,
              BookTest,
              {
                resource: Banner,
                options: bannerResource,
                features: [
                  uploadFeature({
                    componentLoader,
                    provider: { aws: awscredentials },
                    validation: { mimeTypes: [] },
                    properties: { file: 'file', key: 's3Key', bucket: 'bucket', mimeType: 'mime' },
                  } as any),
                ],
              },
              {
                resource: Car,
                options: carResource,
                features: [
                  uploadFeature({
                    componentLoader,
                    provider: { aws: awscredentials },
                    validation: { mimeTypes: [] },
                    properties: { file: 'file', key: 's3Key', bucket: 'bucket', mimeType: 'mime' },
                  } as any),
                ],
              },
              {
                resource: Interior,
                options: fullteriorResource,
                features: [
                  uploadFeature({
                    componentLoader,
                    provider: { aws: awscredentials },
                    validation: { mimeTypes: [] },
                    properties: { file: 'file', key: 's3Key', bucket: 'bucket', mimeType: 'mime' },
                  } as any),
                ],
              },
              {
                resource: Exterior,
                options: fullteriorResource,
                features: [
                  uploadFeature({
                    componentLoader,
                    provider: { aws: awscredentials },
                    validation: { mimeTypes: [] },
                    properties: { file: 'file', key: 's3Key', bucket: 'bucket', mimeType: 'mime' },
                  } as any),
                ],
              },
              {
                resource: Mechanical,
                options: fullteriorResource,
                features: [
                  uploadFeature({
                    componentLoader,
                    provider: { aws: awscredentials },
                    validation: { mimeTypes: [] },
                    properties: { file: 'file', key: 's3Key', bucket: 'bucket', mimeType: 'mime' },
                  } as any),
                ],
              },
              {
                resource: Document,
                options: fullteriorResource,
                features: [
                  uploadFeature({
                    componentLoader,
                    provider: { aws: awscredentials },
                    validation: { mimeTypes: [] },
                    properties: { file: 'file', key: 's3Key', bucket: 'bucket', mimeType: 'mime' },
                  } as any),
                ],
              },
            ],
            branding: {
              companyName: 'SBX Admin',
              logo: '',
            },
          },
          auth: {
            provider,
            cookiePassword: process.env.COOKIE_SECRET,
            cookieName: 'adminjs',
          },
          sessionOptions: {
            resave: true,
            saveUninitialized: true,
            secret: process.env.COOKIE_SECRET,
          }
        };
      },
    }),
  ],
})
export class AppModule { }
