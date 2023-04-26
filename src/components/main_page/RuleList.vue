<template>
    <div class="bg-white">
        <div class="codefun-flex-col codefun-justify-start">
            <div class="codefun-flex-col section_14 space-y-26">
                <el-input placeholder="search by rule name" v-model="search" clearable
                    @input="filterData"></el-input>
                <el-button type="primary" @click="addDataSource" class="addButton">Add</el-button>
                <el-table :data="filteredData" style="width: 100%;" border class="list">
                    <el-table-column prop="ruleName" label="RuleName" width="150"></el-table-column>
                    <el-table-column prop="eventType" label="EventType" width="150"></el-table-column>
                    <el-table-column prop="windowSize" label="WindowSize" width="110"></el-table-column>
                    <el-table-column prop="threshold" label="Threshold" width="110"></el-table-column>
                    <el-table-column prop="alertConfig" label="AlertConfig" width="184"></el-table-column>
                    <el-table-column prop="createTime" label="CreateTime" width="200"></el-table-column>
                    <el-table-column label="Operation" width="100">
                        <template v-slot:default="scope">
                            <el-button type="danger" size="mini" @click="deleteDataSource(scope.$index)">delete</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <AddRuleListDialog :visible.sync="dialogVisible" @save="saveDataSource" @update:visible="dialogVisible = $event"/>
            </div>
        </div>
    </div>
</template>
    
<script>
import AddRuleListDialog from '../chart/AddRuleListDialog.vue';

export default {
    created() {
        this.getDatasourceList()
    },
    components: {
        AddRuleListDialog,
    },
    data() {
        return {
            search: "",
            dialogVisible: false,
            ruleList: [],
            filteredData: [],
        };
    },
    methods: {
        getDatasourceList() {
            let that = this;
            that.$axios({
                method: "get",
                url: this.GLOBAL.BASE_URL + "rule/list"
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
        saveDataSource(ruleList) {
            let that = this;
            that.$axios({
                method: "post",
                url: this.GLOBAL.BASE_URL + "rule/save",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(ruleList)
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
                url: this.GLOBAL.BASE_URL + "rule/del?ruleName=" + this.filteredData[index].ruleName,
            })
                .then(function (res) {
                    that.getDatasourceList()
                })
                .catch(function (err) {
                    // Handle error
                });
        },
        filterData() {
            let that = this;
            that.$axios({
                method: "get",
                url: this.GLOBAL.BASE_URL + "rule/list/query?ruleName=" + this.search,
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
</style>