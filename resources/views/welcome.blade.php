<x-layouts.app>

    <x-slot name="title">
        Home
    </x-slot>

    <x-slot name="slot">

        <section class="bg-emerald-100">

            <div class="container mx-auto">
                <section>

                    <h1 class="pt-10 pl-6 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Eco-friendly cryptocurrencies </span>
                    </h1>
                    <p class="text-justify pl-6 text-lg font-sans text-zinc-600 lg:text-xl dark:text-zinc-600">Cryptocurrency
                        mining requires solving resource-intensive tasks (Proof-of-Work, Proof-of-Stake etc.). <br>
                        Each of them requires a huge amount of processing power. Energy consumption itself does not have<br> a
                        direct impact on the environment. However,
                        the carbon intensity used for electricity causes harm<br> to the environment [1] and as a
                        consequence the global temperature rises, which leads to global warming.

                    </p>


                </section>
                <section>
                    {{--                <div class="grid h-screen place-items-center">--}}
                    <div class='grid-container-element py-7'>

                        <div class='grid-child-element purple'>
                            <a href="consumption">
                                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
                                    <img class="w-full"
                                         src="https://internetofbusiness.com/wp-content/uploads/2018/07/IoT-in-energy-1280x720.jpg"
                                         alt="Sunset in the mountains">
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2"> Energy consumption</div>
                                        <p class="text-gray-700 text-base">
                                            Human activity, especially the consumption of energy, has been considered
                                            one of the main factors contributing to the changing climate [2]
                                        </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                            <span
                                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                        <span
                                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span
                                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class='grid-child-element'>
                            <a href="emission">
                                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">

                                    <img class="w-full"
                                         src="https://airlines.iata.org/sites/default/files/web_cleaning-up-carbon-footprint_credit_TarikVision_shutterstock_2043877847.png"
                                         alt="Sunset in the mountains">
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2"> Carbon emissions</div>
                                        <p class="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                                            nulla!
                                            Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                            <span
                                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                        <span
                                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span
                                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    {{--                </div>--}}
                    {{--            </div>--}}
                </section>
        </section>
    </x-slot>
</x-layouts.app>
