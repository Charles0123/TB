<template>
  <div class="container">
    <h5>ER第一級</h5>
    <div class="row">
      <div class="col-lg-5 col-md-4">
        <img src="./images/Patient.png" alt="病患" />
      </div>
      <div class="col-lg-7 col-md-8">
        <table class="table table-collapse m-1 border rounded">
          <tbody>
            <th class="borderradiusupleft">基本資料</th>
            <th class="borderradiusupright"></th>
            <tr>
              <td class="fontsize16">姓名</td>
              <td></td>
            </tr>
            <tr>
              <td class="fontsize16">病歷號</td>
              <td></td>
            </tr>
            <tr>
              <td class="fontsize16 borderradiusleft">科別</td>
              <td class="borderradiusright"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h5 {
  background-color: red;
  font-size: 14px;
  color: white;
  text-align: center;
  line-height: 2.5em;
  padding: 10px;
  height: 50px;
}

.fontsize16 {
  font-size: 16px;
  color: white;
  width: 120px;
  height: 60px;
  background-color: #009fcc;
  line-height: 2.5em;
}
.borderradiusleft {
  border-bottom-left-radius: 10px;
}
.borderradiusright {
  border-bottom-right-radius: 10px;
}

.borderradiusupleft {


  border-top-left-radius: 10px;
  background-color: #0088a8;
  color: white;
  height: 50px;
}
.borderradiusupright {
  border-top-right-radius: 10px;
  background-color: #0088a8;
  color: white;
  height: 50px;
}
</style>
