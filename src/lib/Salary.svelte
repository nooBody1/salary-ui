<script>
  import { post } from "./api";
  import { onMount } from "svelte";
  import { Tabulator } from "tabulator-tables";

  let data = [];
  // let value = "";
  let salaries = [];
  // let salaries_str = "";
  var table
  const salary_backend = "http://127.0.0.1:5000/api/data";

  onMount(async () => {
    data = await post(salary_backend);

    // salaries = data.data.array
    // create_value(salaries)
    // salaries_str = JSON.stringify(data)

    salaries = data.data;

    table = new Tabulator("Tabulator Data from Mongo", {
      data: salaries,
      autoColumns: "full",
    });
  });

  // function create_value(data)
  // {
  //   data.forEach(i => {
  //     // value += i.note
  //     value += i.Totalpay
  //   });
  // }
</script>

<!-- <p>Data from Mongo</p> -->
<!-- <table>
  <th>Salary</th><th>static data</th>
  {#each salaries as salary }
  <tr>
    <td>salary.note</td><td>{salary.note}</td>
  </tr>
  {/each}
</table> -->

<p>Direct Data from Mongo</p>
<table>
  <tr><th>Period</th><th>RegularPay</th><th>TotalPay</th></tr>
  {#each salaries as salary}
    <tr>
      <td>{salary.Period}</td><td>{salary.RegularPay}</td><td
        >{salary.TotalPay}</td
      >
    </tr>
  {/each}
</table>

<!-- TODO: tabluator - import component for tables -->
<p>Tabulator</p>
<table>
  <!-- {table} -->
</table>

<div>
  <!-- "data: " {data}  <br> -->
  <!-- "value:" {value}   -->
</div>
