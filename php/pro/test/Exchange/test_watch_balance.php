<?php
namespace ccxt;

// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -----------------------------------------------------------------------------
use React\Async;
use React\Promise;
include_once PATH_TO_CCXT . '/test/exchange/base/test_balance.php';
include_once PATH_TO_CCXT . '/test/exchange/base/test_shared_methods.php';

function test_watch_balance($exchange, $skipped_properties, $code) {
    return Async\async(function () use ($exchange, $skipped_properties, $code) {
        $method = 'watchBalance';
        $now = $exchange->milliseconds();
        $ends = $now + 15000;
        while ($now < $ends) {
            $response = null;
            try {
                $response = Async\await($exchange->watch_balance());
            } catch(\Throwable $e) {
                if (!is_temporary_failure($e)) {
                    throw $e;
                }
                $now = $exchange->milliseconds();
                continue;
            }
            test_balance($exchange, $skipped_properties, $method, $response);
            $now = $exchange->milliseconds();
        }
    }) ();
}
