<template>
  <div class="container">
    <div>
      <table class="table table-bordered">
        <td>
          <img class="viewimg" src="./images/Doctor1.png" alt="主刀醫生">
          <tr class="Doctor">主刀醫師</tr>
        </td>
        <td>
          <img class="viewimg" src="./images/Doctor2.png" alt="主治醫生">
          <tr class="Doctor">主治醫師</tr>
        </td>
        <td>
          <img class="viewimg" src="./images/Doctor3.png" alt="住院醫生">
          <tr class="Doctor">住院醫師</tr>
        </td>

      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Views",
  props: {}
};
</script>

<style>
.viewimg{
  width: 150px;
  height: 180px;;
}
.Doctor{
  font-size: 20px;
  text-indent:2em;
  font-weight:bold;
  

}
</style>