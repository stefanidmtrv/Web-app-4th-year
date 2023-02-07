<x-layouts.app>

    <x-slot name="title">
        Energy consumption
    </x-slot>

    <x-slot name="slot">
        <div class="container mx-auto px-4">
            <!-- TradingView Widget BEGIN -->
            <div class="tradingview-widget-container">
                <div class="tradingview-widget-container__widget"></div>
                <div class="tradingview-widget-copyright">
                <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
                    {
                        "symbols": [
                        {
                            "description": "",
                            "proName": "BITSTAMP:BTCUSD"
                        },
                        {
                            "description": "",
                            "proName": "BITSTAMP:ETHUSD"
                        },
                        {
                            "description": "",
                            "proName": "COINBASE:BCHUSD"
                        },
                        {
                            "description": "",
                            "proName": "BITTREX:BSVUSD"
                        },
                        {
                            "description": "",
                            "proName": "KRAKEN:DASHUSD"
                        },
                        {
                            "description": "",
                            "proName": "COINBASE:ZECUSD"
                        },
                        {
                            "description": "",
                            "proName": "COINBASE:LTCUSD"
                        },
                        {
                            "description": "",
                            "proName": "COINBASE:DOGEUSD"
                        }
                    ],
                        "showSymbolLogo": true,
                        "colorTheme": "light",
                        "isTransparent": false,
                        "displayMode": "adaptive",
                        "locale": "en"
                    }
                </script>
            </div>
            <!-- TradingView Widget END -->

            <div class='grid-container-element py-7'>

                <div class='grid-child-element green'>
                    <div style="width: 700px;">
                        <canvas id="myChart2"></canvas>
                    </div>
                    <script src="js/test2.js"></script>

                </div>
                <div class='grid-child-element purple'>

                    <div style="width: 700px;">
                        <canvas id="myChart"></canvas>
                    </div>
                    <script src="js/test.js"></script>

                </div>
            </div>

        </div>

        </div>
    </x-slot>
</x-layouts.app>
