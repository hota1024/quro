import { RequestArgs } from '../../types/RequestArgs'
import { Message } from '../..'
import { PipeNextInterface } from '../PipeNext'

/*
 * CommandRequest interface.
 */
export interface CommandRequestInterface {
  /**
   * Message.
   */
  readonly message: Message

  /**
   * Wheather call as pipe.
   */
  readonly isPipe: boolean

  /**
   * Pipe routes.
   */
  readonly pipeRoutes: PipeNextInterface[]

  /**
   * Get argument by index.
   *
   * @param index
   */
  get<T extends RequestArgs[0]>(index: number): T

  /**
   * Get all arguments.
   */
  get<T extends RequestArgs>(): T
}
