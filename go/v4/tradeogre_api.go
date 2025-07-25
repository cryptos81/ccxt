// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

package ccxt

func (this *tradeogre) PublicGetMarkets (args ...interface{}) <-chan interface{} {
   return this.callEndpointAsync("publicGetMarkets", args...)
}

func (this *tradeogre) PublicGetOrdersMarket (args ...interface{}) <-chan interface{} {
   return this.callEndpointAsync("publicGetOrdersMarket", args...)
}

func (this *tradeogre) PublicGetTickerMarket (args ...interface{}) <-chan interface{} {
   return this.callEndpointAsync("publicGetTickerMarket", args...)
}

func (this *tradeogre) PublicGetHistoryMarket (args ...interface{}) <-chan interface{} {
   return this.callEndpointAsync("publicGetHistoryMarket", args...)
}

func (this *tradeogre) PublicGetChartIntervalMarketTimestamp (args ...interface{}) <-chan interface{} {
   return this.callEndpointAsync("publicGetChartIntervalMarketTimestamp", args...)
}

func (this *tradeogre) PublicGetChartIntervalMarket (args ...interface{}) <-chan interface{} {
   return this.callEndpointAsync("publicGetChartIntervalMarket", args...)
}

func (this *tradeogre) PrivateGetAccountBalances (args ...interface{}) <-chan interface{} {
   return this.callEndpointAsync("privateGetAccountBalances", args...)
}

func (this *tradeogre) PrivateGetAccountOrderUuid (args ...interface{}) <-chan interface{} {
   return this.callEndpointAsync("privateGetAccountOrderUuid", args...)
}

func (this *tradeogre) PrivatePostOrderBuy (args ...interface{}) <-chan interface{} {
   return this.callEndpointAsync("privatePostOrderBuy", args...)
}

func (this *tradeogre) PrivatePostOrderSell (args ...interface{}) <-chan interface{} {
   return this.callEndpointAsync("privatePostOrderSell", args...)
}

func (this *tradeogre) PrivatePostOrderCancel (args ...interface{}) <-chan interface{} {
   return this.callEndpointAsync("privatePostOrderCancel", args...)
}

func (this *tradeogre) PrivatePostOrders (args ...interface{}) <-chan interface{} {
   return this.callEndpointAsync("privatePostOrders", args...)
}

func (this *tradeogre) PrivatePostAccountOrders (args ...interface{}) <-chan interface{} {
   return this.callEndpointAsync("privatePostAccountOrders", args...)
}

func (this *tradeogre) PrivatePostAccountBalance (args ...interface{}) <-chan interface{} {
   return this.callEndpointAsync("privatePostAccountBalance", args...)
}
