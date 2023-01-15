<script lang="ts">
    import './Card.scss';
    export let text: string = '';
    export let cardColor: string = 'white';
    export let textColor: string = 'black';
</script>

<div style="--card-color: {cardColor}" class="card">
    <span style="--text-color: {textColor}">{text}</span>
</div>