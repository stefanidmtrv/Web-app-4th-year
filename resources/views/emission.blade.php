<x-layouts.app>

    <x-slot name="title">
        Carbon emissions
    </x-slot>

    <x-slot name="slot">
        <div class="bg-green-100">
            <div class="container mx-auto px-4">
                <div class="py-7">
                    <ul class="list-disc">
                        <li>Scientists
                            agree that <strong>climate change</strong> is real,
                            <strong>human-caused</strong>, and requires a dramatic
                            reduction of
                            greenhouse gas emissions in order to minimize dangerous ecological and societal impact <sup>2</sup>.
                        </li>
                        <li>There are
                            <strong>2,400,000,000,000</strong>
                            total cumulative tons of CO<sub>2</sub> emissions
                            from 1850 to 2019. 2,400 gigatons of CO<sub>2</sub> were emitted by <strong>human
                                activity</strong>.
                            Around 950 gigatons went into the <strong>atmosphere</strong>.
                            The rest has been absorbed by <strong>oceans and land</strong><sup>4</sup>.
                        </li>
                        <li>Emission reductions are necessary to stabilise climate and avoid potentially disastrous
                            impacts on
                            today’s
                            young people, future generations, and nature <sup>3</sup>.
                        </li>
                        <li>
                            <strong>Humans</strong> are considered to be the main
                            cause
                            of Earth's atmospheric composition.
                        </li>
                    </ul>
                    {{--                <span class="">--}}
                    {{--                      The principal climate forcing, defined as an imposed--}}
                    {{--                    change of planetary energy balance, is increasing carbon--}}
                    {{--                    dioxide (CO<sub>2</sub>) <br>. </span>--}}
                </div>

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

                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 bg-green-300	">

                <h2 class="text-4xl font-extrabold text-gray-500 text-center">Carbon footprint of cryptocurrencies</h2>

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

                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 bg-green-300	">

                <h2 class="text-4xl font-extrabold text-gray-500 text-center">Climate Impacts<sup>3</sup>:</h2>

                <p class="py-7">Climate impacts accompanying global warming of 2°C or more
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
        </div>
        </section>
    </x-slot>
</x-layouts.app>
