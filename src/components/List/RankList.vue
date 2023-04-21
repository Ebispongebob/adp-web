<template>
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="fixedNumber" label="#" width="80" />
      <el-table-column fixed prop="reference_id" label="Reference ID" width="180" />
      <el-table-column prop="count" label="Count" width="180" />
    </el-table>
  </template>
  
  <script>
  export default {
    created() {
      this.getRecordList();
    },
    components: {},
    data() {
      return {
        tableData: []
      };
    },
    methods: {
      getRecordList() {
        let that = this;
        that.$axios({
          method: "get",
          url: this.GLOBAL.BASE_URL + "rule/event/rank"
        })
          .then(function(res) {
            console.log(res.data.re);
            const records = res.data.re.map((record, index) => {
              return {
                ...record,
                fixedNumber: index + 1 // 添加一个名为"fixedNumber"的属性，并设置它的值
              };
            });
            that.tableData = records;
          })
          .catch(function(err) {});
      }
    }
  };
  </script>
  