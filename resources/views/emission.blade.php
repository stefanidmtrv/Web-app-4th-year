<x-layouts.app>

    <x-slot name="title">
        Carbon emissions
    </x-slot>

    <x-slot name="slot">
        <section class="bg-green-100">
            <div class="container mx-auto px-4">
                <div class="py-7">
                <span class="">Scientists
                    agree that <strong>climate change</strong> is real,
                    <strong>human-caused</strong>, and requires a dramatic
                    reduction of
                    greenhouse gas emissions in order to minimize dangerous ecological and societal impact <sup>2</sup>.
                    Emission reductions are necessary to stabilise climate and avoid potentially disastrous impacts on
                    today’s
                    young people, future generations, and nature <sup>3</sup>. Humans are considered <br> to be the main
                    cause
                    of Earth's atmospheric composition. The principal climate forcing, defined as an imposed
                    change of planetary energy balance, is increasing carbon
                    dioxide (CO<sub>2</sub>) <br> from fossil fuel emissions, much of which will
                    remain in the atmosphere for millennia.</span>
                </div>
                <div>
                <span class="">
                    "Increase of "greenhouse" gases such as CO<sub>2</sub>
                    has little effect on incoming sunlight but makes the atmosphere
                    more opaque at infrared wavelengths, causing infrared (heat)
                    radiation to space to emerge from higher, colder levels, which thus
                    reduces infrared radiation to space. The resulting planetary energy
                    imbalance, absorbed solar energy exceeding heat emitted to space,
                    causes Earth to warm. Observations confirm that
                    Earth is now substantially out of energy balance, so the long-term
                    warming will continue" <sup>3</sup>
                </span>
                </div>
                <hr>
                <div class='grid-container-element py-7'>
                    <div class='grid-child-element green'>
                        <div style="width: 700px;">
                            <canvas id="myChart2"></canvas>
                        </div>
                        <script src="js/PoW_emission.js"></script>

                    </div>
                    <div class='grid-child-element purple'>

                        <div style="width: 700px;">
                            <canvas id="myChart"></canvas>
                        </div>
                        <script src="js/PoS_emission.js"></script>

                    </div>
                </div>

                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Climate Impacts<sup>3</sup>:</h2>
                <p class="mb-2">Climate impacts accompanying global warming of 2°C or more
                    would be highly deleterious. Already there are numerous
                    indications of substantial effects in response to warming of the
                    past few decades. That warming has brought global temperature
                    close to if not slightly above the prior range of the Holocene. We
                    conclude that an appropriate target would be to keep global
                    temperature at a level within or close to the Holocene range.
                    Global warming of 2°C would be well outside the Holocene range
                    and far into the dangerous range.</p>

                <x-climate_impacts_table></x-climate_impacts_table>

            </div>
        </section>
    </x-slot>
</x-layouts.app>
