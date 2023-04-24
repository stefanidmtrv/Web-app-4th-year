<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset="UTF-8">
        <meta name='viewport' content= "width=device-width, initial-scale=1.0">
        {{-- <meta http-equiv="X-UA-Compatible" content="ie=edge"> --}}
        {{-- <script src="{{ asset('js/app.js') }}" ></script> --}}
        <link href="/css/app.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="{{ url('/css/style.css') }}" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm//vega@5"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm//vega-lite@4.17.0"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm//vega-embed@6"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        {{-- <link rel="stylesheet" href="{{ mix('css/app.css') }}"> --}}

        <script src="{{ mix('js/app.js') }}"></script>
        <title>Cryptocurrencies</title>
    </head>
<body>

    <x-navbar>

    </x-navbar>

            <header class="bg-white shadow">
               <div class="max-w-8xl mx-auto py-3 px-8 sm:px-6 lg:px-8">
                   <h2 class="font-semibold text-xl text-gray-800 leading-tight ">
                       {{ $title }}
                   </h2>

               </div>
           </header>

               {{ $slot }}
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
 <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="references" class="hover:underline">References</a>
    </span>
    </footer>


    <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
</body>
</html>
