<x-layouts.app>

    <x-slot name="title">
        Home
    </x-slot>

    <x-slot name="slot">

        <section class="bg-emerald-100">

            <div class="container mx-auto">
                <section>

                    <h1 class="pt-10 pl-6 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Cryptocurrency mining and climate change</span>
                    </h1>
                    <p class="text-justify pl-6 text-lg font-sans text-zinc-600 lg:text-xl dark:text-zinc-600">
                        Cryptocurrency
                        mining requires solving resource-intensive tasks (Proof-of-Work, Proof-of-Stake etc.).
                        Each of them requires a huge amount of processing power. Energy consumption itself does not have
                        a
                        direct impact on the environment. However,
                        the carbon intensity used for electricity causes harm to the environment <sup>1</sup> and as a
                        consequence the global temperature rises, which leads to global warming.

                    </p>


                </section>
                <section>
                    {{--                <div class="grid h-screen place-items-center">--}}
                    <div class='flex flex-wrap justify-center'>

                        <div class='p-4 max-w-sm'>
                            <a href="consumption">
                                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
                                    <img class="w-full"
                                         src="https://internetofbusiness.com/wp-content/uploads/2018/07/IoT-in-energy-1280x720.jpg"
                                         alt="Sunset in the mountains">
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2"> Energy consumption</div>
                                        <p class="text-gray-700 text-base">
                                            Human activity, especially the consumption of energy, has been considered
                                            one of the main factors contributing to the changing climate<sup>2</sup>
                                        </p>
                                    </div>

                                </div>
                            </a>
                        </div>
                        <div class='p-4 max-w-sm'>
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

                                </div>
                            </a>
                        </div>
                        <div class='p-4 max-w-sm'>
                            <a href="bitcoin">
                                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">

                                    <img class="w-full"
                                         src="https://g.foolcdn.com/editorial/images/721247/gold-coin-with-bitcoin-symbol-on-it-cryptocurrency-btc-1.jpg"
                                         alt="Sunset in the mountains">
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2"> Bitcoin</div>
                                        <p class="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                                            nulla!
                                            Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>

                                </div>
                            </a>
                        </div>

                    </div>

                    <p>
                        Definitions
                        <br>

                        “Proof of work” and “proof of stake” are the two major consensus mechanisms cryptocurrencies
                        use to verify new transactions,
                        add them to the blockchain, and create new tokens.
                        Proof of work, first pioneered by Bitcoin, uses mining to achieve those goals.
                        Proof of stake — which is employed by Cardano, the ETH2 blockchain, and others
                        — uses staking to achieve the same things.

                        <strong>
                            <span style="font-size: 12px">Source: </span>
                        </strong>
                        <span style="font-size: 12px"><a
                                href="https://www.coinbase.com/learn/crypto-basics/what-is-proof-of-work-or-proof-of-stake">
                        https://www.coinbase.com/learn/crypto-basics/what-is-proof-of-work-or-proof-of-stake</a>
                </span>
                        <br>
                        In PoW miners use specialised hardware to solve
                        the complex mathematical puzzle of mining the crypto-asset, validate transactions and secure
                        the expanding network. This procedure is computationally expensive and translates directly
                        into high energy consumption..

                        The significant energy consumption weakness of PoW can be addressed by another blockchain
                        consensus mechanism, namely proof-of-stake (PoS). The main idea behind PoS is that to become a
                        validator (or “miner”) of transactions, network participants must lock up (or “stake”) a certain
                        amount of the underlying crypto-asset. These locked up crypto-assets are used as a form of
                        collateral for the security of the network. Hence, the decisive factor that determines whether a
                        validator can successfully mine a block is not computing power, but the amount of staked
                        crypto-assets. Crypto-assets built on PoS blockchains thus rely on miners pledging crypto-asset
                        collateral instead of computing power, leading to substantially lower energy consumption.<sup></sup>
                    </p>


            </div>
        </section>
        </section>
    </x-slot>
</x-layouts.app>
