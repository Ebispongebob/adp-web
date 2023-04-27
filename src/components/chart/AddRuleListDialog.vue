<template>
  <el-dialog :visible.sync="dialogVisible" title="Edit Rule" @close="resetForm">
    <el-form ref="dataSourceForm" :model="dataSource" label-width="120px">
      <el-form-item label="ruleName" prop="ruleName">
        <el-input v-model="dataSource.ruleName"></el-input>
      </el-form-item>
      <el-form-item label="eventType" prop="eventType">
        <el-input v-model="dataSource.eventType"></el-input>
      </el-form-item>
      <el-form-item label="windowSize" prop="windowSize">
        <el-input v-model="dataSource.windowSize"></el-input>
      </el-form-item>
      <el-form-item label="threshold" prop="threshold">
        <el-input v-model="dataSource.threshold"></el-input>
      </el-form-item>
      <el-form-item label="alertConfig" prop="alertConfig">
        <el-input v-model="dataSource.alertConfig"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="submitForm">Save</el-button>
    </div>
  </el-dialog>
</template>
  
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogVisible: this.visible,
      dataSource: {
        ruleName: "",
        eventType: "",
        windowSize: "",
        threshold: "",
        alertConfig: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.dataSource.createTime = new Date();
      this.$emit("save", this.dataSource);
      this.$emit("update:visible", false);
      this.resetForm();
    },
    resetForm() {
      this.dataSource.ruleName = "";
      this.dataSource.eventType = "";
      this.dataSource.windowSize = "";
      this.dataSource.threshold = "";
      this.dataSource.alertConfig = "";
    },
  },
  watch: {
    visible(val) {
      this.dialogVisible = val;
      if (!val) {
        this.resetForm();
      }
    },
  },
};
</script>
  
<style scoped>
.dialog-footer {
  text-align: right;
}
</style>
  