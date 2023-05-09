@props(['url', 'header', 'text'])

<div class="max-w-sm h-full rounded overflow-hidden shadow-lg bg-slate-50">
    <div class="flex h-48 w-full overflow-hidden justify-center items-center">
        <img src="{{ $url }}">
    </div>
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ $header }}</div>
        <p class="text-gray-700 text-base">{{ $text }}</p>
    </div>
</div>
