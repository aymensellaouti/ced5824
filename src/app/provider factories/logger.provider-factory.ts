import { LoggerService } from "../services/logger.service"

export const loggerFactory = () => {
  return new LoggerService();
}
