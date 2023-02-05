<x-layouts.app>

    <x-slot name="title">

       Carbon emissions
    </x-slot>

    <x-slot name="slot">
      <div class="container mx-auto px-4">

            <div class='grid-container-element'>
                <div class='grid-child-element purple'>
                    <div>PoW emissions</div>

                    <div id="vis"></div>
                    <script src="js/PoW_emission.js"></script>

                </div>
                <div class='grid-child-element green'>
                    <div>PoS emissions</div>

                    <div id="vis2"></div>
                    <script src="js/PoS_emission.js"></script>

                </div>
            </div>
      </div>
    </x-slot>
</x-layouts.app>
