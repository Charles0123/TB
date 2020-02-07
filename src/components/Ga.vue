<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <table class="table">
          <tr class="fontsizetextset">麻醉方式</tr>
          <tr class="fontsize18text15">GA</tr>
        </table>
      </div>
      <div class="col-6">
        <table class="table">
          <tr class="fontsizetextset">麻醉危險分級</tr>
          <tr class="fontsize18text15">II</tr>
        </table>
      </div>
    </div>
    <div class="class2">
      <table class="table">
        <tr class="fontsizetextset">主診斷碼</tr>
        <tr class="fontsize18text15">膽曩結石併急性膽囊炎末伴有阻塞</tr>
      </table>
    </div>
    <div class>
      <table class="table">
        <tr class="fontsizetextset">手術方式</tr>
        <tr
          class="fontsize18text15"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eligendi.</tr>
      </table>
    </div>
    <div class>
      <table class="table">
        <thead class="fontsize16">
          <th>一般備駐(器械及備料)</th>
          <th>特殊備駐(病人隱私)</th>
        </thead>
        <tr class="table-bordered">
          <td class="textalign">住院方式：當日住院</td>
          <td class="textalign">住院方式：當日住院</td>
        </tr>
        <tr>
          <td class="textalign">call *10646</td>
          <td class="textalign">call *10646</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "GA",
  components: {}
};
</script>

<style>
body {
  padding: 10px;
}

.fontsizetextset {
  font-size: 18px;
  color: white;
  height: 60px;
  background-color: #007799;
  font-weight: bold;
  text-indent: 20px;
}
.fontsize18text15 {
  font-size: 18px;
  color: white;
  height: 60px;
  background-color: #0088a8;
  text-indent: 15px;
}
.fontsize16 {
  font-size: 16px;
  color: white;
  text-align: center;
  background-color: #007799;
}
.textalign {
  text-align: start;
}
</style>