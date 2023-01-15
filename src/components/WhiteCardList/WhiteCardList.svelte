<script lang="ts">
	import WhiteCard from '../WhiteCard/WhiteCard.svelte';
    import './WhiteCardList.scss';
    export let whiteCards: string[] = [];
</script>

<div class="card-list">
    {#each whiteCards as card}
        <div>
            <WhiteCard text="{card}"></WhiteCard>
        </div>
        
    {/each}
</div>