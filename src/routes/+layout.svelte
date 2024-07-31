<script>
    import "../app.css";
    import {ModeWatcher} from "mode-watcher";
    import DarkMode from "$lib/components/DarkMode.svelte";
    import {Toaster} from "svelte-sonner";
    import {Button} from "$lib/components/ui/button";
    import {House} from "lucide-svelte";
    import {goto} from "$app/navigation";
    import { inject } from '@vercel/analytics'
    import {dev} from "$app/environment";
    import MarkDown from "$lib/components/MarkDown.svelte";

    inject({ mode: dev ? 'development' : 'production' })
    let openPdf = false
</script>

<ModeWatcher/>
<Toaster/>

<nav class="flex flex-row justify-between py-5 px-10 items-center bg-white dark:bg-black fixed w-full">
    <Button on:click={() => goto("/")} variant="outline" size="icon">
        <House />
    </Button>
    <MarkDown source="**[Expertise et Compétence](/expertise-et-competence)** | **[Expérience](/Experience)** | **[Education](/Education)** | **[Projets](/project)** | **[Curriculum Vitae](/CV_PK.pdf)** | **[Contact](/contact)** |"
    <DarkMode/>
</nav>

<slot/>