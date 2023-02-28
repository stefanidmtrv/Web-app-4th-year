<x-layouts.app>

    <x-slot name="title">
        Energy consumption
    </x-slot>

    <x-slot name="slot">

        <section class="bg-green-100">

            <div class="container mx-auto px-4">
                <h2 class="py-7 text-4xl font-extrabold text-gray-500 text-center">Energy Consumption of
                    Cryptocurrencies</h2>
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

            </div>
        </section>
    </x-slot>
</x-layouts.app>
