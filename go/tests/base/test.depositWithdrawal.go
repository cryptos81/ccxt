package base
import "github.com/ccxt/ccxt/go/v4"

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code


    func TestDepositWithdrawal(exchange ccxt.ICoreExchange, skippedProperties interface{}, method interface{}, entry interface{}, requestedCode interface{}, now interface{})  {
        var format interface{} = map[string]interface{} {
            "info": map[string]interface{} {},
            "id": "1234",
            "txid": "0x1345FEG45EAEF7",
            "timestamp": 1502962946216,
            "datetime": "2017-08-17 12:42:48.000",
            "network": "ETH",
            "address": "0xEFE3487358AEF352345345",
            "addressTo": "0xEFE3487358AEF352345123",
            "addressFrom": "0xEFE3487358AEF352345456",
            "tag": "smth",
            "tagTo": "smth",
            "tagFrom": "smth",
            "type": "deposit",
            "amount": exchange.ParseNumber("1.234"),
            "currency": "USDT",
            "status": "ok",
            "updated": 1502962946233,
            "fee": map[string]interface{} {},
        }
        var emptyAllowedFor interface{} = []interface{}{"address", "addressTo", "addressFrom", "tag", "tagTo", "tagFrom"} // below we still do Assertion for to/from
        AssertStructure(exchange, skippedProperties, method, entry, format, emptyAllowedFor)
        AssertTimestampAndDatetime(exchange, skippedProperties, method, entry, now)
        AssertCurrencyCode(exchange, skippedProperties, method, entry, GetValue(entry, "currency"), requestedCode)
        //
        AssertInArray(exchange, skippedProperties, method, entry, "status", []interface{}{"ok", "pending", "failed", "rejected", "canceled"})
        AssertInArray(exchange, skippedProperties, method, entry, "type", []interface{}{"deposit", "withdrawal"})
        AssertGreaterOrEqual(exchange, skippedProperties, method, entry, "amount", "0")
        AssertFeeStructure(exchange, skippedProperties, method, entry, "fee")
        if IsTrue(IsEqual(GetValue(entry, "type"), "deposit")) {
            AssertType(exchange, skippedProperties, entry, "addressFrom", format)
        } else {
            AssertType(exchange, skippedProperties, entry, "addressTo", format)
        }
    }
