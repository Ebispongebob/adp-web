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
              <el-button type="danger" size="mini" @click="deleteDataSource(scope.$index)" style="width: 70px;">delete</el-button>
              <el-button type="primary" size="mini" @click="getDialogData(scope.$index)" style="margin-left: 0; margin-top: 5px; width: 70px;">rules</el-button>
            </template>
          </el-table-column>
        </el-table>
        <add-data-source-dialog :visible.sync="dialogVisible" @save="saveDataSource"></add-data-source-dialog>
        <el-dialog :visible.sync="addRuleDialogVisible" title="Association Rules">
          <el-form :model="rule">
            <el-table :data="referenceRule">
              <el-table-column property="referenceId" label="Reference" width="200" />
              <el-table-column property="ruleName" label="Rule" width="300" />
              <el-table-column label="Operation">
                <template v-slot:default="scope">
                  <el-button type="danger" size="mini" @click="deleteRel(scope.$index)">delete</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-form-item label="[ADD] Rule name: " :label-width="formLabelWidth" style="margin-top: 10px;">
              <el-input v-model="rule.ruleName" autocomplete="off" />
            </el-form-item>
          </el-form>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="addRuleDialogVisible = false">Cancel</el-button>
              <el-button type="primary" @click="associationRule()">
                Save
              </el-button>
            </span>
          </template>
        </el-dialog>
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
      addRuleDialogVisible: false,
      rule: {
        referenceId: "",
        ruleName: ""
      },
      formLabelWidth: '140px',
      dataSourceList: [],
      filteredData: [],
      referenceRule: []
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
      let that = this;
      that.$axios({
        method: "post",
        url: this.GLOBAL.BASE_URL + "refer/save",
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(dataSource)
      })
        .then(function (res) {
          that.filteredData = res.data.re
          that.getDatasourceList()
        })
        .catch(function (err) {
          // Handle error
        });

    },
    deleteDataSource(index) {
      let that = this;
      that.$axios({
        method: "get",
        url: this.GLOBAL.BASE_URL + "refer/del?referenceId=" + this.filteredData[index].referenceId,
      })
        .then(function (res) {
          that.getDatasourceList()
        })
        .catch(function (err) {
          // Handle error
        });
    },
    deleteRel(index) {
      let that = this;
      that.$axios({
        method: "get",
        url: this.GLOBAL.BASE_URL + "rule/rel/del?referenceId=" + this.rule.referenceId + "&ruleName=" + this.referenceRule[index].ruleName,
      })
        .then(function (res) {
          that.getDatasourceList()
        })
        .catch(function (err) {
          // Handle error
        });
      this.addRuleDialogVisible = false
    },
    getDialogData(index) {
      this.rule.referenceId = this.filteredData[index].referenceId;
      let that = this;
      that.$axios({
        method: "get",
        url: this.GLOBAL.BASE_URL + "rule/rel/get?referenceId=" + this.filteredData[index].referenceId,
      })
        .then(function (res) {
          that.referenceRule = res.data.re
        })
        .catch(function (err) {
          // Handle error
        });
      this.addRuleDialogVisible = true;
    },
    associationRule() {
      let that = this;
      that.$axios({
        method: "get",
        url: this.GLOBAL.BASE_URL + "rule/rel/save?referenceId=" + this.rule.referenceId + "&ruleName=" + that.rule.ruleName,
      })
        .then(function (res) {
          addRuleDialogVisible = false
        })
        .catch(function (err) {
          // Handle error
        });
      this.addRuleDialogVisible = false
      this.rule.ruleName = ""
    },
    filterData() {
      let that = this;
      that.$axios({
        method: "get",
        url: this.GLOBAL.BASE_URL + "refer/get/query?referenceId=" + this.search,
      })
        .then(function (res) {
          that.filteredData = res.data.re
        })
        .catch(function (err) {
          // Handle error
        });
    },
  },
}
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

.dialog-footer button:first-child {
  margin-top: 20px;
  margin-right: 10px;
}
</style>