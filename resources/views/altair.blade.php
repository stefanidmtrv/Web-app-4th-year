<x-layouts.app>

    <x-slot name="title">

        Energy consumption
    </x-slot>

    <x-slot name="slot">
        <div class="container mx-auto px-4">
            <div class='grid-container-element py-7'>
                <div class='grid-child-element purple'>
                <div>PoW consumption</div>
                 <div id="vis"></div>
                 <script src="js/PoW_consumption.js"></script>

                </div>
                <div class='grid-child-element green'>
                    <div>PoS consumption</div>
                    <div id="vis2"></div>
                    <script src="js/PoS_emission.js"></script>
                </div>

            </div>
        </div>

    </x-slot>
</x-layouts.app>
