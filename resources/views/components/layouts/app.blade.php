<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset="UTF-8">
        <meta name='viewport' content= "width=device-width, initial-scale=1.0">
        {{-- <meta http-equiv="X-UA-Compatible" content="ie=edge"> --}}
        <link href="/css/app.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="{{ url('/css/style.css') }}" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm//vega@5"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm//vega-lite@4.17.0"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm//vega-embed@6"></script>
        
        <title>Cryptocyrrencies</title>
    </head>
<body>
    
    <x-navbar>

    </x-navbar>
    <div class='container my-3'>
        
            <header class="bg-white shadow">
               <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                   <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                       {{ $title }}
                   </h2>
                   
               </div>
           </header>
      
               {{ $slot }} 
            
           </div>
           <script src="{{ asset('js/app.js') }}" ></script>

</body>
</html>