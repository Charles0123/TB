<template>
  <div class="container">
    <div class="row width650">
      <div class="col-4">
        <table class="table table-borderless table-sm">
          <thead>
            <tr>
              <th>項目名稱</th>
              <th class="textendcol20px">值</th>
              <th class="textendcol20px">評分</th>
            </tr>
          </thead>
          <!-- <tbody> -->
            <tr>
              <th>收縮壓</th>
              <td class="textendcol20px">110</td>
              <td class="textendcol20px">1</td>
            </tr>
            <tr>
              <th>脈搏</th>
              <td class="textendcol20px">58</td>
              <td class="textendcol20px">0</td>
            </tr>
            <tr>
              <th>呼吸</th>
              <td class="textendcol20px">10</td>
              <td class="textendcol20px">0</td>
            </tr>
            <tr>
              <th>體溫</th>
              <td class="textendcol20px">37.0</td>
              <td class="textendcol20px">2</td>
            </tr>
            <tr>
              <th>血氧</th>
              <td class="textendcol20px">95</td>
              <td class="textendcol20px">0</td>
            </tr>
            <tr>
              <th>意識變化</th>
              <td class="textendcol20px">110</td>
              <td class="textendcol20px">0</td>
            </tr>
          <!-- </tbody> -->
        </table>
      </div>
      <div class="col-3 green">
        <p>CDEWS</p>
        <p>4</p>
        <p>2019/12/06</p>
      </div>
      <div class="col-4">
        <table class="table table-borderless table-sm">
          <thead>
            <tr>
              <td>項目名稱</td>
              <td class="textendcol20px">值</td>
              <td class="textendcol20px">評分</td>
            </tr>
          </thead>
          <!-- <tbody> -->
            <tr>
              <th>PROM</th>
              <td class="textendcol20px"></td>
              <td class="textendcol20px">0</td>
            </tr>
            <tr>
              <th>GDM</th>
              <td class="textendcol20px"></td>
              <td class="textendcol20px"></td>
            </tr>
            <tr>
              <th>Age</th>
              <td class="textendcol20px"></td>
              <td class="textendcol20px">1</td>
            </tr>
            <tr>
              <th>Placenta</th>
              <td class="textendcol20px"></td>
              <td class="textendcol20px">0</td>
            </tr>
          <!-- </tbody> -->
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CDEWS",
  props: {}
};
</script>

<style>
.green {
  background-color: green;
  font-size: 18px;
  text-align: center;
  color: white;
  margin-top: 0px;
  margin-bottom: 1%;
  padding-top: 5%;
}

.alignend {
  text-align: end;
}
.textendcol20px {
  text-align: end;
  column-width: 20px;
}
.width650
{
  width: 650px;
}
</style>