<script setup lang="ts">
 // @ts-ignore
import { Vue3Lottie } from 'vue3-lottie'
import LoginJSON from '@/assets/lottie/login.json'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

const router = useRouter()
const ruleFormRef = ref<FormInstance>()

// 自定义表单校验规则
const username = (_rule: any, value: any, callback: any) => {
	if (value === '') {
		callback(new Error('请输入用户名'))
	} else {
		callback()
	}
}
const password = (_rule: any, value: any, callback: any) => {
	if (value === '') {
		callback(new Error('请输入密码'))
	} else {
		callback()
	}
}

// 表单
const ruleForm = reactive({
	username: '',
	password: ''
})

// 表单校验
const rules = reactive<FormRules>({
	username: [{ validator: username, trigger: 'blur' }],
	password: [{ validator: password, trigger: 'blur' }]
})

onMounted(() => {
	//绑定监听事件
	window.addEventListener('keydown', keyDown)
});
onUnmounted(() => {
	//销毁事件
	window.removeEventListener('keydown', keyDown, false)
});

// 提交表单
const submitForm = function (formEl: FormInstance | undefined) {
  alert('提交表单')
  router.push('/')
	if (!formEl) return
	formEl.validate(async (valid) => {
		if (valid) {
      router.replace('/')
		} else {
			ElMessage.error('请正确填写表单！')
			return false
		}
	})
}

const go = () => {
  router.push('/register')
}

// 回车键登录
const keyDown = (e: { keyCode: number }) => {
	if (e.keyCode == 13 || e.keyCode == 100) {
		submitForm(ruleFormRef.value)
	}
}
// 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.resetFields()
}
</script>

<template>
  <AuthBox>
    <template v-slot:title>
      植物监测系统
    </template>
    <template v-slot:lottie >
        <Vue3Lottie :animationData="LoginJSON" width="95%"/>
    </template>
    <template v-slot:header>
      登陆
    </template>
    <template v-slot:content>
      <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      label-position="top"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      mt-7>
        <el-form-item label="用户名" prop="username" class="item">
          <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password" class="item">
          <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item class="login-button">
          <o-button type="success" @click="go()" @keydown.enter="keyDown($event)" w-23 work-spacing-5 mr-2>
            登&nbsp;&nbsp;&nbsp;陆
          </o-button>
          <o-button type="info" @click="resetForm(ruleFormRef)" w-23 work-spacing-5>
            重&nbsp;&nbsp;&nbsp;置
          </o-button>
        </el-form-item>
      </el-form>
      <router-link to="/register" tag="div" class="goRegister" align="right" text-3 color-green-600>
        没有账号？转去注册 
      </router-link>
    </template>
  </AuthBox>
</template>
