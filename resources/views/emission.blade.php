<x-layouts.app>

    <x-slot name="title">
        Carbon emissions
    </x-slot>

    <x-slot name="slot">
        <div class="bg-green-100">

            <div class="container mx-auto px-4">


                <span class="py-7 font-serif text-lg text-gray-600">
                    "Increase of "greenhouse" gases such as CO<sub>2</sub>
                    has little effect on incoming sunlight but makes the atmosphere
                    more opaque at infrared wavelengths, causing infrared (heat)
                    radiation to space to emerge from higher, colder levels, which thus
                    reduces infrared radiation to space. The resulting planetary energy
                    imbalance, absorbed solar energy exceeding heat emitted to space,
                    causes Earth to warm. Observations confirm that
                    Earth is now substantially out of energy balance, so the long-term
                    warming will continue" <sup>3</sup>.
                </span>
                <div class="py-7">
                    <ul class="list-disc">
                        <li class="font-serif text-lg text-gray-600"> Scientists
                            agree that <strong>climate change</strong> is real,
                            <strong>human-caused</strong>, and requires a dramatic
                            reduction of
                            greenhouse gas emissions in order to minimize dangerous ecological and societal impact <sup>2</sup>.
                        </li>
                        <li class="font-serif text-lg text-gray-600">There are
                            <strong>2,400,000,000,000</strong>
                            total cumulative tons of CO<sub>2</sub> emissions
                            from 1850 to 2019. 2,400 gigatons of CO<sub>2</sub> were emitted by <strong>human
                                activity</strong>.
                            Around 950 gigatons went into the <strong>atmosphere</strong>.
                            The rest has been absorbed by <strong>oceans and land</strong><sup>4</sup>.
                        </li>
                        <li class="font-serif text-lg text-gray-600">Emission reductions are necessary to stabilise climate and avoid potentially disastrous
                            impacts on
                            today’s
                            young people, future generations, and nature <sup>3</sup>.
                        </li>
                        <li class="font-serif text-lg text-gray-600">
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
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 bg-green-300	">

                <h2 class="text-4xl font-extrabold text-gray-500 text-center">Carbon Footprint</h2>

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

                <p class="py-7 font-serif text-lg text-gray-600">Climate impacts accompanying global warming of 2°C or more
                    would be highly deleterious. Already there are numerous
                    indications of substantial effects in response to warming of the
                    past few decades. That warming has brought global temperature
                    close to if not slightly above the prior range of the Holocene. We
                    conclude that an appropriate target would be to keep global
                    temperature at a level within or close to the Holocene range.
                    Global warming of 2°C would be well outside the Holocene range
                    and far into the dangerous range.</p>

                <x-climate_impacts_table></x-climate_impacts_table>

                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 bg-green-300	">

                <h2 class="text-4xl font-extrabold text-gray-500 text-center">Comparison</h2>

                <div class="flex flex-wrap justify-center">

                    <div class="p-4 max-w-sm">
                        <div class="flex rounded-lg h-full bg-white p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-16 h-16 mr-3 inline-flex items-center justify-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/2560px-Flag_of_Belarus.svg.png"
                                        alt="My Happy SVG"/>
                                </div>
                                <h2 class="text-black text-lg font-medium">Belarus</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base text-black">65.3 MtCO2e per year</p>

                            </div>
                        </div>
                    </div>

                    <div class="p-4 max-w-sm">
                        <div class="flex rounded-lg h-full bg-white p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-16 h-16 mr-3 inline-flex items-center justify-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Flag_of_Singapore_%28bordered%29.svg/1280px-Flag_of_Singapore_%28bordered%29.svg.png"
                                        alt="My Happy SVG"/>
                                </div>
                                <h2 class="text-black text-lg font-medium">Singapore</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base text-black">67.3
                                    MtCO2e per year</p>

                            </div>
                        </div>
                    </div>

                    <div class="p-4 max-w-sm">
                        <div class="flex rounded-lg h-full bg-white p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-16 h-16 mr-3 inline-flex items-center justify-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bitcoin-clean.svg/2048px-Bitcoin-clean.svg.png"
                                        alt="My Happy SVG"/>
                                </div>
                                <h2 class="text-black text-lg font-medium">Bitcoin</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base text-black">63.5
                                    MtCO2e per year</p>

                            </div>
                        </div>
                    </div>
                    <div class="p-4 max-w-sm">
                        <div class="flex rounded-lg h-full bg-white p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-16 h-16 mr-3 inline-flex items-center justify-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/2560px-Flag_of_Papua_New_Guinea.svg.png"
                                        alt="My Happy SVG"/>
                                </div>
                                <h2 class="text-black text-lg font-medium">Papua New Guinea</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base text-black">63.5
                                    MtCO2e per year</p>

                            </div>
                        </div>
                    </div>
                    <div class="p-4 max-w-sm">
                        <div class="flex rounded-lg h-full bg-white p-8 flex-col">
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-16 h-16 mr-3 inline-flex items-center justify-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/2560px-Flag_of_Mongolia.svg.png"
                                    />
                                </div>
                                <h2 class="text-black text-lg font-medium">Mongolia</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base text-black">59.1
                                    MtCO2e per year</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <strong>
                        <span style="font-size: 12px">Source: </span>
                    </strong>
                    <span style="font-size: 12px"><a
                            href="https://ccaf.io/cbeci/ghg/comparisons">
                        https://ccaf.io/cbeci/ghg/comparisons></a>
                </span>
                </div>
<section>
                    <div class="py-7 flex flex-row gap-4">

                            <div class="">
                                <img class="drop-shadow-2xl"
                                    src="{{ asset('images/bitcoin_tv.PNG') }}"/>
                                <strong>
                                    <span style="font-size: 12px">Source: </span>
                                </strong>
                                <span style="font-size: 12px"><a
                                        href="https://www.politico.eu/article/cryptocurrency-bitcoin-environment-impact-carbon-footprint/">
                                    https://www.politico.eu/article/cryptocurrency-bitcoin-environment-impact-carbon-footprint</a>
                            </span>
                            </div>
                            <div class="">
                            <img class="drop-shadow-2xl" src="{{ asset('images/co2countries.PNG') }}">
                                <strong>
                                    <span style="font-size: 12px">Source: </span>
                                </strong>
                                <span style="font-size: 12px"><a
                                        href="https://www.climatewatchdata.org/ghg-emissions?end_year=2019&start_year=1990">
                                        https://www.climatewatchdata.org/ghg-emissions?end_year=2019&start_year=1990</a></span>
                            </div>
                    </div>
                </section>
            </div>
        </div>
        </section>
    </x-slot>
</x-layouts.app>
