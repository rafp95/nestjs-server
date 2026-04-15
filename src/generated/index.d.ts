
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
 * Model migrations
 * 
 */
export type migrations = $Result.DefaultSelection<Prisma.$migrationsPayload>
/**
 * Model role
 * 
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model user_roles_role
 * 
 */
export type user_roles_role = $Result.DefaultSelection<Prisma.$user_roles_rolePayload>
/**
 * Model photo
 * 
 */
export type photo = $Result.DefaultSelection<Prisma.$photoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Migrations
 * const migrations = await prisma.migrations.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Migrations
   * const migrations = await prisma.migrations.findMany()
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
   * `prisma.migrations`: Exposes CRUD operations for the **migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Migrations
    * const migrations = await prisma.migrations.findMany()
    * ```
    */
  get migrations(): Prisma.migrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_roles_role`: Exposes CRUD operations for the **user_roles_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_roles_roles
    * const user_roles_roles = await prisma.user_roles_role.findMany()
    * ```
    */
  get user_roles_role(): Prisma.user_roles_roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.photoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    migrations: 'migrations',
    role: 'role',
    user: 'user',
    user_roles_role: 'user_roles_role',
    photo: 'photo'
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
      modelProps: "migrations" | "role" | "user" | "user_roles_role" | "photo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      migrations: {
        payload: Prisma.$migrationsPayload<ExtArgs>
        fields: Prisma.migrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.migrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.migrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findFirst: {
            args: Prisma.migrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.migrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findMany: {
            args: Prisma.migrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>[]
          }
          create: {
            args: Prisma.migrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          createMany: {
            args: Prisma.migrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.migrationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>[]
          }
          delete: {
            args: Prisma.migrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          update: {
            args: Prisma.migrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          deleteMany: {
            args: Prisma.migrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.migrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.migrationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>[]
          }
          upsert: {
            args: Prisma.migrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          aggregate: {
            args: Prisma.MigrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMigrations>
          }
          groupBy: {
            args: Prisma.migrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MigrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.migrationsCountArgs<ExtArgs>
            result: $Utils.Optional<MigrationsCountAggregateOutputType> | number
          }
        }
      }
      role: {
        payload: Prisma.$rolePayload<ExtArgs>
        fields: Prisma.roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.roleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      user_roles_role: {
        payload: Prisma.$user_roles_rolePayload<ExtArgs>
        fields: Prisma.user_roles_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_roles_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_roles_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_rolePayload>
          }
          findFirst: {
            args: Prisma.user_roles_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_roles_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_rolePayload>
          }
          findMany: {
            args: Prisma.user_roles_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_rolePayload>[]
          }
          create: {
            args: Prisma.user_roles_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_rolePayload>
          }
          createMany: {
            args: Prisma.user_roles_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_roles_roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_rolePayload>[]
          }
          delete: {
            args: Prisma.user_roles_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_rolePayload>
          }
          update: {
            args: Prisma.user_roles_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_rolePayload>
          }
          deleteMany: {
            args: Prisma.user_roles_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_roles_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_roles_roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_rolePayload>[]
          }
          upsert: {
            args: Prisma.user_roles_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_roles_rolePayload>
          }
          aggregate: {
            args: Prisma.User_roles_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_roles_role>
          }
          groupBy: {
            args: Prisma.user_roles_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_roles_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_roles_roleCountArgs<ExtArgs>
            result: $Utils.Optional<User_roles_roleCountAggregateOutputType> | number
          }
        }
      }
      photo: {
        payload: Prisma.$photoPayload<ExtArgs>
        fields: Prisma.photoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.photoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.photoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photoPayload>
          }
          findFirst: {
            args: Prisma.photoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.photoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photoPayload>
          }
          findMany: {
            args: Prisma.photoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photoPayload>[]
          }
          create: {
            args: Prisma.photoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photoPayload>
          }
          createMany: {
            args: Prisma.photoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.photoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photoPayload>[]
          }
          delete: {
            args: Prisma.photoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photoPayload>
          }
          update: {
            args: Prisma.photoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photoPayload>
          }
          deleteMany: {
            args: Prisma.photoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.photoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.photoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photoPayload>[]
          }
          upsert: {
            args: Prisma.photoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.photoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.photoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    migrations?: migrationsOmit
    role?: roleOmit
    user?: userOmit
    user_roles_role?: user_roles_roleOmit
    photo?: photoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    user_roles_role: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles_role?: boolean | RoleCountOutputTypeCountUser_roles_roleArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUser_roles_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roles_roleWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    user_roles_role: number
    photos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles_role?: boolean | UserCountOutputTypeCountUser_roles_roleArgs
    photos?: boolean | UserCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_roles_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roles_roleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: photoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model migrations
   */

  export type AggregateMigrations = {
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  export type MigrationsAvgAggregateOutputType = {
    id: number | null
    timestamp: number | null
  }

  export type MigrationsSumAggregateOutputType = {
    id: number | null
    timestamp: bigint | null
  }

  export type MigrationsMinAggregateOutputType = {
    id: number | null
    timestamp: bigint | null
    name: string | null
  }

  export type MigrationsMaxAggregateOutputType = {
    id: number | null
    timestamp: bigint | null
    name: string | null
  }

  export type MigrationsCountAggregateOutputType = {
    id: number
    timestamp: number
    name: number
    _all: number
  }


  export type MigrationsAvgAggregateInputType = {
    id?: true
    timestamp?: true
  }

  export type MigrationsSumAggregateInputType = {
    id?: true
    timestamp?: true
  }

  export type MigrationsMinAggregateInputType = {
    id?: true
    timestamp?: true
    name?: true
  }

  export type MigrationsMaxAggregateInputType = {
    id?: true
    timestamp?: true
    name?: true
  }

  export type MigrationsCountAggregateInputType = {
    id?: true
    timestamp?: true
    name?: true
    _all?: true
  }

  export type MigrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to aggregate.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned migrations
    **/
    _count?: true | MigrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MigrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MigrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MigrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MigrationsMaxAggregateInputType
  }

  export type GetMigrationsAggregateType<T extends MigrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateMigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigrations[P]>
      : GetScalarType<T[P], AggregateMigrations[P]>
  }




  export type migrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: migrationsWhereInput
    orderBy?: migrationsOrderByWithAggregationInput | migrationsOrderByWithAggregationInput[]
    by: MigrationsScalarFieldEnum[] | MigrationsScalarFieldEnum
    having?: migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MigrationsCountAggregateInputType | true
    _avg?: MigrationsAvgAggregateInputType
    _sum?: MigrationsSumAggregateInputType
    _min?: MigrationsMinAggregateInputType
    _max?: MigrationsMaxAggregateInputType
  }

  export type MigrationsGroupByOutputType = {
    id: number
    timestamp: bigint
    name: string
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  type GetMigrationsGroupByPayload<T extends migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MigrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MigrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
            : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
        }
      >
    >


  export type migrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    name?: boolean
  }, ExtArgs["result"]["migrations"]>

  export type migrationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    name?: boolean
  }, ExtArgs["result"]["migrations"]>

  export type migrationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    name?: boolean
  }, ExtArgs["result"]["migrations"]>

  export type migrationsSelectScalar = {
    id?: boolean
    timestamp?: boolean
    name?: boolean
  }

  export type migrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "name", ExtArgs["result"]["migrations"]>

  export type $migrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "migrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: bigint
      name: string
    }, ExtArgs["result"]["migrations"]>
    composites: {}
  }

  type migrationsGetPayload<S extends boolean | null | undefined | migrationsDefaultArgs> = $Result.GetResult<Prisma.$migrationsPayload, S>

  type migrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<migrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MigrationsCountAggregateInputType | true
    }

  export interface migrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['migrations'], meta: { name: 'migrations' } }
    /**
     * Find zero or one Migrations that matches the filter.
     * @param {migrationsFindUniqueArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends migrationsFindUniqueArgs>(args: SelectSubset<T, migrationsFindUniqueArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Migrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {migrationsFindUniqueOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends migrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, migrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends migrationsFindFirstArgs>(args?: SelectSubset<T, migrationsFindFirstArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends migrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, migrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migrations.findMany()
     * 
     * // Get first 10 Migrations
     * const migrations = await prisma.migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const migrationsWithIdOnly = await prisma.migrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends migrationsFindManyArgs>(args?: SelectSubset<T, migrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Migrations.
     * @param {migrationsCreateArgs} args - Arguments to create a Migrations.
     * @example
     * // Create one Migrations
     * const Migrations = await prisma.migrations.create({
     *   data: {
     *     // ... data to create a Migrations
     *   }
     * })
     * 
     */
    create<T extends migrationsCreateArgs>(args: SelectSubset<T, migrationsCreateArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Migrations.
     * @param {migrationsCreateManyArgs} args - Arguments to create many Migrations.
     * @example
     * // Create many Migrations
     * const migrations = await prisma.migrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends migrationsCreateManyArgs>(args?: SelectSubset<T, migrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Migrations and returns the data saved in the database.
     * @param {migrationsCreateManyAndReturnArgs} args - Arguments to create many Migrations.
     * @example
     * // Create many Migrations
     * const migrations = await prisma.migrations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Migrations and only return the `id`
     * const migrationsWithIdOnly = await prisma.migrations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends migrationsCreateManyAndReturnArgs>(args?: SelectSubset<T, migrationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Migrations.
     * @param {migrationsDeleteArgs} args - Arguments to delete one Migrations.
     * @example
     * // Delete one Migrations
     * const Migrations = await prisma.migrations.delete({
     *   where: {
     *     // ... filter to delete one Migrations
     *   }
     * })
     * 
     */
    delete<T extends migrationsDeleteArgs>(args: SelectSubset<T, migrationsDeleteArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Migrations.
     * @param {migrationsUpdateArgs} args - Arguments to update one Migrations.
     * @example
     * // Update one Migrations
     * const migrations = await prisma.migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends migrationsUpdateArgs>(args: SelectSubset<T, migrationsUpdateArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Migrations.
     * @param {migrationsDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends migrationsDeleteManyArgs>(args?: SelectSubset<T, migrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends migrationsUpdateManyArgs>(args: SelectSubset<T, migrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations and returns the data updated in the database.
     * @param {migrationsUpdateManyAndReturnArgs} args - Arguments to update many Migrations.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Migrations and only return the `id`
     * const migrationsWithIdOnly = await prisma.migrations.updateManyAndReturn({
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
    updateManyAndReturn<T extends migrationsUpdateManyAndReturnArgs>(args: SelectSubset<T, migrationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Migrations.
     * @param {migrationsUpsertArgs} args - Arguments to update or create a Migrations.
     * @example
     * // Update or create a Migrations
     * const migrations = await prisma.migrations.upsert({
     *   create: {
     *     // ... data to create a Migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migrations we want to update
     *   }
     * })
     */
    upsert<T extends migrationsUpsertArgs>(args: SelectSubset<T, migrationsUpsertArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migrations.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends migrationsCountArgs>(
      args?: Subset<T, migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MigrationsAggregateArgs>(args: Subset<T, MigrationsAggregateArgs>): Prisma.PrismaPromise<GetMigrationsAggregateType<T>>

    /**
     * Group by Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsGroupByArgs} args - Group by arguments.
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
      T extends migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: migrationsGroupByArgs['orderBy'] }
        : { orderBy?: migrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the migrations model
   */
  readonly fields: migrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__migrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the migrations model
   */
  interface migrationsFieldRefs {
    readonly id: FieldRef<"migrations", 'Int'>
    readonly timestamp: FieldRef<"migrations", 'BigInt'>
    readonly name: FieldRef<"migrations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * migrations findUnique
   */
  export type migrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findUniqueOrThrow
   */
  export type migrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findFirst
   */
  export type migrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations findFirstOrThrow
   */
  export type migrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations findMany
   */
  export type migrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations create
   */
  export type migrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data needed to create a migrations.
     */
    data: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
  }

  /**
   * migrations createMany
   */
  export type migrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many migrations.
     */
    data: migrationsCreateManyInput | migrationsCreateManyInput[]
  }

  /**
   * migrations createManyAndReturn
   */
  export type migrationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data used to create many migrations.
     */
    data: migrationsCreateManyInput | migrationsCreateManyInput[]
  }

  /**
   * migrations update
   */
  export type migrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data needed to update a migrations.
     */
    data: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
    /**
     * Choose, which migrations to update.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations updateMany
   */
  export type migrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update migrations.
     */
    data: XOR<migrationsUpdateManyMutationInput, migrationsUncheckedUpdateManyInput>
    /**
     * Filter which migrations to update
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to update.
     */
    limit?: number
  }

  /**
   * migrations updateManyAndReturn
   */
  export type migrationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data used to update migrations.
     */
    data: XOR<migrationsUpdateManyMutationInput, migrationsUncheckedUpdateManyInput>
    /**
     * Filter which migrations to update
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to update.
     */
    limit?: number
  }

  /**
   * migrations upsert
   */
  export type migrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The filter to search for the migrations to update in case it exists.
     */
    where: migrationsWhereUniqueInput
    /**
     * In case the migrations found by the `where` argument doesn't exist, create a new migrations with this data.
     */
    create: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
    /**
     * In case the migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
  }

  /**
   * migrations delete
   */
  export type migrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter which migrations to delete.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations deleteMany
   */
  export type migrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to delete
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to delete.
     */
    limit?: number
  }

  /**
   * migrations without action
   */
  export type migrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
  }


  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_roles_role?: boolean | role$user_roles_roleArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles_role?: boolean | role$user_roles_roleArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role"
    objects: {
      user_roles_role: Prisma.$user_roles_rolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<Prisma.$rolePayload, S>

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role'], meta: { name: 'role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roleFindUniqueArgs>(args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs>(args: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roleFindFirstArgs>(args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs>(args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roleFindManyArgs>(args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends roleCreateArgs>(args: SelectSubset<T, roleCreateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {roleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roleCreateManyArgs>(args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {roleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roleCreateManyAndReturnArgs>(args?: SelectSubset<T, roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends roleDeleteArgs>(args: SelectSubset<T, roleDeleteArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roleUpdateArgs>(args: SelectSubset<T, roleUpdateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roleDeleteManyArgs>(args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roleUpdateManyArgs>(args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {roleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    updateManyAndReturn<T extends roleUpdateManyAndReturnArgs>(args: SelectSubset<T, roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends roleUpsertArgs>(args: SelectSubset<T, roleUpsertArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
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
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role model
   */
  readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_roles_role<T extends role$user_roles_roleArgs<ExtArgs> = {}>(args?: Subset<T, role$user_roles_roleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_roles_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the role model
   */
  interface roleFieldRefs {
    readonly id: FieldRef<"role", 'Int'>
    readonly name: FieldRef<"role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
  }

  /**
   * role createManyAndReturn
   */
  export type roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
  }

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role updateManyAndReturn
   */
  export type roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * role.user_roles_role
   */
  export type role$user_roles_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_role
     */
    select?: user_roles_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_role
     */
    omit?: user_roles_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_roleInclude<ExtArgs> | null
    where?: user_roles_roleWhereInput
    orderBy?: user_roles_roleOrderByWithRelationInput | user_roles_roleOrderByWithRelationInput[]
    cursor?: user_roles_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_roles_roleScalarFieldEnum | User_roles_roleScalarFieldEnum[]
  }

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    user_roles_role?: boolean | user$user_roles_roleArgs<ExtArgs>
    photos?: boolean | user$photosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_roles_role?: boolean | user$user_roles_roleArgs<ExtArgs>
    photos?: boolean | user$photosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      user_roles_role: Prisma.$user_roles_rolePayload<ExtArgs>[]
      photos: Prisma.$photoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_roles_role<T extends user$user_roles_roleArgs<ExtArgs> = {}>(args?: Subset<T, user$user_roles_roleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_roles_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends user$photosArgs<ExtArgs> = {}>(args?: Subset<T, user$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$photoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.user_roles_role
   */
  export type user$user_roles_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_role
     */
    select?: user_roles_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_role
     */
    omit?: user_roles_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_roleInclude<ExtArgs> | null
    where?: user_roles_roleWhereInput
    orderBy?: user_roles_roleOrderByWithRelationInput | user_roles_roleOrderByWithRelationInput[]
    cursor?: user_roles_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_roles_roleScalarFieldEnum | User_roles_roleScalarFieldEnum[]
  }

  /**
   * user.photos
   */
  export type user$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photo
     */
    select?: photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photo
     */
    omit?: photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photoInclude<ExtArgs> | null
    where?: photoWhereInput
    orderBy?: photoOrderByWithRelationInput | photoOrderByWithRelationInput[]
    cursor?: photoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model user_roles_role
   */

  export type AggregateUser_roles_role = {
    _count: User_roles_roleCountAggregateOutputType | null
    _avg: User_roles_roleAvgAggregateOutputType | null
    _sum: User_roles_roleSumAggregateOutputType | null
    _min: User_roles_roleMinAggregateOutputType | null
    _max: User_roles_roleMaxAggregateOutputType | null
  }

  export type User_roles_roleAvgAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type User_roles_roleSumAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type User_roles_roleMinAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type User_roles_roleMaxAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type User_roles_roleCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }


  export type User_roles_roleAvgAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type User_roles_roleSumAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type User_roles_roleMinAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type User_roles_roleMaxAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type User_roles_roleCountAggregateInputType = {
    userId?: true
    roleId?: true
    _all?: true
  }

  export type User_roles_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles_role to aggregate.
     */
    where?: user_roles_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles_roles to fetch.
     */
    orderBy?: user_roles_roleOrderByWithRelationInput | user_roles_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_roles_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_roles_roles
    **/
    _count?: true | User_roles_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_roles_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_roles_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_roles_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_roles_roleMaxAggregateInputType
  }

  export type GetUser_roles_roleAggregateType<T extends User_roles_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_roles_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_roles_role[P]>
      : GetScalarType<T[P], AggregateUser_roles_role[P]>
  }




  export type user_roles_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roles_roleWhereInput
    orderBy?: user_roles_roleOrderByWithAggregationInput | user_roles_roleOrderByWithAggregationInput[]
    by: User_roles_roleScalarFieldEnum[] | User_roles_roleScalarFieldEnum
    having?: user_roles_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_roles_roleCountAggregateInputType | true
    _avg?: User_roles_roleAvgAggregateInputType
    _sum?: User_roles_roleSumAggregateInputType
    _min?: User_roles_roleMinAggregateInputType
    _max?: User_roles_roleMaxAggregateInputType
  }

  export type User_roles_roleGroupByOutputType = {
    userId: number
    roleId: number
    _count: User_roles_roleCountAggregateOutputType | null
    _avg: User_roles_roleAvgAggregateOutputType | null
    _sum: User_roles_roleSumAggregateOutputType | null
    _min: User_roles_roleMinAggregateOutputType | null
    _max: User_roles_roleMaxAggregateOutputType | null
  }

  type GetUser_roles_roleGroupByPayload<T extends user_roles_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_roles_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_roles_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_roles_roleGroupByOutputType[P]>
            : GetScalarType<T[P], User_roles_roleGroupByOutputType[P]>
        }
      >
    >


  export type user_roles_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    role?: boolean | roleDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_roles_role"]>

  export type user_roles_roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    role?: boolean | roleDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_roles_role"]>

  export type user_roles_roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    role?: boolean | roleDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_roles_role"]>

  export type user_roles_roleSelectScalar = {
    userId?: boolean
    roleId?: boolean
  }

  export type user_roles_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId", ExtArgs["result"]["user_roles_role"]>
  export type user_roles_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_roles_roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_roles_roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $user_roles_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_roles_role"
    objects: {
      role: Prisma.$rolePayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      roleId: number
    }, ExtArgs["result"]["user_roles_role"]>
    composites: {}
  }

  type user_roles_roleGetPayload<S extends boolean | null | undefined | user_roles_roleDefaultArgs> = $Result.GetResult<Prisma.$user_roles_rolePayload, S>

  type user_roles_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_roles_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_roles_roleCountAggregateInputType | true
    }

  export interface user_roles_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_roles_role'], meta: { name: 'user_roles_role' } }
    /**
     * Find zero or one User_roles_role that matches the filter.
     * @param {user_roles_roleFindUniqueArgs} args - Arguments to find a User_roles_role
     * @example
     * // Get one User_roles_role
     * const user_roles_role = await prisma.user_roles_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_roles_roleFindUniqueArgs>(args: SelectSubset<T, user_roles_roleFindUniqueArgs<ExtArgs>>): Prisma__user_roles_roleClient<$Result.GetResult<Prisma.$user_roles_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_roles_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_roles_roleFindUniqueOrThrowArgs} args - Arguments to find a User_roles_role
     * @example
     * // Get one User_roles_role
     * const user_roles_role = await prisma.user_roles_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_roles_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, user_roles_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_roles_roleClient<$Result.GetResult<Prisma.$user_roles_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_roles_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roles_roleFindFirstArgs} args - Arguments to find a User_roles_role
     * @example
     * // Get one User_roles_role
     * const user_roles_role = await prisma.user_roles_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_roles_roleFindFirstArgs>(args?: SelectSubset<T, user_roles_roleFindFirstArgs<ExtArgs>>): Prisma__user_roles_roleClient<$Result.GetResult<Prisma.$user_roles_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_roles_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roles_roleFindFirstOrThrowArgs} args - Arguments to find a User_roles_role
     * @example
     * // Get one User_roles_role
     * const user_roles_role = await prisma.user_roles_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_roles_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, user_roles_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_roles_roleClient<$Result.GetResult<Prisma.$user_roles_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_roles_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roles_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles_roles
     * const user_roles_roles = await prisma.user_roles_role.findMany()
     * 
     * // Get first 10 User_roles_roles
     * const user_roles_roles = await prisma.user_roles_role.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const user_roles_roleWithUserIdOnly = await prisma.user_roles_role.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends user_roles_roleFindManyArgs>(args?: SelectSubset<T, user_roles_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_roles_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_roles_role.
     * @param {user_roles_roleCreateArgs} args - Arguments to create a User_roles_role.
     * @example
     * // Create one User_roles_role
     * const User_roles_role = await prisma.user_roles_role.create({
     *   data: {
     *     // ... data to create a User_roles_role
     *   }
     * })
     * 
     */
    create<T extends user_roles_roleCreateArgs>(args: SelectSubset<T, user_roles_roleCreateArgs<ExtArgs>>): Prisma__user_roles_roleClient<$Result.GetResult<Prisma.$user_roles_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_roles_roles.
     * @param {user_roles_roleCreateManyArgs} args - Arguments to create many User_roles_roles.
     * @example
     * // Create many User_roles_roles
     * const user_roles_role = await prisma.user_roles_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_roles_roleCreateManyArgs>(args?: SelectSubset<T, user_roles_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_roles_roles and returns the data saved in the database.
     * @param {user_roles_roleCreateManyAndReturnArgs} args - Arguments to create many User_roles_roles.
     * @example
     * // Create many User_roles_roles
     * const user_roles_role = await prisma.user_roles_role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_roles_roles and only return the `userId`
     * const user_roles_roleWithUserIdOnly = await prisma.user_roles_role.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_roles_roleCreateManyAndReturnArgs>(args?: SelectSubset<T, user_roles_roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_roles_rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_roles_role.
     * @param {user_roles_roleDeleteArgs} args - Arguments to delete one User_roles_role.
     * @example
     * // Delete one User_roles_role
     * const User_roles_role = await prisma.user_roles_role.delete({
     *   where: {
     *     // ... filter to delete one User_roles_role
     *   }
     * })
     * 
     */
    delete<T extends user_roles_roleDeleteArgs>(args: SelectSubset<T, user_roles_roleDeleteArgs<ExtArgs>>): Prisma__user_roles_roleClient<$Result.GetResult<Prisma.$user_roles_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_roles_role.
     * @param {user_roles_roleUpdateArgs} args - Arguments to update one User_roles_role.
     * @example
     * // Update one User_roles_role
     * const user_roles_role = await prisma.user_roles_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_roles_roleUpdateArgs>(args: SelectSubset<T, user_roles_roleUpdateArgs<ExtArgs>>): Prisma__user_roles_roleClient<$Result.GetResult<Prisma.$user_roles_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_roles_roles.
     * @param {user_roles_roleDeleteManyArgs} args - Arguments to filter User_roles_roles to delete.
     * @example
     * // Delete a few User_roles_roles
     * const { count } = await prisma.user_roles_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_roles_roleDeleteManyArgs>(args?: SelectSubset<T, user_roles_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roles_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles_roles
     * const user_roles_role = await prisma.user_roles_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_roles_roleUpdateManyArgs>(args: SelectSubset<T, user_roles_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles_roles and returns the data updated in the database.
     * @param {user_roles_roleUpdateManyAndReturnArgs} args - Arguments to update many User_roles_roles.
     * @example
     * // Update many User_roles_roles
     * const user_roles_role = await prisma.user_roles_role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_roles_roles and only return the `userId`
     * const user_roles_roleWithUserIdOnly = await prisma.user_roles_role.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends user_roles_roleUpdateManyAndReturnArgs>(args: SelectSubset<T, user_roles_roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_roles_rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_roles_role.
     * @param {user_roles_roleUpsertArgs} args - Arguments to update or create a User_roles_role.
     * @example
     * // Update or create a User_roles_role
     * const user_roles_role = await prisma.user_roles_role.upsert({
     *   create: {
     *     // ... data to create a User_roles_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_roles_role we want to update
     *   }
     * })
     */
    upsert<T extends user_roles_roleUpsertArgs>(args: SelectSubset<T, user_roles_roleUpsertArgs<ExtArgs>>): Prisma__user_roles_roleClient<$Result.GetResult<Prisma.$user_roles_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_roles_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roles_roleCountArgs} args - Arguments to filter User_roles_roles to count.
     * @example
     * // Count the number of User_roles_roles
     * const count = await prisma.user_roles_role.count({
     *   where: {
     *     // ... the filter for the User_roles_roles we want to count
     *   }
     * })
    **/
    count<T extends user_roles_roleCountArgs>(
      args?: Subset<T, user_roles_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_roles_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_roles_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_roles_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_roles_roleAggregateArgs>(args: Subset<T, User_roles_roleAggregateArgs>): Prisma.PrismaPromise<GetUser_roles_roleAggregateType<T>>

    /**
     * Group by User_roles_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roles_roleGroupByArgs} args - Group by arguments.
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
      T extends user_roles_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_roles_roleGroupByArgs['orderBy'] }
        : { orderBy?: user_roles_roleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_roles_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_roles_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_roles_role model
   */
  readonly fields: user_roles_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_roles_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_roles_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roleDefaultArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_roles_role model
   */
  interface user_roles_roleFieldRefs {
    readonly userId: FieldRef<"user_roles_role", 'Int'>
    readonly roleId: FieldRef<"user_roles_role", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_roles_role findUnique
   */
  export type user_roles_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_role
     */
    select?: user_roles_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_role
     */
    omit?: user_roles_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_roles_role to fetch.
     */
    where: user_roles_roleWhereUniqueInput
  }

  /**
   * user_roles_role findUniqueOrThrow
   */
  export type user_roles_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_role
     */
    select?: user_roles_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_role
     */
    omit?: user_roles_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_roles_role to fetch.
     */
    where: user_roles_roleWhereUniqueInput
  }

  /**
   * user_roles_role findFirst
   */
  export type user_roles_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_role
     */
    select?: user_roles_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_role
     */
    omit?: user_roles_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_roles_role to fetch.
     */
    where?: user_roles_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles_roles to fetch.
     */
    orderBy?: user_roles_roleOrderByWithRelationInput | user_roles_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles_roles.
     */
    cursor?: user_roles_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles_roles.
     */
    distinct?: User_roles_roleScalarFieldEnum | User_roles_roleScalarFieldEnum[]
  }

  /**
   * user_roles_role findFirstOrThrow
   */
  export type user_roles_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_role
     */
    select?: user_roles_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_role
     */
    omit?: user_roles_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_roles_role to fetch.
     */
    where?: user_roles_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles_roles to fetch.
     */
    orderBy?: user_roles_roleOrderByWithRelationInput | user_roles_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles_roles.
     */
    cursor?: user_roles_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles_roles.
     */
    distinct?: User_roles_roleScalarFieldEnum | User_roles_roleScalarFieldEnum[]
  }

  /**
   * user_roles_role findMany
   */
  export type user_roles_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_role
     */
    select?: user_roles_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_role
     */
    omit?: user_roles_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_roles_roles to fetch.
     */
    where?: user_roles_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles_roles to fetch.
     */
    orderBy?: user_roles_roleOrderByWithRelationInput | user_roles_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_roles_roles.
     */
    cursor?: user_roles_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles_roles.
     */
    skip?: number
    distinct?: User_roles_roleScalarFieldEnum | User_roles_roleScalarFieldEnum[]
  }

  /**
   * user_roles_role create
   */
  export type user_roles_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_role
     */
    select?: user_roles_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_role
     */
    omit?: user_roles_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_roleInclude<ExtArgs> | null
    /**
     * The data needed to create a user_roles_role.
     */
    data: XOR<user_roles_roleCreateInput, user_roles_roleUncheckedCreateInput>
  }

  /**
   * user_roles_role createMany
   */
  export type user_roles_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles_roles.
     */
    data: user_roles_roleCreateManyInput | user_roles_roleCreateManyInput[]
  }

  /**
   * user_roles_role createManyAndReturn
   */
  export type user_roles_roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_role
     */
    select?: user_roles_roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_role
     */
    omit?: user_roles_roleOmit<ExtArgs> | null
    /**
     * The data used to create many user_roles_roles.
     */
    data: user_roles_roleCreateManyInput | user_roles_roleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_roleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_roles_role update
   */
  export type user_roles_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_role
     */
    select?: user_roles_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_role
     */
    omit?: user_roles_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_roleInclude<ExtArgs> | null
    /**
     * The data needed to update a user_roles_role.
     */
    data: XOR<user_roles_roleUpdateInput, user_roles_roleUncheckedUpdateInput>
    /**
     * Choose, which user_roles_role to update.
     */
    where: user_roles_roleWhereUniqueInput
  }

  /**
   * user_roles_role updateMany
   */
  export type user_roles_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles_roles.
     */
    data: XOR<user_roles_roleUpdateManyMutationInput, user_roles_roleUncheckedUpdateManyInput>
    /**
     * Filter which user_roles_roles to update
     */
    where?: user_roles_roleWhereInput
    /**
     * Limit how many user_roles_roles to update.
     */
    limit?: number
  }

  /**
   * user_roles_role updateManyAndReturn
   */
  export type user_roles_roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_role
     */
    select?: user_roles_roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_role
     */
    omit?: user_roles_roleOmit<ExtArgs> | null
    /**
     * The data used to update user_roles_roles.
     */
    data: XOR<user_roles_roleUpdateManyMutationInput, user_roles_roleUncheckedUpdateManyInput>
    /**
     * Filter which user_roles_roles to update
     */
    where?: user_roles_roleWhereInput
    /**
     * Limit how many user_roles_roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_roleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_roles_role upsert
   */
  export type user_roles_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_role
     */
    select?: user_roles_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_role
     */
    omit?: user_roles_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_roleInclude<ExtArgs> | null
    /**
     * The filter to search for the user_roles_role to update in case it exists.
     */
    where: user_roles_roleWhereUniqueInput
    /**
     * In case the user_roles_role found by the `where` argument doesn't exist, create a new user_roles_role with this data.
     */
    create: XOR<user_roles_roleCreateInput, user_roles_roleUncheckedCreateInput>
    /**
     * In case the user_roles_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_roles_roleUpdateInput, user_roles_roleUncheckedUpdateInput>
  }

  /**
   * user_roles_role delete
   */
  export type user_roles_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_role
     */
    select?: user_roles_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_role
     */
    omit?: user_roles_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_roleInclude<ExtArgs> | null
    /**
     * Filter which user_roles_role to delete.
     */
    where: user_roles_roleWhereUniqueInput
  }

  /**
   * user_roles_role deleteMany
   */
  export type user_roles_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles_roles to delete
     */
    where?: user_roles_roleWhereInput
    /**
     * Limit how many user_roles_roles to delete.
     */
    limit?: number
  }

  /**
   * user_roles_role without action
   */
  export type user_roles_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_roles_role
     */
    select?: user_roles_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_roles_role
     */
    omit?: user_roles_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roles_roleInclude<ExtArgs> | null
  }


  /**
   * Model photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PhotoSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: number | null
    fileName: string | null
    description: string | null
    userId: number | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: number | null
    fileName: string | null
    description: string | null
    userId: number | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    fileName: number
    description: number
    userId: number
    _all: number
  }


  export type PhotoAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PhotoSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    fileName?: true
    description?: true
    userId?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    fileName?: true
    description?: true
    userId?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    fileName?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which photo to aggregate.
     */
    where?: photoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photoOrderByWithRelationInput | photoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: photoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type photoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: photoWhereInput
    orderBy?: photoOrderByWithAggregationInput | photoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: photoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _avg?: PhotoAvgAggregateInputType
    _sum?: PhotoSumAggregateInputType
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: number
    fileName: string
    description: string | null
    userId: number
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends photoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type photoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type photoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type photoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type photoSelectScalar = {
    id?: boolean
    fileName?: boolean
    description?: boolean
    userId?: boolean
  }

  export type photoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "description" | "userId", ExtArgs["result"]["photo"]>
  export type photoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type photoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type photoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $photoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "photo"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileName: string
      description: string | null
      userId: number
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type photoGetPayload<S extends boolean | null | undefined | photoDefaultArgs> = $Result.GetResult<Prisma.$photoPayload, S>

  type photoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<photoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface photoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['photo'], meta: { name: 'photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {photoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends photoFindUniqueArgs>(args: SelectSubset<T, photoFindUniqueArgs<ExtArgs>>): Prisma__photoClient<$Result.GetResult<Prisma.$photoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {photoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends photoFindUniqueOrThrowArgs>(args: SelectSubset<T, photoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__photoClient<$Result.GetResult<Prisma.$photoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends photoFindFirstArgs>(args?: SelectSubset<T, photoFindFirstArgs<ExtArgs>>): Prisma__photoClient<$Result.GetResult<Prisma.$photoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends photoFindFirstOrThrowArgs>(args?: SelectSubset<T, photoFindFirstOrThrowArgs<ExtArgs>>): Prisma__photoClient<$Result.GetResult<Prisma.$photoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends photoFindManyArgs>(args?: SelectSubset<T, photoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$photoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {photoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends photoCreateArgs>(args: SelectSubset<T, photoCreateArgs<ExtArgs>>): Prisma__photoClient<$Result.GetResult<Prisma.$photoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {photoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends photoCreateManyArgs>(args?: SelectSubset<T, photoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {photoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends photoCreateManyAndReturnArgs>(args?: SelectSubset<T, photoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$photoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Photo.
     * @param {photoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends photoDeleteArgs>(args: SelectSubset<T, photoDeleteArgs<ExtArgs>>): Prisma__photoClient<$Result.GetResult<Prisma.$photoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {photoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends photoUpdateArgs>(args: SelectSubset<T, photoUpdateArgs<ExtArgs>>): Prisma__photoClient<$Result.GetResult<Prisma.$photoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {photoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends photoDeleteManyArgs>(args?: SelectSubset<T, photoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends photoUpdateManyArgs>(args: SelectSubset<T, photoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos and returns the data updated in the database.
     * @param {photoUpdateManyAndReturnArgs} args - Arguments to update many Photos.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.updateManyAndReturn({
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
    updateManyAndReturn<T extends photoUpdateManyAndReturnArgs>(args: SelectSubset<T, photoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$photoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Photo.
     * @param {photoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends photoUpsertArgs>(args: SelectSubset<T, photoUpsertArgs<ExtArgs>>): Prisma__photoClient<$Result.GetResult<Prisma.$photoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends photoCountArgs>(
      args?: Subset<T, photoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photoGroupByArgs} args - Group by arguments.
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
      T extends photoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: photoGroupByArgs['orderBy'] }
        : { orderBy?: photoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, photoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the photo model
   */
  readonly fields: photoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__photoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the photo model
   */
  interface photoFieldRefs {
    readonly id: FieldRef<"photo", 'Int'>
    readonly fileName: FieldRef<"photo", 'String'>
    readonly description: FieldRef<"photo", 'String'>
    readonly userId: FieldRef<"photo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * photo findUnique
   */
  export type photoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photo
     */
    select?: photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photo
     */
    omit?: photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photoInclude<ExtArgs> | null
    /**
     * Filter, which photo to fetch.
     */
    where: photoWhereUniqueInput
  }

  /**
   * photo findUniqueOrThrow
   */
  export type photoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photo
     */
    select?: photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photo
     */
    omit?: photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photoInclude<ExtArgs> | null
    /**
     * Filter, which photo to fetch.
     */
    where: photoWhereUniqueInput
  }

  /**
   * photo findFirst
   */
  export type photoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photo
     */
    select?: photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photo
     */
    omit?: photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photoInclude<ExtArgs> | null
    /**
     * Filter, which photo to fetch.
     */
    where?: photoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photoOrderByWithRelationInput | photoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for photos.
     */
    cursor?: photoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * photo findFirstOrThrow
   */
  export type photoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photo
     */
    select?: photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photo
     */
    omit?: photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photoInclude<ExtArgs> | null
    /**
     * Filter, which photo to fetch.
     */
    where?: photoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photoOrderByWithRelationInput | photoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for photos.
     */
    cursor?: photoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * photo findMany
   */
  export type photoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photo
     */
    select?: photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photo
     */
    omit?: photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photoInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where?: photoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photoOrderByWithRelationInput | photoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing photos.
     */
    cursor?: photoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * photo create
   */
  export type photoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photo
     */
    select?: photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photo
     */
    omit?: photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photoInclude<ExtArgs> | null
    /**
     * The data needed to create a photo.
     */
    data: XOR<photoCreateInput, photoUncheckedCreateInput>
  }

  /**
   * photo createMany
   */
  export type photoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many photos.
     */
    data: photoCreateManyInput | photoCreateManyInput[]
  }

  /**
   * photo createManyAndReturn
   */
  export type photoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photo
     */
    select?: photoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the photo
     */
    omit?: photoOmit<ExtArgs> | null
    /**
     * The data used to create many photos.
     */
    data: photoCreateManyInput | photoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * photo update
   */
  export type photoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photo
     */
    select?: photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photo
     */
    omit?: photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photoInclude<ExtArgs> | null
    /**
     * The data needed to update a photo.
     */
    data: XOR<photoUpdateInput, photoUncheckedUpdateInput>
    /**
     * Choose, which photo to update.
     */
    where: photoWhereUniqueInput
  }

  /**
   * photo updateMany
   */
  export type photoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update photos.
     */
    data: XOR<photoUpdateManyMutationInput, photoUncheckedUpdateManyInput>
    /**
     * Filter which photos to update
     */
    where?: photoWhereInput
    /**
     * Limit how many photos to update.
     */
    limit?: number
  }

  /**
   * photo updateManyAndReturn
   */
  export type photoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photo
     */
    select?: photoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the photo
     */
    omit?: photoOmit<ExtArgs> | null
    /**
     * The data used to update photos.
     */
    data: XOR<photoUpdateManyMutationInput, photoUncheckedUpdateManyInput>
    /**
     * Filter which photos to update
     */
    where?: photoWhereInput
    /**
     * Limit how many photos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * photo upsert
   */
  export type photoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photo
     */
    select?: photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photo
     */
    omit?: photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photoInclude<ExtArgs> | null
    /**
     * The filter to search for the photo to update in case it exists.
     */
    where: photoWhereUniqueInput
    /**
     * In case the photo found by the `where` argument doesn't exist, create a new photo with this data.
     */
    create: XOR<photoCreateInput, photoUncheckedCreateInput>
    /**
     * In case the photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<photoUpdateInput, photoUncheckedUpdateInput>
  }

  /**
   * photo delete
   */
  export type photoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photo
     */
    select?: photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photo
     */
    omit?: photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photoInclude<ExtArgs> | null
    /**
     * Filter which photo to delete.
     */
    where: photoWhereUniqueInput
  }

  /**
   * photo deleteMany
   */
  export type photoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which photos to delete
     */
    where?: photoWhereInput
    /**
     * Limit how many photos to delete.
     */
    limit?: number
  }

  /**
   * photo without action
   */
  export type photoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photo
     */
    select?: photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photo
     */
    omit?: photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MigrationsScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    name: 'name'
  };

  export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_roles_roleScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type User_roles_roleScalarFieldEnum = (typeof User_roles_roleScalarFieldEnum)[keyof typeof User_roles_roleScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    description: 'description',
    userId: 'userId'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type migrationsWhereInput = {
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    id?: IntFilter<"migrations"> | number
    timestamp?: BigIntFilter<"migrations"> | bigint | number
    name?: StringFilter<"migrations"> | string
  }

  export type migrationsOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    name?: SortOrder
  }

  export type migrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    timestamp?: BigIntFilter<"migrations"> | bigint | number
    name?: StringFilter<"migrations"> | string
  }, "id">

  export type migrationsOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    name?: SortOrder
    _count?: migrationsCountOrderByAggregateInput
    _avg?: migrationsAvgOrderByAggregateInput
    _max?: migrationsMaxOrderByAggregateInput
    _min?: migrationsMinOrderByAggregateInput
    _sum?: migrationsSumOrderByAggregateInput
  }

  export type migrationsScalarWhereWithAggregatesInput = {
    AND?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    OR?: migrationsScalarWhereWithAggregatesInput[]
    NOT?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"migrations"> | number
    timestamp?: BigIntWithAggregatesFilter<"migrations"> | bigint | number
    name?: StringWithAggregatesFilter<"migrations"> | string
  }

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    id?: IntFilter<"role"> | number
    name?: StringFilter<"role"> | string
    user_roles_role?: User_roles_roleListRelationFilter
  }

  export type roleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user_roles_role?: user_roles_roleOrderByRelationAggregateInput
  }

  export type roleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    name?: StringFilter<"role"> | string
    user_roles_role?: User_roles_roleListRelationFilter
  }, "id">

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: roleCountOrderByAggregateInput
    _avg?: roleAvgOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
    _sum?: roleSumOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    OR?: roleScalarWhereWithAggregatesInput[]
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"role"> | number
    name?: StringWithAggregatesFilter<"role"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    user_roles_role?: User_roles_roleListRelationFilter
    photos?: PhotoListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_roles_role?: user_roles_roleOrderByRelationAggregateInput
    photos?: photoOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    user_roles_role?: User_roles_roleListRelationFilter
    photos?: PhotoListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
  }

  export type user_roles_roleWhereInput = {
    AND?: user_roles_roleWhereInput | user_roles_roleWhereInput[]
    OR?: user_roles_roleWhereInput[]
    NOT?: user_roles_roleWhereInput | user_roles_roleWhereInput[]
    userId?: IntFilter<"user_roles_role"> | number
    roleId?: IntFilter<"user_roles_role"> | number
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type user_roles_roleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    role?: roleOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type user_roles_roleWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: user_roles_roleUserIdRoleIdCompoundUniqueInput
    AND?: user_roles_roleWhereInput | user_roles_roleWhereInput[]
    OR?: user_roles_roleWhereInput[]
    NOT?: user_roles_roleWhereInput | user_roles_roleWhereInput[]
    userId?: IntFilter<"user_roles_role"> | number
    roleId?: IntFilter<"user_roles_role"> | number
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "userId_roleId">

  export type user_roles_roleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    _count?: user_roles_roleCountOrderByAggregateInput
    _avg?: user_roles_roleAvgOrderByAggregateInput
    _max?: user_roles_roleMaxOrderByAggregateInput
    _min?: user_roles_roleMinOrderByAggregateInput
    _sum?: user_roles_roleSumOrderByAggregateInput
  }

  export type user_roles_roleScalarWhereWithAggregatesInput = {
    AND?: user_roles_roleScalarWhereWithAggregatesInput | user_roles_roleScalarWhereWithAggregatesInput[]
    OR?: user_roles_roleScalarWhereWithAggregatesInput[]
    NOT?: user_roles_roleScalarWhereWithAggregatesInput | user_roles_roleScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"user_roles_role"> | number
    roleId?: IntWithAggregatesFilter<"user_roles_role"> | number
  }

  export type photoWhereInput = {
    AND?: photoWhereInput | photoWhereInput[]
    OR?: photoWhereInput[]
    NOT?: photoWhereInput | photoWhereInput[]
    id?: IntFilter<"photo"> | number
    fileName?: StringFilter<"photo"> | string
    description?: StringNullableFilter<"photo"> | string | null
    userId?: IntFilter<"photo"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type photoOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type photoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: photoWhereInput | photoWhereInput[]
    OR?: photoWhereInput[]
    NOT?: photoWhereInput | photoWhereInput[]
    fileName?: StringFilter<"photo"> | string
    description?: StringNullableFilter<"photo"> | string | null
    userId?: IntFilter<"photo"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type photoOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: photoCountOrderByAggregateInput
    _avg?: photoAvgOrderByAggregateInput
    _max?: photoMaxOrderByAggregateInput
    _min?: photoMinOrderByAggregateInput
    _sum?: photoSumOrderByAggregateInput
  }

  export type photoScalarWhereWithAggregatesInput = {
    AND?: photoScalarWhereWithAggregatesInput | photoScalarWhereWithAggregatesInput[]
    OR?: photoScalarWhereWithAggregatesInput[]
    NOT?: photoScalarWhereWithAggregatesInput | photoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"photo"> | number
    fileName?: StringWithAggregatesFilter<"photo"> | string
    description?: StringNullableWithAggregatesFilter<"photo"> | string | null
    userId?: IntWithAggregatesFilter<"photo"> | number
  }

  export type migrationsCreateInput = {
    timestamp: bigint | number
    name: string
  }

  export type migrationsUncheckedCreateInput = {
    id?: number
    timestamp: bigint | number
    name: string
  }

  export type migrationsUpdateInput = {
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type migrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type migrationsCreateManyInput = {
    id?: number
    timestamp: bigint | number
    name: string
  }

  export type migrationsUpdateManyMutationInput = {
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type migrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type roleCreateInput = {
    name: string
    user_roles_role?: user_roles_roleCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateInput = {
    id?: number
    name: string
    user_roles_role?: user_roles_roleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    user_roles_role?: user_roles_roleUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_roles_role?: user_roles_roleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleCreateManyInput = {
    id?: number
    name: string
  }

  export type roleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    name: string
    email: string
    password: string
    user_roles_role?: user_roles_roleCreateNestedManyWithoutUserInput
    photos?: photoCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    user_roles_role?: user_roles_roleUncheckedCreateNestedManyWithoutUserInput
    photos?: photoUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_roles_role?: user_roles_roleUpdateManyWithoutUserNestedInput
    photos?: photoUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_roles_role?: user_roles_roleUncheckedUpdateManyWithoutUserNestedInput
    photos?: photoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type user_roles_roleCreateInput = {
    role: roleCreateNestedOneWithoutUser_roles_roleInput
    user: userCreateNestedOneWithoutUser_roles_roleInput
  }

  export type user_roles_roleUncheckedCreateInput = {
    userId: number
    roleId: number
  }

  export type user_roles_roleUpdateInput = {
    role?: roleUpdateOneRequiredWithoutUser_roles_roleNestedInput
    user?: userUpdateOneRequiredWithoutUser_roles_roleNestedInput
  }

  export type user_roles_roleUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type user_roles_roleCreateManyInput = {
    userId: number
    roleId: number
  }

  export type user_roles_roleUpdateManyMutationInput = {

  }

  export type user_roles_roleUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type photoCreateInput = {
    fileName: string
    description?: string | null
    user: userCreateNestedOneWithoutPhotosInput
  }

  export type photoUncheckedCreateInput = {
    id?: number
    fileName: string
    description?: string | null
    userId: number
  }

  export type photoUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type photoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type photoCreateManyInput = {
    id?: number
    fileName: string
    description?: string | null
    userId: number
  }

  export type photoUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type photoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type migrationsCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    name?: SortOrder
  }

  export type migrationsAvgOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
  }

  export type migrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    name?: SortOrder
  }

  export type migrationsMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    name?: SortOrder
  }

  export type migrationsSumOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type User_roles_roleListRelationFilter = {
    every?: user_roles_roleWhereInput
    some?: user_roles_roleWhereInput
    none?: user_roles_roleWhereInput
  }

  export type user_roles_roleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type roleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type roleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PhotoListRelationFilter = {
    every?: photoWhereInput
    some?: photoWhereInput
    none?: photoWhereInput
  }

  export type photoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleScalarRelationFilter = {
    is?: roleWhereInput
    isNot?: roleWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type user_roles_roleUserIdRoleIdCompoundUniqueInput = {
    userId: number
    roleId: number
  }

  export type user_roles_roleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type user_roles_roleAvgOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type user_roles_roleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type user_roles_roleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type user_roles_roleSumOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type photoCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type photoAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type photoMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type photoMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type photoSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_roles_roleCreateNestedManyWithoutRoleInput = {
    create?: XOR<user_roles_roleCreateWithoutRoleInput, user_roles_roleUncheckedCreateWithoutRoleInput> | user_roles_roleCreateWithoutRoleInput[] | user_roles_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roles_roleCreateOrConnectWithoutRoleInput | user_roles_roleCreateOrConnectWithoutRoleInput[]
    createMany?: user_roles_roleCreateManyRoleInputEnvelope
    connect?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
  }

  export type user_roles_roleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<user_roles_roleCreateWithoutRoleInput, user_roles_roleUncheckedCreateWithoutRoleInput> | user_roles_roleCreateWithoutRoleInput[] | user_roles_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roles_roleCreateOrConnectWithoutRoleInput | user_roles_roleCreateOrConnectWithoutRoleInput[]
    createMany?: user_roles_roleCreateManyRoleInputEnvelope
    connect?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
  }

  export type user_roles_roleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<user_roles_roleCreateWithoutRoleInput, user_roles_roleUncheckedCreateWithoutRoleInput> | user_roles_roleCreateWithoutRoleInput[] | user_roles_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roles_roleCreateOrConnectWithoutRoleInput | user_roles_roleCreateOrConnectWithoutRoleInput[]
    upsert?: user_roles_roleUpsertWithWhereUniqueWithoutRoleInput | user_roles_roleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: user_roles_roleCreateManyRoleInputEnvelope
    set?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    disconnect?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    delete?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    connect?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    update?: user_roles_roleUpdateWithWhereUniqueWithoutRoleInput | user_roles_roleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: user_roles_roleUpdateManyWithWhereWithoutRoleInput | user_roles_roleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: user_roles_roleScalarWhereInput | user_roles_roleScalarWhereInput[]
  }

  export type user_roles_roleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<user_roles_roleCreateWithoutRoleInput, user_roles_roleUncheckedCreateWithoutRoleInput> | user_roles_roleCreateWithoutRoleInput[] | user_roles_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: user_roles_roleCreateOrConnectWithoutRoleInput | user_roles_roleCreateOrConnectWithoutRoleInput[]
    upsert?: user_roles_roleUpsertWithWhereUniqueWithoutRoleInput | user_roles_roleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: user_roles_roleCreateManyRoleInputEnvelope
    set?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    disconnect?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    delete?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    connect?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    update?: user_roles_roleUpdateWithWhereUniqueWithoutRoleInput | user_roles_roleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: user_roles_roleUpdateManyWithWhereWithoutRoleInput | user_roles_roleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: user_roles_roleScalarWhereInput | user_roles_roleScalarWhereInput[]
  }

  export type user_roles_roleCreateNestedManyWithoutUserInput = {
    create?: XOR<user_roles_roleCreateWithoutUserInput, user_roles_roleUncheckedCreateWithoutUserInput> | user_roles_roleCreateWithoutUserInput[] | user_roles_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roles_roleCreateOrConnectWithoutUserInput | user_roles_roleCreateOrConnectWithoutUserInput[]
    createMany?: user_roles_roleCreateManyUserInputEnvelope
    connect?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
  }

  export type photoCreateNestedManyWithoutUserInput = {
    create?: XOR<photoCreateWithoutUserInput, photoUncheckedCreateWithoutUserInput> | photoCreateWithoutUserInput[] | photoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: photoCreateOrConnectWithoutUserInput | photoCreateOrConnectWithoutUserInput[]
    createMany?: photoCreateManyUserInputEnvelope
    connect?: photoWhereUniqueInput | photoWhereUniqueInput[]
  }

  export type user_roles_roleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_roles_roleCreateWithoutUserInput, user_roles_roleUncheckedCreateWithoutUserInput> | user_roles_roleCreateWithoutUserInput[] | user_roles_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roles_roleCreateOrConnectWithoutUserInput | user_roles_roleCreateOrConnectWithoutUserInput[]
    createMany?: user_roles_roleCreateManyUserInputEnvelope
    connect?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
  }

  export type photoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<photoCreateWithoutUserInput, photoUncheckedCreateWithoutUserInput> | photoCreateWithoutUserInput[] | photoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: photoCreateOrConnectWithoutUserInput | photoCreateOrConnectWithoutUserInput[]
    createMany?: photoCreateManyUserInputEnvelope
    connect?: photoWhereUniqueInput | photoWhereUniqueInput[]
  }

  export type user_roles_roleUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_roles_roleCreateWithoutUserInput, user_roles_roleUncheckedCreateWithoutUserInput> | user_roles_roleCreateWithoutUserInput[] | user_roles_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roles_roleCreateOrConnectWithoutUserInput | user_roles_roleCreateOrConnectWithoutUserInput[]
    upsert?: user_roles_roleUpsertWithWhereUniqueWithoutUserInput | user_roles_roleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_roles_roleCreateManyUserInputEnvelope
    set?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    disconnect?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    delete?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    connect?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    update?: user_roles_roleUpdateWithWhereUniqueWithoutUserInput | user_roles_roleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_roles_roleUpdateManyWithWhereWithoutUserInput | user_roles_roleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_roles_roleScalarWhereInput | user_roles_roleScalarWhereInput[]
  }

  export type photoUpdateManyWithoutUserNestedInput = {
    create?: XOR<photoCreateWithoutUserInput, photoUncheckedCreateWithoutUserInput> | photoCreateWithoutUserInput[] | photoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: photoCreateOrConnectWithoutUserInput | photoCreateOrConnectWithoutUserInput[]
    upsert?: photoUpsertWithWhereUniqueWithoutUserInput | photoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: photoCreateManyUserInputEnvelope
    set?: photoWhereUniqueInput | photoWhereUniqueInput[]
    disconnect?: photoWhereUniqueInput | photoWhereUniqueInput[]
    delete?: photoWhereUniqueInput | photoWhereUniqueInput[]
    connect?: photoWhereUniqueInput | photoWhereUniqueInput[]
    update?: photoUpdateWithWhereUniqueWithoutUserInput | photoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: photoUpdateManyWithWhereWithoutUserInput | photoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: photoScalarWhereInput | photoScalarWhereInput[]
  }

  export type user_roles_roleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_roles_roleCreateWithoutUserInput, user_roles_roleUncheckedCreateWithoutUserInput> | user_roles_roleCreateWithoutUserInput[] | user_roles_roleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_roles_roleCreateOrConnectWithoutUserInput | user_roles_roleCreateOrConnectWithoutUserInput[]
    upsert?: user_roles_roleUpsertWithWhereUniqueWithoutUserInput | user_roles_roleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_roles_roleCreateManyUserInputEnvelope
    set?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    disconnect?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    delete?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    connect?: user_roles_roleWhereUniqueInput | user_roles_roleWhereUniqueInput[]
    update?: user_roles_roleUpdateWithWhereUniqueWithoutUserInput | user_roles_roleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_roles_roleUpdateManyWithWhereWithoutUserInput | user_roles_roleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_roles_roleScalarWhereInput | user_roles_roleScalarWhereInput[]
  }

  export type photoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<photoCreateWithoutUserInput, photoUncheckedCreateWithoutUserInput> | photoCreateWithoutUserInput[] | photoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: photoCreateOrConnectWithoutUserInput | photoCreateOrConnectWithoutUserInput[]
    upsert?: photoUpsertWithWhereUniqueWithoutUserInput | photoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: photoCreateManyUserInputEnvelope
    set?: photoWhereUniqueInput | photoWhereUniqueInput[]
    disconnect?: photoWhereUniqueInput | photoWhereUniqueInput[]
    delete?: photoWhereUniqueInput | photoWhereUniqueInput[]
    connect?: photoWhereUniqueInput | photoWhereUniqueInput[]
    update?: photoUpdateWithWhereUniqueWithoutUserInput | photoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: photoUpdateManyWithWhereWithoutUserInput | photoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: photoScalarWhereInput | photoScalarWhereInput[]
  }

  export type roleCreateNestedOneWithoutUser_roles_roleInput = {
    create?: XOR<roleCreateWithoutUser_roles_roleInput, roleUncheckedCreateWithoutUser_roles_roleInput>
    connectOrCreate?: roleCreateOrConnectWithoutUser_roles_roleInput
    connect?: roleWhereUniqueInput
  }

  export type userCreateNestedOneWithoutUser_roles_roleInput = {
    create?: XOR<userCreateWithoutUser_roles_roleInput, userUncheckedCreateWithoutUser_roles_roleInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_roles_roleInput
    connect?: userWhereUniqueInput
  }

  export type roleUpdateOneRequiredWithoutUser_roles_roleNestedInput = {
    create?: XOR<roleCreateWithoutUser_roles_roleInput, roleUncheckedCreateWithoutUser_roles_roleInput>
    connectOrCreate?: roleCreateOrConnectWithoutUser_roles_roleInput
    upsert?: roleUpsertWithoutUser_roles_roleInput
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutUser_roles_roleInput, roleUpdateWithoutUser_roles_roleInput>, roleUncheckedUpdateWithoutUser_roles_roleInput>
  }

  export type userUpdateOneRequiredWithoutUser_roles_roleNestedInput = {
    create?: XOR<userCreateWithoutUser_roles_roleInput, userUncheckedCreateWithoutUser_roles_roleInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_roles_roleInput
    upsert?: userUpsertWithoutUser_roles_roleInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_roles_roleInput, userUpdateWithoutUser_roles_roleInput>, userUncheckedUpdateWithoutUser_roles_roleInput>
  }

  export type userCreateNestedOneWithoutPhotosInput = {
    create?: XOR<userCreateWithoutPhotosInput, userUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: userCreateOrConnectWithoutPhotosInput
    connect?: userWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type userUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<userCreateWithoutPhotosInput, userUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: userCreateOrConnectWithoutPhotosInput
    upsert?: userUpsertWithoutPhotosInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPhotosInput, userUpdateWithoutPhotosInput>, userUncheckedUpdateWithoutPhotosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type user_roles_roleCreateWithoutRoleInput = {
    user: userCreateNestedOneWithoutUser_roles_roleInput
  }

  export type user_roles_roleUncheckedCreateWithoutRoleInput = {
    userId: number
  }

  export type user_roles_roleCreateOrConnectWithoutRoleInput = {
    where: user_roles_roleWhereUniqueInput
    create: XOR<user_roles_roleCreateWithoutRoleInput, user_roles_roleUncheckedCreateWithoutRoleInput>
  }

  export type user_roles_roleCreateManyRoleInputEnvelope = {
    data: user_roles_roleCreateManyRoleInput | user_roles_roleCreateManyRoleInput[]
  }

  export type user_roles_roleUpsertWithWhereUniqueWithoutRoleInput = {
    where: user_roles_roleWhereUniqueInput
    update: XOR<user_roles_roleUpdateWithoutRoleInput, user_roles_roleUncheckedUpdateWithoutRoleInput>
    create: XOR<user_roles_roleCreateWithoutRoleInput, user_roles_roleUncheckedCreateWithoutRoleInput>
  }

  export type user_roles_roleUpdateWithWhereUniqueWithoutRoleInput = {
    where: user_roles_roleWhereUniqueInput
    data: XOR<user_roles_roleUpdateWithoutRoleInput, user_roles_roleUncheckedUpdateWithoutRoleInput>
  }

  export type user_roles_roleUpdateManyWithWhereWithoutRoleInput = {
    where: user_roles_roleScalarWhereInput
    data: XOR<user_roles_roleUpdateManyMutationInput, user_roles_roleUncheckedUpdateManyWithoutRoleInput>
  }

  export type user_roles_roleScalarWhereInput = {
    AND?: user_roles_roleScalarWhereInput | user_roles_roleScalarWhereInput[]
    OR?: user_roles_roleScalarWhereInput[]
    NOT?: user_roles_roleScalarWhereInput | user_roles_roleScalarWhereInput[]
    userId?: IntFilter<"user_roles_role"> | number
    roleId?: IntFilter<"user_roles_role"> | number
  }

  export type user_roles_roleCreateWithoutUserInput = {
    role: roleCreateNestedOneWithoutUser_roles_roleInput
  }

  export type user_roles_roleUncheckedCreateWithoutUserInput = {
    roleId: number
  }

  export type user_roles_roleCreateOrConnectWithoutUserInput = {
    where: user_roles_roleWhereUniqueInput
    create: XOR<user_roles_roleCreateWithoutUserInput, user_roles_roleUncheckedCreateWithoutUserInput>
  }

  export type user_roles_roleCreateManyUserInputEnvelope = {
    data: user_roles_roleCreateManyUserInput | user_roles_roleCreateManyUserInput[]
  }

  export type photoCreateWithoutUserInput = {
    fileName: string
    description?: string | null
  }

  export type photoUncheckedCreateWithoutUserInput = {
    id?: number
    fileName: string
    description?: string | null
  }

  export type photoCreateOrConnectWithoutUserInput = {
    where: photoWhereUniqueInput
    create: XOR<photoCreateWithoutUserInput, photoUncheckedCreateWithoutUserInput>
  }

  export type photoCreateManyUserInputEnvelope = {
    data: photoCreateManyUserInput | photoCreateManyUserInput[]
  }

  export type user_roles_roleUpsertWithWhereUniqueWithoutUserInput = {
    where: user_roles_roleWhereUniqueInput
    update: XOR<user_roles_roleUpdateWithoutUserInput, user_roles_roleUncheckedUpdateWithoutUserInput>
    create: XOR<user_roles_roleCreateWithoutUserInput, user_roles_roleUncheckedCreateWithoutUserInput>
  }

  export type user_roles_roleUpdateWithWhereUniqueWithoutUserInput = {
    where: user_roles_roleWhereUniqueInput
    data: XOR<user_roles_roleUpdateWithoutUserInput, user_roles_roleUncheckedUpdateWithoutUserInput>
  }

  export type user_roles_roleUpdateManyWithWhereWithoutUserInput = {
    where: user_roles_roleScalarWhereInput
    data: XOR<user_roles_roleUpdateManyMutationInput, user_roles_roleUncheckedUpdateManyWithoutUserInput>
  }

  export type photoUpsertWithWhereUniqueWithoutUserInput = {
    where: photoWhereUniqueInput
    update: XOR<photoUpdateWithoutUserInput, photoUncheckedUpdateWithoutUserInput>
    create: XOR<photoCreateWithoutUserInput, photoUncheckedCreateWithoutUserInput>
  }

  export type photoUpdateWithWhereUniqueWithoutUserInput = {
    where: photoWhereUniqueInput
    data: XOR<photoUpdateWithoutUserInput, photoUncheckedUpdateWithoutUserInput>
  }

  export type photoUpdateManyWithWhereWithoutUserInput = {
    where: photoScalarWhereInput
    data: XOR<photoUpdateManyMutationInput, photoUncheckedUpdateManyWithoutUserInput>
  }

  export type photoScalarWhereInput = {
    AND?: photoScalarWhereInput | photoScalarWhereInput[]
    OR?: photoScalarWhereInput[]
    NOT?: photoScalarWhereInput | photoScalarWhereInput[]
    id?: IntFilter<"photo"> | number
    fileName?: StringFilter<"photo"> | string
    description?: StringNullableFilter<"photo"> | string | null
    userId?: IntFilter<"photo"> | number
  }

  export type roleCreateWithoutUser_roles_roleInput = {
    name: string
  }

  export type roleUncheckedCreateWithoutUser_roles_roleInput = {
    id?: number
    name: string
  }

  export type roleCreateOrConnectWithoutUser_roles_roleInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutUser_roles_roleInput, roleUncheckedCreateWithoutUser_roles_roleInput>
  }

  export type userCreateWithoutUser_roles_roleInput = {
    name: string
    email: string
    password: string
    photos?: photoCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_roles_roleInput = {
    id?: number
    name: string
    email: string
    password: string
    photos?: photoUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_roles_roleInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_roles_roleInput, userUncheckedCreateWithoutUser_roles_roleInput>
  }

  export type roleUpsertWithoutUser_roles_roleInput = {
    update: XOR<roleUpdateWithoutUser_roles_roleInput, roleUncheckedUpdateWithoutUser_roles_roleInput>
    create: XOR<roleCreateWithoutUser_roles_roleInput, roleUncheckedCreateWithoutUser_roles_roleInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutUser_roles_roleInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutUser_roles_roleInput, roleUncheckedUpdateWithoutUser_roles_roleInput>
  }

  export type roleUpdateWithoutUser_roles_roleInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateWithoutUser_roles_roleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type userUpsertWithoutUser_roles_roleInput = {
    update: XOR<userUpdateWithoutUser_roles_roleInput, userUncheckedUpdateWithoutUser_roles_roleInput>
    create: XOR<userCreateWithoutUser_roles_roleInput, userUncheckedCreateWithoutUser_roles_roleInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_roles_roleInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_roles_roleInput, userUncheckedUpdateWithoutUser_roles_roleInput>
  }

  export type userUpdateWithoutUser_roles_roleInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photos?: photoUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_roles_roleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photos?: photoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutPhotosInput = {
    name: string
    email: string
    password: string
    user_roles_role?: user_roles_roleCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPhotosInput = {
    id?: number
    name: string
    email: string
    password: string
    user_roles_role?: user_roles_roleUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPhotosInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPhotosInput, userUncheckedCreateWithoutPhotosInput>
  }

  export type userUpsertWithoutPhotosInput = {
    update: XOR<userUpdateWithoutPhotosInput, userUncheckedUpdateWithoutPhotosInput>
    create: XOR<userCreateWithoutPhotosInput, userUncheckedCreateWithoutPhotosInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPhotosInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPhotosInput, userUncheckedUpdateWithoutPhotosInput>
  }

  export type userUpdateWithoutPhotosInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_roles_role?: user_roles_roleUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_roles_role?: user_roles_roleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_roles_roleCreateManyRoleInput = {
    userId: number
  }

  export type user_roles_roleUpdateWithoutRoleInput = {
    user?: userUpdateOneRequiredWithoutUser_roles_roleNestedInput
  }

  export type user_roles_roleUncheckedUpdateWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type user_roles_roleUncheckedUpdateManyWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type user_roles_roleCreateManyUserInput = {
    roleId: number
  }

  export type photoCreateManyUserInput = {
    id?: number
    fileName: string
    description?: string | null
  }

  export type user_roles_roleUpdateWithoutUserInput = {
    role?: roleUpdateOneRequiredWithoutUser_roles_roleNestedInput
  }

  export type user_roles_roleUncheckedUpdateWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type user_roles_roleUncheckedUpdateManyWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type photoUpdateWithoutUserInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type photoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type photoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
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