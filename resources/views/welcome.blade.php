
   <x-layouts.app>

    <x-slot name="title">
        Welcome
    </x-slot>

    <x-slot name="slot">

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
  </x-slot>

</x-layouts.app>
