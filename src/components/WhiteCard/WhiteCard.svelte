<script lang="ts">
    import Card from '../Card/Card.svelte';
    export let text: string = '';
</script>

<Card 
    text="{text}" 
    cardColor="white" 
    textColor="black">
</Card>