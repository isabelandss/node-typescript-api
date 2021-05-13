import './util/module-alias'
import { Server } from '@overnightjs/core'
import express, { Application } from 'express'
import { ForecastController } from './controllers/forecast'
import * as database from '@src/database'

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super()
  }

  public async init(): Promise<void> {
    this.setupExpress()
    this.setupControlers()
    await this.setupDatabase()
  }

  private setupExpress(): void {
    this.app.use(express.json())
  }

  private setupControlers(): void {
    const forecastController = new ForecastController()
    this.addControllers([forecastController])
  }

  private async setupDatabase(): Promise<void> {
    await database.connect()
  }

  public async closeDatabase() {
    await database.close()
  }

  public getApp(): Application {
    return this.app
  }
}
