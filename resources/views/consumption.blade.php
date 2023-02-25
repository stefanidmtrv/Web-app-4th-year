<x-layouts.app>

    <x-slot name="title">
        Energy consumption
    </x-slot>

    <x-slot name="slot">

        <section class="bg-green-100">

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

                <hr>
                <div class="grid-container-element py-7">
                    <div class="grid-child-element">
                        <p class="text-center">Green overall score (PoW) </p>
                        <x-table_PoW></x-table_PoW>
                    </div>
                    <div class="grid-child-element">
                        <p class="text-center">Green overall score (PoS) </p>
                        <x-table_PoS></x-table_PoS>
{{--                        <img class="max-w-2xl" src="{{ asset('images/Capture.PNG') }}">--}}
                    </div>
                </div>
                <div>
                    <h1>Global Historical Emissions</h1>
                    <img class="w-1/2 drop-shadow-xl" src="{{ asset('images/co2countries.PNG') }}">
                    <strong>
                        <span style="font-size: 12px">Source: </span>
                    </strong>
                    <span style="font-size: 12px"><a
                            href="https://www.climatewatchdata.org/ghg-emissions?end_year=2019&start_year=1990">https://www.climatewatchdata.org/ghg-emissions?end_year=2019&start_year=1990</a></span>
                </div>

            </div>
        </section>
    </x-slot>
</x-layouts.app>
