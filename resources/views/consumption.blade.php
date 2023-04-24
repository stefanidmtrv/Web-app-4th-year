<x-layouts.app>

    <x-slot name="title">
        Energy consumption
    </x-slot>

    <x-slot name="slot">

        <section class="bg-green-100">

            <div class="container mx-auto px-4">
                <h2 class="py-7 text-4xl font-extrabold text-gray-500 text-center">Energy Consumption</h2>
                <div class='grid-container-element justify-items-center py-7'>

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
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 bg-green-300	">

                <h2 class="text-4xl font-extrabold text-gray-500 text-center">Green Overall Score</h2>

                <div class="grid-container-element py-7">

                    <div class="grid-child-element">

                        <x-table_PoW></x-table_PoW>
                    </div>
                    <div class="grid-child-element">

                        <x-table_PoS></x-table_PoS>

                    </div>

                </div>

                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 bg-green-300	">

                <h2 class="text-4xl font-extrabold text-gray-500 text-center">Price</h2>
                <section class="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
                    <!-- TradingView Widget BEGIN -->
                    <div class="py-7 tradingview-widget-container">

                        <div class="tradingview-widget-container__widget"></div>
                        <div class="tradingview-widget-copyright"><a
                                href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/" rel="noopener"
                                target="_blank"><span class="blue-text">Crypto markets</span></a> by TradingView
                        </div>
                        <script type="text/javascript"
                                src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
                            {
                                "width"
                            :
                                "1000",
                                    "height"
                            :
                                "490",
                                    "defaultColumn"
                            :
                                "overview",
                                    "screener_type"
                            :
                                "crypto_mkt",
                                    "displayCurrency"
                            :
                                "USD",
                                    "colorTheme"
                            :
                                "light",
                                    "locale"
                            :
                                "en"
                            }
                        </script>
                    </div>
                    <!-- TradingView Widget END -->
                </section>
            </div>
        </section>
    </x-slot>
</x-layouts.app>
