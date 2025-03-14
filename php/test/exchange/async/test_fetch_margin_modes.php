<?php
namespace ccxt;

// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -----------------------------------------------------------------------------
use React\Async;
use React\Promise;
include_once PATH_TO_CCXT . '/test/exchange/base/test_margin_mode.php';
include_once PATH_TO_CCXT . '/test/exchange/base/test_shared_methods.php';

function test_fetch_margin_modes($exchange, $skipped_properties, $symbol) {
    return Async\async(function () use ($exchange, $skipped_properties, $symbol) {
        $method = 'fetchMarginModes';
        $margin_modes = Async\await($exchange->fetch_margin_modes(['symbol']));
        assert(is_array($margin_modes), $exchange->id . ' ' . $method . ' ' . $symbol . ' must return an object. ' . $exchange->json($margin_modes));
        $margin_mode_keys = is_array($margin_modes) ? array_keys($margin_modes) : array();
        assert_non_emtpy_array($exchange, $skipped_properties, $method, $margin_modes, $symbol);
        for ($i = 0; $i < count($margin_mode_keys); $i++) {
            $margin_mode = $margin_modes[$margin_mode_keys[$i]];
            assert_non_emtpy_array($exchange, $skipped_properties, $method, $margin_mode, $symbol);
            test_margin_mode($exchange, $skipped_properties, $method, $margin_mode);
        }
        return true;
    }) ();
}
