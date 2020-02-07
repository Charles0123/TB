<template>
  <div class="container">
    <table class="table-bordered borderfontsize">
      <tr>
        <td class="blue">手術來源*</td>
        <td class="whitewihi">住院手術</td>
        <td class="blue">手術級別*</td>
        <td class="whitewihi">常規</td>
        <td class="blue">麻醉會診</td>
        <td class="whitewihi2">尚未麻醉會診</td>
      </tr>
      <tr>
        <td class="blue">手術室*</td>
        <td class="whitewihi">汝 15眼科</td>
        <td class="blue">排程時段</td>
        <td class="whitewihi">下午TF</td>
        <td class="blue">使用術室</td>
        <td class="whitewihi2">1小時</td>
      </tr>
      <tr>
        <td class="blue">手術部位</td>
        <td colspan="5" class="white">左側</td>
      </tr>
      <tr>
        <td class="blue">NI()</td>
        <td colspan="5" class="white">最後進食時間: 11/20 07:15;禁食情形;最後進食食物:開水;</td>
      </tr>
    </table>
    <pre></pre>
    <table class="table-bordered">
      <tr>
        <td class="blue">手術全開</td>
        <td class="whitewihi3"></td>
        <td class="blue">壓瘡評估</td>
        <td class="whitewihi3"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Surgery",
  props: {}
};
</script>

<style>
.borderfontsize {
  border: 1px;
  font-size: 16px;
  height: 120px;
}
.blue {
  background-color: #009fcc;
  color: white;
  width: 100px;
  height: 10px;
  font-size: 16px;
  text-align: left;
}
.white {
  background-color: white;
  text-align: left;
  color: grey;
}
.whitewihi {
  background-color: white;
  width: 100px;
  height: 10px;
  text-align: left;
  color: grey;
}
.white3 {
  background-color: white;
}
.whitewihi2 {
  background-color: white;
  width: 210px;
  height: 10px;
  color: grey;
  text-align: left;
}
.whitewihi3 {
  background-color: white;
  width: 255px;
  height: 10px;
  color: grey;
  text-align: left;
}
</style>