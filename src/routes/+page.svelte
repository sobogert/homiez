<script lang="ts">
  import { Status } from '$lib/data/status';
  import { type IStatusContainerProps } from '$lib/data/IStatusContainer';
  import StatusContainer from '$lib/components/StatusContainer.svelte';

  class StatusContainerProps implements IStatusContainerProps {
    name: string;
    time: string;
    title?: string;
    status: Status;

    constructor(name: string, time: string, status: Status, title?: string)
    {
      this.name = name;
      this.time = time;
      this.title = title;
      this.status = status;
    }
  }

  let statuses: StatusContainerProps[] =
  [
    new StatusContainerProps(
      "Joe Vuchetich",
      "now",
      Status.Available,
      "Biking to Estabrook Park!"),

    new StatusContainerProps(
      "Sofi Bogert",
      "6:30 - 9:30",
      Status.Unavailable,
      "just hanging")
  ];
</script>

<header class="title-only">Statuses</header>
<section class="statuses">
  {#each statuses as status}
      <StatusContainer homieStatus={status} />
  {/each}
</section>

<style>
  .statuses {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacer) * 3);
    align-items: center;
}

@media screen and (max-width: 600px) {
}
</style>