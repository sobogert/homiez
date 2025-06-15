<div class="status-container {Status[homieStatus.status].toLowerCase()}">
      <a href="/homieDetails">
        <div class="top-row">
          <h2>{homieStatus.name}</h2>
          <h2>{homieStatus.time}</h2>
        </div>
        <h3>{homieStatus.title}</h3>
      </a>
</div>

<script lang="ts">
  import {Status} from '$lib/data/status';
  const { homieStatus } = $props();
</script>

<style>
  a {
    text-decoration: none;
    color: var(--black);
  }
  .status-container {
    width: 100%;
    border-radius: var(--spacer);
    padding: calc(var(--spacer) * 1.5) calc(var(--spacer) * 2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--spacer);
  }
  .top-row {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-weight: bold;
  }
  .available {
      border: 2px solid var(--dark-green);
      background-color: var(--light-green);
  }
  .unavailable {
      background-color: var(--light-red);
  }
  @media screen and (max-width: 600px) {
  }
</style>
