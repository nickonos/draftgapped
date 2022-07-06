/**
 * This file contains the root router of your tRPC-backend
 */
import { createRouter } from '../createRouter';
import { postRouter } from './post';
import { Subscription } from '@trpc/server';
import superjson from 'superjson';
import { clearInterval } from 'timers';
import {lobbyRouter} from "./lobby";

/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * @link https://trpc.io/docs/ssg
 * @link https://trpc.io/docs/router
 */
export const appRouter = createRouter()
  /**
   * Add data transformers
   * @link https://trpc.io/docs/data-transformers
   */
  .transformer(superjson)
    .merge('post.', postRouter)
    .merge('lobby.', lobbyRouter)
  /**
   * Optionally do custom error (type safe!) formatting
   * @link https://trpc.io/docs/error-formatting
   */
  // .formatError(({ shape, error }) => { })
  .subscription('randomNumber', {
    resolve() {
      return new Subscription<number>((emit) => {
        const int = setInterval(() => {
          emit.data(Math.random());
        }, 5000);
        return () => {
          clearInterval(int);
        };
      });
    },
  });

export type AppRouter = typeof appRouter;
