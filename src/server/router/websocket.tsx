import {createRouter} from "./context";
import {EventEmitter} from "events";
import * as trpc from "@trpc/server";

const ee = new EventEmitter();

export const WebsocketRouter = createRouter()
    .subscription('onAdd', {
        resolve({ctx}) {
            return new trpc.Subscription<boolean>((emit) => {
                const onAdd = (data: boolean) => {
                    // emit data to client
                    emit.data(data)
                };

                // trigger `onAdd()` when `add` is triggered in our event emitter
                ee.on('add', onAdd);

                // unsubscribe function when client disconnects or stops subscribing
                return () => {
                    ee.off('add', onAdd);
                };
            });
        },
    })