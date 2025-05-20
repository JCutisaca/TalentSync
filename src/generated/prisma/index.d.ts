
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model JobSearch
 * 
 */
export type JobSearch = $Result.DefaultSelection<Prisma.$JobSearchPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Modality: {
  REMOTE: 'REMOTE',
  ON_SITE: 'ON_SITE',
  HYBRID: 'HYBRID'
};

export type Modality = (typeof Modality)[keyof typeof Modality]


export const JobType: {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  FREELANCE: 'FREELANCE',
  CONTRACT: 'CONTRACT',
  INTERNSHIP: 'INTERNSHIP',
  OTHER: 'OTHER'
};

export type JobType = (typeof JobType)[keyof typeof JobType]

}

export type Modality = $Enums.Modality

export const Modality: typeof $Enums.Modality

export type JobType = $Enums.JobType

export const JobType: typeof $Enums.JobType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more JobSearches
 * const jobSearches = await prisma.jobSearch.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more JobSearches
   * const jobSearches = await prisma.jobSearch.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.jobSearch`: Exposes CRUD operations for the **JobSearch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobSearches
    * const jobSearches = await prisma.jobSearch.findMany()
    * ```
    */
  get jobSearch(): Prisma.JobSearchDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    JobSearch: 'JobSearch'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "jobSearch"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      JobSearch: {
        payload: Prisma.$JobSearchPayload<ExtArgs>
        fields: Prisma.JobSearchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobSearchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSearchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobSearchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSearchPayload>
          }
          findFirst: {
            args: Prisma.JobSearchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSearchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobSearchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSearchPayload>
          }
          findMany: {
            args: Prisma.JobSearchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSearchPayload>[]
          }
          create: {
            args: Prisma.JobSearchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSearchPayload>
          }
          createMany: {
            args: Prisma.JobSearchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobSearchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSearchPayload>[]
          }
          delete: {
            args: Prisma.JobSearchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSearchPayload>
          }
          update: {
            args: Prisma.JobSearchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSearchPayload>
          }
          deleteMany: {
            args: Prisma.JobSearchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobSearchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobSearchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSearchPayload>[]
          }
          upsert: {
            args: Prisma.JobSearchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSearchPayload>
          }
          aggregate: {
            args: Prisma.JobSearchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobSearch>
          }
          groupBy: {
            args: Prisma.JobSearchGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobSearchGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobSearchCountArgs<ExtArgs>
            result: $Utils.Optional<JobSearchCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    jobSearch?: JobSearchOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model JobSearch
   */

  export type AggregateJobSearch = {
    _count: JobSearchCountAggregateOutputType | null
    _avg: JobSearchAvgAggregateOutputType | null
    _sum: JobSearchSumAggregateOutputType | null
    _min: JobSearchMinAggregateOutputType | null
    _max: JobSearchMaxAggregateOutputType | null
  }

  export type JobSearchAvgAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobSearchSumAggregateOutputType = {
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobSearchMinAggregateOutputType = {
    id: string | null
    company: string | null
    title: string | null
    description: string | null
    location: string | null
    modality: $Enums.Modality | null
    salaryMin: number | null
    salaryMax: number | null
    jobType: $Enums.JobType | null
    createdAt: Date | null
    createdByClerkId: string | null
    organizationClerkId: string | null
  }

  export type JobSearchMaxAggregateOutputType = {
    id: string | null
    company: string | null
    title: string | null
    description: string | null
    location: string | null
    modality: $Enums.Modality | null
    salaryMin: number | null
    salaryMax: number | null
    jobType: $Enums.JobType | null
    createdAt: Date | null
    createdByClerkId: string | null
    organizationClerkId: string | null
  }

  export type JobSearchCountAggregateOutputType = {
    id: number
    company: number
    title: number
    description: number
    location: number
    modality: number
    salaryMin: number
    salaryMax: number
    jobType: number
    createdAt: number
    createdByClerkId: number
    organizationClerkId: number
    _all: number
  }


  export type JobSearchAvgAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
  }

  export type JobSearchSumAggregateInputType = {
    salaryMin?: true
    salaryMax?: true
  }

  export type JobSearchMinAggregateInputType = {
    id?: true
    company?: true
    title?: true
    description?: true
    location?: true
    modality?: true
    salaryMin?: true
    salaryMax?: true
    jobType?: true
    createdAt?: true
    createdByClerkId?: true
    organizationClerkId?: true
  }

  export type JobSearchMaxAggregateInputType = {
    id?: true
    company?: true
    title?: true
    description?: true
    location?: true
    modality?: true
    salaryMin?: true
    salaryMax?: true
    jobType?: true
    createdAt?: true
    createdByClerkId?: true
    organizationClerkId?: true
  }

  export type JobSearchCountAggregateInputType = {
    id?: true
    company?: true
    title?: true
    description?: true
    location?: true
    modality?: true
    salaryMin?: true
    salaryMax?: true
    jobType?: true
    createdAt?: true
    createdByClerkId?: true
    organizationClerkId?: true
    _all?: true
  }

  export type JobSearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSearch to aggregate.
     */
    where?: JobSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSearches to fetch.
     */
    orderBy?: JobSearchOrderByWithRelationInput | JobSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobSearches
    **/
    _count?: true | JobSearchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobSearchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSearchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobSearchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobSearchMaxAggregateInputType
  }

  export type GetJobSearchAggregateType<T extends JobSearchAggregateArgs> = {
        [P in keyof T & keyof AggregateJobSearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobSearch[P]>
      : GetScalarType<T[P], AggregateJobSearch[P]>
  }




  export type JobSearchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobSearchWhereInput
    orderBy?: JobSearchOrderByWithAggregationInput | JobSearchOrderByWithAggregationInput[]
    by: JobSearchScalarFieldEnum[] | JobSearchScalarFieldEnum
    having?: JobSearchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobSearchCountAggregateInputType | true
    _avg?: JobSearchAvgAggregateInputType
    _sum?: JobSearchSumAggregateInputType
    _min?: JobSearchMinAggregateInputType
    _max?: JobSearchMaxAggregateInputType
  }

  export type JobSearchGroupByOutputType = {
    id: string
    company: string
    title: string
    description: string
    location: string
    modality: $Enums.Modality
    salaryMin: number
    salaryMax: number
    jobType: $Enums.JobType
    createdAt: Date
    createdByClerkId: string
    organizationClerkId: string
    _count: JobSearchCountAggregateOutputType | null
    _avg: JobSearchAvgAggregateOutputType | null
    _sum: JobSearchSumAggregateOutputType | null
    _min: JobSearchMinAggregateOutputType | null
    _max: JobSearchMaxAggregateOutputType | null
  }

  type GetJobSearchGroupByPayload<T extends JobSearchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobSearchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobSearchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobSearchGroupByOutputType[P]>
            : GetScalarType<T[P], JobSearchGroupByOutputType[P]>
        }
      >
    >


  export type JobSearchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    modality?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    jobType?: boolean
    createdAt?: boolean
    createdByClerkId?: boolean
    organizationClerkId?: boolean
  }, ExtArgs["result"]["jobSearch"]>

  export type JobSearchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    modality?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    jobType?: boolean
    createdAt?: boolean
    createdByClerkId?: boolean
    organizationClerkId?: boolean
  }, ExtArgs["result"]["jobSearch"]>

  export type JobSearchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    modality?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    jobType?: boolean
    createdAt?: boolean
    createdByClerkId?: boolean
    organizationClerkId?: boolean
  }, ExtArgs["result"]["jobSearch"]>

  export type JobSearchSelectScalar = {
    id?: boolean
    company?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    modality?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    jobType?: boolean
    createdAt?: boolean
    createdByClerkId?: boolean
    organizationClerkId?: boolean
  }

  export type JobSearchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company" | "title" | "description" | "location" | "modality" | "salaryMin" | "salaryMax" | "jobType" | "createdAt" | "createdByClerkId" | "organizationClerkId", ExtArgs["result"]["jobSearch"]>

  export type $JobSearchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobSearch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company: string
      title: string
      description: string
      location: string
      modality: $Enums.Modality
      salaryMin: number
      salaryMax: number
      jobType: $Enums.JobType
      createdAt: Date
      createdByClerkId: string
      organizationClerkId: string
    }, ExtArgs["result"]["jobSearch"]>
    composites: {}
  }

  type JobSearchGetPayload<S extends boolean | null | undefined | JobSearchDefaultArgs> = $Result.GetResult<Prisma.$JobSearchPayload, S>

  type JobSearchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobSearchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobSearchCountAggregateInputType | true
    }

  export interface JobSearchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobSearch'], meta: { name: 'JobSearch' } }
    /**
     * Find zero or one JobSearch that matches the filter.
     * @param {JobSearchFindUniqueArgs} args - Arguments to find a JobSearch
     * @example
     * // Get one JobSearch
     * const jobSearch = await prisma.jobSearch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobSearchFindUniqueArgs>(args: SelectSubset<T, JobSearchFindUniqueArgs<ExtArgs>>): Prisma__JobSearchClient<$Result.GetResult<Prisma.$JobSearchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobSearch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobSearchFindUniqueOrThrowArgs} args - Arguments to find a JobSearch
     * @example
     * // Get one JobSearch
     * const jobSearch = await prisma.jobSearch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobSearchFindUniqueOrThrowArgs>(args: SelectSubset<T, JobSearchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobSearchClient<$Result.GetResult<Prisma.$JobSearchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobSearch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSearchFindFirstArgs} args - Arguments to find a JobSearch
     * @example
     * // Get one JobSearch
     * const jobSearch = await prisma.jobSearch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobSearchFindFirstArgs>(args?: SelectSubset<T, JobSearchFindFirstArgs<ExtArgs>>): Prisma__JobSearchClient<$Result.GetResult<Prisma.$JobSearchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobSearch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSearchFindFirstOrThrowArgs} args - Arguments to find a JobSearch
     * @example
     * // Get one JobSearch
     * const jobSearch = await prisma.jobSearch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobSearchFindFirstOrThrowArgs>(args?: SelectSubset<T, JobSearchFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobSearchClient<$Result.GetResult<Prisma.$JobSearchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobSearches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSearchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobSearches
     * const jobSearches = await prisma.jobSearch.findMany()
     * 
     * // Get first 10 JobSearches
     * const jobSearches = await prisma.jobSearch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobSearchWithIdOnly = await prisma.jobSearch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobSearchFindManyArgs>(args?: SelectSubset<T, JobSearchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSearchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobSearch.
     * @param {JobSearchCreateArgs} args - Arguments to create a JobSearch.
     * @example
     * // Create one JobSearch
     * const JobSearch = await prisma.jobSearch.create({
     *   data: {
     *     // ... data to create a JobSearch
     *   }
     * })
     * 
     */
    create<T extends JobSearchCreateArgs>(args: SelectSubset<T, JobSearchCreateArgs<ExtArgs>>): Prisma__JobSearchClient<$Result.GetResult<Prisma.$JobSearchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobSearches.
     * @param {JobSearchCreateManyArgs} args - Arguments to create many JobSearches.
     * @example
     * // Create many JobSearches
     * const jobSearch = await prisma.jobSearch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobSearchCreateManyArgs>(args?: SelectSubset<T, JobSearchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobSearches and returns the data saved in the database.
     * @param {JobSearchCreateManyAndReturnArgs} args - Arguments to create many JobSearches.
     * @example
     * // Create many JobSearches
     * const jobSearch = await prisma.jobSearch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobSearches and only return the `id`
     * const jobSearchWithIdOnly = await prisma.jobSearch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobSearchCreateManyAndReturnArgs>(args?: SelectSubset<T, JobSearchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSearchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobSearch.
     * @param {JobSearchDeleteArgs} args - Arguments to delete one JobSearch.
     * @example
     * // Delete one JobSearch
     * const JobSearch = await prisma.jobSearch.delete({
     *   where: {
     *     // ... filter to delete one JobSearch
     *   }
     * })
     * 
     */
    delete<T extends JobSearchDeleteArgs>(args: SelectSubset<T, JobSearchDeleteArgs<ExtArgs>>): Prisma__JobSearchClient<$Result.GetResult<Prisma.$JobSearchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobSearch.
     * @param {JobSearchUpdateArgs} args - Arguments to update one JobSearch.
     * @example
     * // Update one JobSearch
     * const jobSearch = await prisma.jobSearch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobSearchUpdateArgs>(args: SelectSubset<T, JobSearchUpdateArgs<ExtArgs>>): Prisma__JobSearchClient<$Result.GetResult<Prisma.$JobSearchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobSearches.
     * @param {JobSearchDeleteManyArgs} args - Arguments to filter JobSearches to delete.
     * @example
     * // Delete a few JobSearches
     * const { count } = await prisma.jobSearch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobSearchDeleteManyArgs>(args?: SelectSubset<T, JobSearchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSearchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobSearches
     * const jobSearch = await prisma.jobSearch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobSearchUpdateManyArgs>(args: SelectSubset<T, JobSearchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSearches and returns the data updated in the database.
     * @param {JobSearchUpdateManyAndReturnArgs} args - Arguments to update many JobSearches.
     * @example
     * // Update many JobSearches
     * const jobSearch = await prisma.jobSearch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobSearches and only return the `id`
     * const jobSearchWithIdOnly = await prisma.jobSearch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobSearchUpdateManyAndReturnArgs>(args: SelectSubset<T, JobSearchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSearchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobSearch.
     * @param {JobSearchUpsertArgs} args - Arguments to update or create a JobSearch.
     * @example
     * // Update or create a JobSearch
     * const jobSearch = await prisma.jobSearch.upsert({
     *   create: {
     *     // ... data to create a JobSearch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobSearch we want to update
     *   }
     * })
     */
    upsert<T extends JobSearchUpsertArgs>(args: SelectSubset<T, JobSearchUpsertArgs<ExtArgs>>): Prisma__JobSearchClient<$Result.GetResult<Prisma.$JobSearchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSearchCountArgs} args - Arguments to filter JobSearches to count.
     * @example
     * // Count the number of JobSearches
     * const count = await prisma.jobSearch.count({
     *   where: {
     *     // ... the filter for the JobSearches we want to count
     *   }
     * })
    **/
    count<T extends JobSearchCountArgs>(
      args?: Subset<T, JobSearchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobSearchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobSearchAggregateArgs>(args: Subset<T, JobSearchAggregateArgs>): Prisma.PrismaPromise<GetJobSearchAggregateType<T>>

    /**
     * Group by JobSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSearchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobSearchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobSearchGroupByArgs['orderBy'] }
        : { orderBy?: JobSearchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobSearchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobSearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobSearch model
   */
  readonly fields: JobSearchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobSearch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobSearchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobSearch model
   */
  interface JobSearchFieldRefs {
    readonly id: FieldRef<"JobSearch", 'String'>
    readonly company: FieldRef<"JobSearch", 'String'>
    readonly title: FieldRef<"JobSearch", 'String'>
    readonly description: FieldRef<"JobSearch", 'String'>
    readonly location: FieldRef<"JobSearch", 'String'>
    readonly modality: FieldRef<"JobSearch", 'Modality'>
    readonly salaryMin: FieldRef<"JobSearch", 'Int'>
    readonly salaryMax: FieldRef<"JobSearch", 'Int'>
    readonly jobType: FieldRef<"JobSearch", 'JobType'>
    readonly createdAt: FieldRef<"JobSearch", 'DateTime'>
    readonly createdByClerkId: FieldRef<"JobSearch", 'String'>
    readonly organizationClerkId: FieldRef<"JobSearch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JobSearch findUnique
   */
  export type JobSearchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSearch
     */
    select?: JobSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSearch
     */
    omit?: JobSearchOmit<ExtArgs> | null
    /**
     * Filter, which JobSearch to fetch.
     */
    where: JobSearchWhereUniqueInput
  }

  /**
   * JobSearch findUniqueOrThrow
   */
  export type JobSearchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSearch
     */
    select?: JobSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSearch
     */
    omit?: JobSearchOmit<ExtArgs> | null
    /**
     * Filter, which JobSearch to fetch.
     */
    where: JobSearchWhereUniqueInput
  }

  /**
   * JobSearch findFirst
   */
  export type JobSearchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSearch
     */
    select?: JobSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSearch
     */
    omit?: JobSearchOmit<ExtArgs> | null
    /**
     * Filter, which JobSearch to fetch.
     */
    where?: JobSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSearches to fetch.
     */
    orderBy?: JobSearchOrderByWithRelationInput | JobSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSearches.
     */
    cursor?: JobSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSearches.
     */
    distinct?: JobSearchScalarFieldEnum | JobSearchScalarFieldEnum[]
  }

  /**
   * JobSearch findFirstOrThrow
   */
  export type JobSearchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSearch
     */
    select?: JobSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSearch
     */
    omit?: JobSearchOmit<ExtArgs> | null
    /**
     * Filter, which JobSearch to fetch.
     */
    where?: JobSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSearches to fetch.
     */
    orderBy?: JobSearchOrderByWithRelationInput | JobSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSearches.
     */
    cursor?: JobSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSearches.
     */
    distinct?: JobSearchScalarFieldEnum | JobSearchScalarFieldEnum[]
  }

  /**
   * JobSearch findMany
   */
  export type JobSearchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSearch
     */
    select?: JobSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSearch
     */
    omit?: JobSearchOmit<ExtArgs> | null
    /**
     * Filter, which JobSearches to fetch.
     */
    where?: JobSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSearches to fetch.
     */
    orderBy?: JobSearchOrderByWithRelationInput | JobSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobSearches.
     */
    cursor?: JobSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSearches.
     */
    skip?: number
    distinct?: JobSearchScalarFieldEnum | JobSearchScalarFieldEnum[]
  }

  /**
   * JobSearch create
   */
  export type JobSearchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSearch
     */
    select?: JobSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSearch
     */
    omit?: JobSearchOmit<ExtArgs> | null
    /**
     * The data needed to create a JobSearch.
     */
    data: XOR<JobSearchCreateInput, JobSearchUncheckedCreateInput>
  }

  /**
   * JobSearch createMany
   */
  export type JobSearchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobSearches.
     */
    data: JobSearchCreateManyInput | JobSearchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobSearch createManyAndReturn
   */
  export type JobSearchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSearch
     */
    select?: JobSearchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobSearch
     */
    omit?: JobSearchOmit<ExtArgs> | null
    /**
     * The data used to create many JobSearches.
     */
    data: JobSearchCreateManyInput | JobSearchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobSearch update
   */
  export type JobSearchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSearch
     */
    select?: JobSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSearch
     */
    omit?: JobSearchOmit<ExtArgs> | null
    /**
     * The data needed to update a JobSearch.
     */
    data: XOR<JobSearchUpdateInput, JobSearchUncheckedUpdateInput>
    /**
     * Choose, which JobSearch to update.
     */
    where: JobSearchWhereUniqueInput
  }

  /**
   * JobSearch updateMany
   */
  export type JobSearchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobSearches.
     */
    data: XOR<JobSearchUpdateManyMutationInput, JobSearchUncheckedUpdateManyInput>
    /**
     * Filter which JobSearches to update
     */
    where?: JobSearchWhereInput
    /**
     * Limit how many JobSearches to update.
     */
    limit?: number
  }

  /**
   * JobSearch updateManyAndReturn
   */
  export type JobSearchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSearch
     */
    select?: JobSearchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobSearch
     */
    omit?: JobSearchOmit<ExtArgs> | null
    /**
     * The data used to update JobSearches.
     */
    data: XOR<JobSearchUpdateManyMutationInput, JobSearchUncheckedUpdateManyInput>
    /**
     * Filter which JobSearches to update
     */
    where?: JobSearchWhereInput
    /**
     * Limit how many JobSearches to update.
     */
    limit?: number
  }

  /**
   * JobSearch upsert
   */
  export type JobSearchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSearch
     */
    select?: JobSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSearch
     */
    omit?: JobSearchOmit<ExtArgs> | null
    /**
     * The filter to search for the JobSearch to update in case it exists.
     */
    where: JobSearchWhereUniqueInput
    /**
     * In case the JobSearch found by the `where` argument doesn't exist, create a new JobSearch with this data.
     */
    create: XOR<JobSearchCreateInput, JobSearchUncheckedCreateInput>
    /**
     * In case the JobSearch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobSearchUpdateInput, JobSearchUncheckedUpdateInput>
  }

  /**
   * JobSearch delete
   */
  export type JobSearchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSearch
     */
    select?: JobSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSearch
     */
    omit?: JobSearchOmit<ExtArgs> | null
    /**
     * Filter which JobSearch to delete.
     */
    where: JobSearchWhereUniqueInput
  }

  /**
   * JobSearch deleteMany
   */
  export type JobSearchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSearches to delete
     */
    where?: JobSearchWhereInput
    /**
     * Limit how many JobSearches to delete.
     */
    limit?: number
  }

  /**
   * JobSearch without action
   */
  export type JobSearchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSearch
     */
    select?: JobSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSearch
     */
    omit?: JobSearchOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const JobSearchScalarFieldEnum: {
    id: 'id',
    company: 'company',
    title: 'title',
    description: 'description',
    location: 'location',
    modality: 'modality',
    salaryMin: 'salaryMin',
    salaryMax: 'salaryMax',
    jobType: 'jobType',
    createdAt: 'createdAt',
    createdByClerkId: 'createdByClerkId',
    organizationClerkId: 'organizationClerkId'
  };

  export type JobSearchScalarFieldEnum = (typeof JobSearchScalarFieldEnum)[keyof typeof JobSearchScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Modality'
   */
  export type EnumModalityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Modality'>
    


  /**
   * Reference to a field of type 'Modality[]'
   */
  export type ListEnumModalityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Modality[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'JobType'
   */
  export type EnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType'>
    


  /**
   * Reference to a field of type 'JobType[]'
   */
  export type ListEnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type JobSearchWhereInput = {
    AND?: JobSearchWhereInput | JobSearchWhereInput[]
    OR?: JobSearchWhereInput[]
    NOT?: JobSearchWhereInput | JobSearchWhereInput[]
    id?: StringFilter<"JobSearch"> | string
    company?: StringFilter<"JobSearch"> | string
    title?: StringFilter<"JobSearch"> | string
    description?: StringFilter<"JobSearch"> | string
    location?: StringFilter<"JobSearch"> | string
    modality?: EnumModalityFilter<"JobSearch"> | $Enums.Modality
    salaryMin?: IntFilter<"JobSearch"> | number
    salaryMax?: IntFilter<"JobSearch"> | number
    jobType?: EnumJobTypeFilter<"JobSearch"> | $Enums.JobType
    createdAt?: DateTimeFilter<"JobSearch"> | Date | string
    createdByClerkId?: StringFilter<"JobSearch"> | string
    organizationClerkId?: StringFilter<"JobSearch"> | string
  }

  export type JobSearchOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    modality?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    jobType?: SortOrder
    createdAt?: SortOrder
    createdByClerkId?: SortOrder
    organizationClerkId?: SortOrder
  }

  export type JobSearchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobSearchWhereInput | JobSearchWhereInput[]
    OR?: JobSearchWhereInput[]
    NOT?: JobSearchWhereInput | JobSearchWhereInput[]
    company?: StringFilter<"JobSearch"> | string
    title?: StringFilter<"JobSearch"> | string
    description?: StringFilter<"JobSearch"> | string
    location?: StringFilter<"JobSearch"> | string
    modality?: EnumModalityFilter<"JobSearch"> | $Enums.Modality
    salaryMin?: IntFilter<"JobSearch"> | number
    salaryMax?: IntFilter<"JobSearch"> | number
    jobType?: EnumJobTypeFilter<"JobSearch"> | $Enums.JobType
    createdAt?: DateTimeFilter<"JobSearch"> | Date | string
    createdByClerkId?: StringFilter<"JobSearch"> | string
    organizationClerkId?: StringFilter<"JobSearch"> | string
  }, "id">

  export type JobSearchOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    modality?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    jobType?: SortOrder
    createdAt?: SortOrder
    createdByClerkId?: SortOrder
    organizationClerkId?: SortOrder
    _count?: JobSearchCountOrderByAggregateInput
    _avg?: JobSearchAvgOrderByAggregateInput
    _max?: JobSearchMaxOrderByAggregateInput
    _min?: JobSearchMinOrderByAggregateInput
    _sum?: JobSearchSumOrderByAggregateInput
  }

  export type JobSearchScalarWhereWithAggregatesInput = {
    AND?: JobSearchScalarWhereWithAggregatesInput | JobSearchScalarWhereWithAggregatesInput[]
    OR?: JobSearchScalarWhereWithAggregatesInput[]
    NOT?: JobSearchScalarWhereWithAggregatesInput | JobSearchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobSearch"> | string
    company?: StringWithAggregatesFilter<"JobSearch"> | string
    title?: StringWithAggregatesFilter<"JobSearch"> | string
    description?: StringWithAggregatesFilter<"JobSearch"> | string
    location?: StringWithAggregatesFilter<"JobSearch"> | string
    modality?: EnumModalityWithAggregatesFilter<"JobSearch"> | $Enums.Modality
    salaryMin?: IntWithAggregatesFilter<"JobSearch"> | number
    salaryMax?: IntWithAggregatesFilter<"JobSearch"> | number
    jobType?: EnumJobTypeWithAggregatesFilter<"JobSearch"> | $Enums.JobType
    createdAt?: DateTimeWithAggregatesFilter<"JobSearch"> | Date | string
    createdByClerkId?: StringWithAggregatesFilter<"JobSearch"> | string
    organizationClerkId?: StringWithAggregatesFilter<"JobSearch"> | string
  }

  export type JobSearchCreateInput = {
    id?: string
    company: string
    title: string
    description: string
    location: string
    modality: $Enums.Modality
    salaryMin: number
    salaryMax: number
    jobType: $Enums.JobType
    createdAt?: Date | string
    createdByClerkId: string
    organizationClerkId: string
  }

  export type JobSearchUncheckedCreateInput = {
    id?: string
    company: string
    title: string
    description: string
    location: string
    modality: $Enums.Modality
    salaryMin: number
    salaryMax: number
    jobType: $Enums.JobType
    createdAt?: Date | string
    createdByClerkId: string
    organizationClerkId: string
  }

  export type JobSearchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityFieldUpdateOperationsInput | $Enums.Modality
    salaryMin?: IntFieldUpdateOperationsInput | number
    salaryMax?: IntFieldUpdateOperationsInput | number
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByClerkId?: StringFieldUpdateOperationsInput | string
    organizationClerkId?: StringFieldUpdateOperationsInput | string
  }

  export type JobSearchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityFieldUpdateOperationsInput | $Enums.Modality
    salaryMin?: IntFieldUpdateOperationsInput | number
    salaryMax?: IntFieldUpdateOperationsInput | number
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByClerkId?: StringFieldUpdateOperationsInput | string
    organizationClerkId?: StringFieldUpdateOperationsInput | string
  }

  export type JobSearchCreateManyInput = {
    id?: string
    company: string
    title: string
    description: string
    location: string
    modality: $Enums.Modality
    salaryMin: number
    salaryMax: number
    jobType: $Enums.JobType
    createdAt?: Date | string
    createdByClerkId: string
    organizationClerkId: string
  }

  export type JobSearchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityFieldUpdateOperationsInput | $Enums.Modality
    salaryMin?: IntFieldUpdateOperationsInput | number
    salaryMax?: IntFieldUpdateOperationsInput | number
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByClerkId?: StringFieldUpdateOperationsInput | string
    organizationClerkId?: StringFieldUpdateOperationsInput | string
  }

  export type JobSearchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    modality?: EnumModalityFieldUpdateOperationsInput | $Enums.Modality
    salaryMin?: IntFieldUpdateOperationsInput | number
    salaryMax?: IntFieldUpdateOperationsInput | number
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByClerkId?: StringFieldUpdateOperationsInput | string
    organizationClerkId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumModalityFilter<$PrismaModel = never> = {
    equals?: $Enums.Modality | EnumModalityFieldRefInput<$PrismaModel>
    in?: $Enums.Modality[] | ListEnumModalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Modality[] | ListEnumModalityFieldRefInput<$PrismaModel>
    not?: NestedEnumModalityFilter<$PrismaModel> | $Enums.Modality
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type JobSearchCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    modality?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    jobType?: SortOrder
    createdAt?: SortOrder
    createdByClerkId?: SortOrder
    organizationClerkId?: SortOrder
  }

  export type JobSearchAvgOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type JobSearchMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    modality?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    jobType?: SortOrder
    createdAt?: SortOrder
    createdByClerkId?: SortOrder
    organizationClerkId?: SortOrder
  }

  export type JobSearchMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    modality?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    jobType?: SortOrder
    createdAt?: SortOrder
    createdByClerkId?: SortOrder
    organizationClerkId?: SortOrder
  }

  export type JobSearchSumOrderByAggregateInput = {
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumModalityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Modality | EnumModalityFieldRefInput<$PrismaModel>
    in?: $Enums.Modality[] | ListEnumModalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Modality[] | ListEnumModalityFieldRefInput<$PrismaModel>
    not?: NestedEnumModalityWithAggregatesFilter<$PrismaModel> | $Enums.Modality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModalityFilter<$PrismaModel>
    _max?: NestedEnumModalityFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumModalityFieldUpdateOperationsInput = {
    set?: $Enums.Modality
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumJobTypeFieldUpdateOperationsInput = {
    set?: $Enums.JobType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumModalityFilter<$PrismaModel = never> = {
    equals?: $Enums.Modality | EnumModalityFieldRefInput<$PrismaModel>
    in?: $Enums.Modality[] | ListEnumModalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Modality[] | ListEnumModalityFieldRefInput<$PrismaModel>
    not?: NestedEnumModalityFilter<$PrismaModel> | $Enums.Modality
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumModalityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Modality | EnumModalityFieldRefInput<$PrismaModel>
    in?: $Enums.Modality[] | ListEnumModalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Modality[] | ListEnumModalityFieldRefInput<$PrismaModel>
    not?: NestedEnumModalityWithAggregatesFilter<$PrismaModel> | $Enums.Modality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModalityFilter<$PrismaModel>
    _max?: NestedEnumModalityFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}