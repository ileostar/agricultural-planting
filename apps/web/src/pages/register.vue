<script setup lang="ts">
// @ts-ignore
import { Vue3Lottie } from 'vue3-lottie'
import RegisterJSON from '@/assets/lottie/register.json'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  email: string
}>({
  domains: [
    {
      key: 1,
      value: '',
    },
  ],
  email: '',
})

interface DomainItem {
  key: number
  value: string
}

// 提交表单
const submitForm = function (formEl: FormInstance | undefined) {
	if (!formEl) return
	formEl.validate(async (valid) => {
		if (valid) {
		} else {
			ElMessage.error('请正确填写表单！')
			return false
		}
	})
}

// 回车键登录
const keyDown = (e: { keyCode: number }) => {
	if (e.keyCode == 13 || e.keyCode == 100) {
		submitForm(ruleFormRef.value)
	}
}

useEventListener('keydown', keyDown)
</script>

<template>
  <AuthBox>
    <template v-slot:title>
      植物监测系统
    </template>
    <template v-slot:lottie>
      <Vue3Lottie :animationData="RegisterJSON" width="80%"/>
    </template>
    <template v-slot:header>
      注册
    </template>
    <template v-slot:content>
      <el-form
        ref="formRef"
        label-position="top"
        :model="dynamicValidateForm"
        label-width="120px"
        class="demo-dynamic"
        mt-2>
        <el-form-item
          prop="email"
          label="用户名"
          :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'email',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="dynamicValidateForm.email" />
        </el-form-item>
        <el-form-item
          prop="email"
          label="密码"
          :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'email',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="dynamicValidateForm.email" />
        </el-form-item>
        <el-form-item
          prop="email"
          label="确认密码"
          :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'email',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="dynamicValidateForm.email" />
        </el-form-item>
        <el-form-item class="login-button">
          <div flex justify-between w-full>
            <router-link to="/login" tag="div" class="goRegister" text-3 color-green-600 >
              已有账号，去登陆
            </router-link>
            <o-button type="success" @click="submitForm(ruleFormRef)"  @keydown.enter="keyDown($event)" w-30 work-spacing-5>
              注&nbsp;&nbsp;&nbsp;册
            </o-button>
          </div>
        </el-form-item>
      </el-form>
    </template>
  </AuthBox>
</template>

<route lang="yaml">
name: Register
meta:
  layout: auth
  requiresAuth: false
</route>
