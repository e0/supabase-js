import { PostgrestQueryBuilder } from '@supabase/postgrest-js';
import { SupabaseRealtimeClient } from './SupabaseRealtimeClient';
import { RealtimeClient } from '@supabase/realtime-js';
import { Fetch, SupabaseEventTypes, SupabaseRealtimePayload } from './types';
export declare class SupabaseQueryBuilder<T> extends PostgrestQueryBuilder<T> {
    private _subscription;
    private _realtime;
    constructor(url: string, { headers, schema, realtime, table, fetch, }: {
        headers?: {
            [key: string]: string;
        };
        schema: string;
        realtime: RealtimeClient;
        table: string;
        fetch?: Fetch;
    });
    /**
     * Subscribe to realtime changes in your databse.
     * @param event The database event which you would like to receive updates for, or you can use the special wildcard `*` to listen to all changes.
     * @param callback A callback that will handle the payload that is sent whenever your database changes.
     */
    on(event: SupabaseEventTypes, callback: (payload: SupabaseRealtimePayload<T>) => void): SupabaseRealtimeClient;
}
//# sourceMappingURL=SupabaseQueryBuilder.d.ts.map