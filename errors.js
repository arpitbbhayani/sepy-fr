export class SepyError extends Error {
  constructor(message, error) {
    super(message)
    this.message = message
    this.error = error
  }
}

export class NotLoggedInError extends SepyError {
  constructor() {
    super('You are not logged in.', 'not-logged-in')
  }
}

export class NotFoundInError extends SepyError {}

export function buildErrorObject(err) {
  const error =
    (err && err.response && err.response.data && err.response.data.error) ||
    'error'
  const message =
    err && err.response && err.response.data && err.response.data.message

  if (err && err.response) {
    if (err.response.status === 401) {
      return new NotLoggedInError()
    } else if (err.response.status === 404) {
      return new NotFoundInError(message, error)
    }
  }

  return new SepyError(message, error)
}

export function actOnSepyErrors(sepyError, dispatch) {}

export default {
  SepyError,
  NotLoggedInError,
  NotFoundInError,
  buildErrorObject,
  actOnSepyErrors
}
