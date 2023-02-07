<x-layouts.app>

    <x-slot name="title">
        Carbon emissions
    </x-slot>

    <x-slot name="slot">
        <div class="container mx-auto px-4">
            <div class='grid-container-element py-7'>
                <div class='grid-child-element green'>
                    <div style="width: 800px;">
                        <canvas id="myChart2"></canvas>
                    </div>
                    <script src="js/PoW_emission.js"></script>

                </div>
                <div class='grid-child-element purple'>

                    <div style="width: 800px;">
                        <canvas id="myChart"></canvas>
                    </div>
                    <script src="js/PoS_emission.js"></script>

                </div>


            </div>
        </div>

    </x-slot>
</x-layouts.app>
