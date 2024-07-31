<script>
    import MarkDown from "$lib/components/MarkDown.svelte";
    import source from "$lib/data/intro.md?raw";
</script>

<header class="space-y-4 text-center pt-14">
    <h1 class="text-5xl"> </h1>
    <h2 class="text-xl"> </h2>
</header>

<div class="py-20 sm:py-14 md:py-10">
    <MarkDown {source}/>
</div>
