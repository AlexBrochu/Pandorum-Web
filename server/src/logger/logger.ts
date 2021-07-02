import winston from 'winston'

export class Logger {
  
  logger: any

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: { service: 'user-service' },
      transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: './logs/combined.log' }),
      ],
    })
    //
    // If we're not in production then log to the `console` with the format:
    // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
    //
    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(new winston.transports.Console({
        format: winston.format.simple(),
      }))
    }
  }

  public info(logText: string): void {
      this.logger.info(new Date() + 'info:::::' + logText)
  }

  public warn(logText: string): void {
      this.logger.warn(new Date() + 'debug:::::' + logText)
  }

  public error(logText: string): void {
      this.logger.error(new Date() + 'error:::::' + logText)
  }
}