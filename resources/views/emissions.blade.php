<x-layouts.app>

    <x-slot name="title">
      
       Carbon emissions
    </x-slot>

    <x-slot name="slot">
      <div class="container mx-auto px-4">
<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/" rel="noopener" target="_blank"><span class="blue-text">Markets today</span></a> by TradingView</div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async src="js/crypto_widget.js"></script>
  </div>
  <!-- TradingView Widget END -->
            <div class='grid-container-element'>
                <div class='grid-child-element purple'>
                    <div>PoW consumption</div>

                    <div id="vis"></div>
                    <script src="js/chart1.js"></script>

                </div>
                <div class='grid-child-element green'>
                    <div>PoS consumption</div>

                    <div id="vis2"></div>
                    <script src="js/chart2.js"></script>

                </div>
            </div>
      </div>
    </x-slot>
</x-layouts.app>
