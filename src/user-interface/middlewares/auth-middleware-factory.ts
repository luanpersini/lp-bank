import { makeDbLoadAccountByToken } from '@/infra/usecases-factory/user-account/load-account-by-token/db-load-account-by-token-factory'
import { Middleware } from '@/user-interface/common/interfaces'
import { AuthMiddleware } from '@/user-interface/middlewares/auth-middleware'

export const makeAuthMiddleware = (): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken())
}
