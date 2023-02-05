<x-layouts.app>

    <x-slot name="title">

        Energy consumption
    </x-slot>

    <x-slot name="slot">
        <div class="container mx-auto px-4">
{{--            <div class="grid h-screen place-items-center">--}}
                <div class='grid-container-element py-7'>
                    <div class='grid-child-element purple'>
                        <div>PoW consumption</div>

                        <div style="width: 800px; margin: auto;">
                            <canvas id="myChart"></canvas>
                        </div>
                        <script src="js/test.js"></script>


                    </div>
                    <div class='grid-child-element green'>
                        <div>PoS consumption</div>

                        <div id="vis2"></div>
                        <script src="js/PoS_consumption.js"></script>
                    </div>
{{--                </div>--}}
            </div>
        </div>

        </div>
    </x-slot>
</x-layouts.app>
