<script>
  import { post } from "./api";
  import { onMount } from "svelte";

  let value = "";
  let salaries = [];
  let salaries_str;
  const salary_backend="http://127.0.0.1:5000/api/data";
  
  onMount(async () => {
    let data = await post(salary_backend)
    
    salaries = data.data.array
    create_value(salaries)
    // salaries_str = JSON.stringify(data)
    
  })

  function create_value(data){
    data.forEach(i => {
      value += i.note
    });
  }
</script>

<!-- TODO: tabluator - import component for tables -->

<table>
  <th>Salary</th><th>static data</th>
  {#each salaries as salary }
    <tr>
      <td>salary.note</td><td>{salary.note}</td>
    </tr>
  {/each}
</table>

<!-- <table>
  <th>Salary</th><th>data from Mongo</th>
  {#each salaries as salary }
    <tr>
      <td>salary.note</td><td>{salary.note}</td>
    </tr>
  {/each}
</table> -->

  
<div>
  <!-- {salaries_str}   -->
  <!-- {value}   -->
</div>


