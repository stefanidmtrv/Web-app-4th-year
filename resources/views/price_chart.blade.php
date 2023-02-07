<x-layouts.app>

    <x-slot name="title">
        Price chart
    </x-slot>

    <x-slot name="slot">
{{--        <div class='grid-container-element py-7'>--}}
        <div class="container mx-auto px-4">
            <!-- TradingView Widget BEGIN -->
            <div class="tradingview-widget-container">
                <div id="tradingview_05121"></div>
                <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP" rel="noopener" target="_blank"><span class="blue-text">Bitcoin chart</span></a> by TradingView</div>
                <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                <script type="text/javascript">
                    new TradingView.widget(
                        {
                            "autosize": true,
                            "symbol": "BITSTAMP:BTCUSD",
                            "interval": "D",
                            "timezone": "Etc/UTC",
                            "theme": "light",
                            "style": "1",
                            "locale": "en",
                            "toolbar_bg": "#f1f3f6",
                            "enable_publishing": false,
                            "allow_symbol_change": true,
                            "container_id": "tradingview_05121"
                        }
                    );
                </script>
            </div>
            <!-- TradingView Widget END -->
        </div>

{{--        </div>--}}
    </x-slot>
</x-layouts.app>
