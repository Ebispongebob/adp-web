<template>
    <el-dialog :visible.sync="visible" title="Add Reference" @close="resetForm">
      <el-form ref="dataSourceForm" :model="dataSource" label-width="120px">
        <el-form-item label="ReferenceId" prop="referenceId">
          <el-input v-model="dataSource.referenceId"></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input v-model="dataSource.description"></el-input>
        </el-form-item>
        <el-form-item label="Kafka Broker" prop="kafkaBroker">
          <el-input v-model="dataSource.brokerAddr"></el-input>
        </el-form-item>
        <el-form-item label="Kafka Topic" prop="kafkaTopic">
          <el-input v-model="dataSource.topic"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="visible = false">Cancel</el-button>
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
        dataSource: {
          referenceId: "",
          description: "",
          brokerAddr: "",
          topic: "",
          createTime: "",
        },
      };
    },
    methods: {
      submitForm() {
        this.dataSource.createTime = new Date();
        this.$emit("save", this.dataSource);
        this.visible = false;
        this.resetForm();
      },
      resetForm() {
        this.dataSource.referenceId = "";
        this.dataSource.description = "";
        this.dataSource.kafkaBroker = "";
        this.dataSource.topic = "";
      },
    },
    watch: {
      visible(val) {
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
  