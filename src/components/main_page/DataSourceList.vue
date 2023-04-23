<template>
  <div class="bg-white">
    <div class="codefun-flex-col codefun-justify-start">
      <div class="codefun-flex-col section_14 space-y-26">
        <el-input placeholder="search by reference or desc" v-model="search" clearable @input="filterData"></el-input>
        <el-button type="primary" @click="addDataSource" class="addButton">Add</el-button>
        <el-table :data="filteredData" style="width: 100%;" border class="list">
          <el-table-column prop="referenceId" label="ReferenceId" width="100"></el-table-column>
          <el-table-column prop="description" label="Description" width="254"></el-table-column>
          <el-table-column prop="brokerAddr" label="Broker Addr" width="200"></el-table-column>
          <el-table-column prop="topic" label="Topic" width="150"></el-table-column>
          <el-table-column prop="createTime" label="Created Time" width="200"></el-table-column>
          <el-table-column label="Operation" width="100">
            <template v-slot:default="scope">
              <el-button type="danger" size="mini" @click="deleteDataSource(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <add-data-source-dialog :visible.sync="dialogVisible" @save="saveDataSource"></add-data-source-dialog>
      </div>
    </div>
  </div>
</template>
  
<script>
import AddDataSourceDialog from '../chart/AddDataSourceDialog.vue';

export default {
  created() {
    this.getDatasourceList()
  },
  components: {
    AddDataSourceDialog,
  },
  data() {
    return {
      search: "",
      dialogVisible: false,
      dataSourceList: [],
      filteredData: [],
    };
  },
  methods: {
    getDatasourceList() {
      let that = this;
      that.$axios({
        method: "get",
        url: this.GLOBAL.BASE_URL + "refer/get"
      })
        .then(function (res) {
          console.log(res.data.re)
          that.filteredData = res.data.re
        })
        .catch(function (err) {
        })
    },
    addDataSource() {
      this.dialogVisible = true;
    },
    saveDataSource(dataSource) {
      this.dataSourceList.push(dataSource);
      this.filteredData = this.dataSourceList;
    },
    deleteDataSource(index) {
      this.dataSourceList.splice(index, 1);
      this.filteredData = this.dataSourceList;
    },
    filterData() {
      this.filteredData = this.dataSourceList.filter(
        (dataSource) =>
          dataSource.referenceId.includes(this.search) ||
          dataSource.description.includes(this.search)
      );
    },
  },
};
</script>
<style scoped>
.bg-white {
  background-color: white;
}

.section_14 {
  padding: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 2px 4px #00000005;
  width: 1065px;
}

.addButton {
  margin-top: 30px;
}

.list {
  margin-top: 30px;
}

</style>