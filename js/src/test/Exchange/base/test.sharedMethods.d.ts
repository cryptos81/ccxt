import { Exchange } from "../../../../ccxt";
import { Str } from '../../../base/types';
declare function logTemplate(exchange: Exchange, method: string, entry: object): string;
declare function isTemporaryFailure(e: any): boolean;
declare function assertType(exchange: Exchange, skippedProperties: object, entry: object, key: string | number, format: object): boolean;
declare function assertStructure(exchange: Exchange, skippedProperties: object, method: string, entry: object, format: any[] | object, emptyAllowedFor?: any[], deep?: boolean): void;
declare function assertTimestamp(exchange: Exchange, skippedProperties: object, method: string, entry: object, nowToCheck?: any, keyNameOrIndex?: string | number, allowNull?: boolean): void;
declare function assertTimestampAndDatetime(exchange: Exchange, skippedProperties: object, method: string, entry: object, nowToCheck?: any, keyNameOrIndex?: any, allowNull?: boolean): void;
declare function assertCurrencyCode(exchange: Exchange, skippedProperties: object, method: string, entry: object, actualCode: Str, expectedCode?: Str, allowNull?: boolean): void;
declare function assertValidCurrencyIdAndCode(exchange: Exchange, skippedProperties: object, method: string, entry: object, currencyId: any, currencyCode: any, allowNull?: boolean): void;
declare function assertSymbol(exchange: Exchange, skippedProperties: object, method: string, entry: object, key: string | number, expectedSymbol?: Str, allowNull?: boolean): void;
declare function assertSymbolInMarkets(exchange: Exchange, skippedProperties: object, method: string, symbol: string): void;
declare function assertGreater(exchange: Exchange, skippedProperties: object, method: string, entry: object, key: string | number, compareTo: string, allowNull?: boolean): void;
declare function assertGreaterOrEqual(exchange: Exchange, skippedProperties: object, method: string, entry: object, key: string | number, compareTo: string, allowNull?: boolean): void;
declare function assertLess(exchange: Exchange, skippedProperties: object, method: string, entry: object, key: string | number, compareTo: string, allowNull?: boolean): void;
declare function assertLessOrEqual(exchange: Exchange, skippedProperties: object, method: string, entry: object, key: string | number, compareTo: string, allowNull?: boolean): void;
declare function assertEqual(exchange: Exchange, skippedProperties: object, method: string, entry: object, key: string | number, compareTo: string, allowNull?: boolean): void;
declare function assertNonEqual(exchange: Exchange, skippedProperties: object, method: string, entry: object, key: string | number, compareTo: string, allowNull?: boolean): void;
declare function assertInArray(exchange: Exchange, skippedProperties: object, method: string, entry: object, key: string | number, expectedArray: any[], allowNull?: boolean): void;
declare function assertFeeStructure(exchange: Exchange, skippedProperties: object, method: string, entry: object, key: string | number, allowNull?: boolean): void;
declare function assertTimestampOrder(exchange: Exchange, method: string, codeOrSymbol: string, items: any[], ascending?: boolean): void;
declare function assertInteger(exchange: Exchange, skippedProperties: object, method: string, entry: object, key: string | number, allowNull?: boolean): void;
declare function checkPrecisionAccuracy(exchange: Exchange, skippedProperties: object, method: string, entry: object, key: string | number): void;
declare function fetchBestBidAsk(exchange: any, method: any, symbol: any): Promise<any[]>;
declare function fetchOrder(exchange: any, symbol: any, orderId: any, skippedProperties: any): Promise<any>;
declare function assertOrderState(exchange: any, skippedProperties: any, method: any, order: any, assertedStatus: any, strictCheck: any): void;
declare function getActiveMarkets(exchange: any, includeUnknown?: boolean): any;
declare function removeProxyOptions(exchange: Exchange, skippedProperties: object): any[];
declare function setProxyOptions(exchange: Exchange, skippedProperties: object, proxyUrl: string, httpProxy: string, httpsProxy: string, socksProxy: string): void;
declare function concat(a?: any[], b?: any[]): any[];
declare function assertNonEmtpyArray(exchange: Exchange, skippedProperties: object, method: string, entry: any[] | object, hint?: Str): void;
declare function assertRoundMinuteTimestamp(exchange: Exchange, skippedProperties: object, method: string, entry: any[] | object, key: string | number): void;
declare function deepEqual(a: any, b: any): boolean;
declare function assertDeepEqual(exchange: Exchange, skippedProperties: any, method: string, a: any, b: any): void;
declare const _default: {
    deepEqual: typeof deepEqual;
    assertDeepEqual: typeof assertDeepEqual;
    logTemplate: typeof logTemplate;
    isTemporaryFailure: typeof isTemporaryFailure;
    assertTimestamp: typeof assertTimestamp;
    assertTimestampAndDatetime: typeof assertTimestampAndDatetime;
    assertStructure: typeof assertStructure;
    assertSymbol: typeof assertSymbol;
    assertSymbolInMarkets: typeof assertSymbolInMarkets;
    assertCurrencyCode: typeof assertCurrencyCode;
    assertInArray: typeof assertInArray;
    assertFeeStructure: typeof assertFeeStructure;
    assertTimestampOrder: typeof assertTimestampOrder;
    assertGreater: typeof assertGreater;
    assertGreaterOrEqual: typeof assertGreaterOrEqual;
    assertLess: typeof assertLess;
    assertLessOrEqual: typeof assertLessOrEqual;
    assertEqual: typeof assertEqual;
    assertNonEqual: typeof assertNonEqual;
    assertInteger: typeof assertInteger;
    checkPrecisionAccuracy: typeof checkPrecisionAccuracy;
    fetchBestBidAsk: typeof fetchBestBidAsk;
    fetchOrder: typeof fetchOrder;
    assertOrderState: typeof assertOrderState;
    assertValidCurrencyIdAndCode: typeof assertValidCurrencyIdAndCode;
    assertType: typeof assertType;
    removeProxyOptions: typeof removeProxyOptions;
    setProxyOptions: typeof setProxyOptions;
    assertNonEmtpyArray: typeof assertNonEmtpyArray;
    assertRoundMinuteTimestamp: typeof assertRoundMinuteTimestamp;
    concat: typeof concat;
    getActiveMarkets: typeof getActiveMarkets;
};
export default _default;
