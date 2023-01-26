<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset="UTF-8">
        <meta name='viewport' content= "width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <!-- Scripts -->
        <link href="/css/app.css" rel="stylesheet">
    <script src="{{ asset('js/app.js') }}" defer></script>
    @stack('child-scripts')
    <script src="https:cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js" 
    integrity="sha512-DZqqY3PiOvTP9HkjIWgjO6ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ=="
    crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <!-- Styles -->
    <script src="https://cdn.jsdelivr.net/npm/vega@[VERSION]"></script>
  <script src="https://cdn.jsdelivr.net/npm/vega-lite@[VERSION]"></script>
  <!-- Import vega-embed -->
  <script src="https://cdn.jsdelivr.net/npm/vega-embed@[VERSION]"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
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