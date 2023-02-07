<x-layouts.app>

    <x-slot name="title">
        Energy consumption
    </x-slot>

    <x-slot name="slot">

        <div class="container mx-auto px-4">

            <div class='grid-container-element py-7'>

                <div class='grid-child-element green'>
                    <div style="width: 700px;">
                        <canvas id="myChart2"></canvas>
                    </div>
                    <script src="js/PoW_consumption.js"></script>

                </div>
                <div class='grid-child-element purple'>

                    <div style="width: 700px;">
                        <canvas id="myChart"></canvas>
                    </div>
                    <script src="js/PoS_consumption.js"></script>

                </div>

            </div>
            <div class="row">
                <div class="col-12 text-center pt-5">
                    <p>This awesome blog has many articles, click the button below to see them</p>
                    <br>
                    <a href="/blog" class="btn btn-outline-primary">Show Blog</a>
                </div>
            </div>
            <!-- TradingView Widget BEGIN -->
            <div class="tradingview-widget-container">
                <div id="tradingview_01a62"></div>
                <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP" rel="noopener" target="_blank"><span class="blue-text">Bitcoin chart</span></a> by TradingView</div>
                <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                <script type="text/javascript">
                    new TradingView.widget(
                        {
                            "width": 780,
                            "height": 410,
                            "symbol": "BITSTAMP:BTCUSD",
                            "interval": "D",
                            "timezone": "Etc/UTC",
                            "theme": "light",
                            "style": "1",
                            "locale": "en",
                            "toolbar_bg": "#f1f3f6",
                            "enable_publishing": false,
                            "allow_symbol_change": true,
                            "container_id": "tradingview_01a62"
                        }
                    );
                </script>
            </div>
            <!-- TradingView Widget END -->
        </div>

        </div>
    </x-slot>
</x-layouts.app>
