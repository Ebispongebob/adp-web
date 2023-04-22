<template>
    <el-table :data="tableData" style="width: 100%" max-height="400">
        <el-table-column fixed prop="fixedNumber" width="80" />
        <el-table-column fixed prop="reference_id" width="180" />
        <el-table-column prop="count" width="80" />
    </el-table>
</template>
  
<script>
export default {
    created() {
        this.getRankList();
    },
    watch: {
    $route(to, from) {
      // 当路由变化时，重新设置title
      this.getRankList();
    }
  },
    components: {},
    data() {
        return {
            tableData: [],
            timer: null
        };
    },
    methods: {
        getRankList() {
            let that = this;
            that.$axios({
                method: "get",
                url: this.GLOBAL.BASE_URL + "rule/event/rank"
            })
                .then(function (res) {
                    console.log(res.data.re);
                    const records = res.data.re.map((record, index) => {
                        return {
                            ...record,
                            fixedNumber: index + 1 // 添加一个名为"fixedNumber"的属性，并设置它的值
                        };
                    });
                    that.tableData = records;
                })
                .catch(function (err) {
                    router.push('/')
                });
        }
    }
};
</script>
  