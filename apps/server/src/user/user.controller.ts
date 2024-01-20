import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger'
import { APIResponse } from 'src/response/ApiResponse'
import { ResponseData } from 'src/response/ResponseFormat'
import { CreateUserDto, LoginDto, LoginRes, UserInfosDto } from './dto/user.dto'
import { UserService } from './user.service'

@ApiTags('web前台用户模块😀')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ApiBody({ type: CreateUserDto })
  @APIResponse()
  @ApiOperation({ summary: '用于注册用户', description: '需要输入用户名、密码、确认密码' })
  async registerUser(@Body() CreateUserDto: CreateUserDto) {
    const res = await this.userService.createUser(CreateUserDto)
    if (res === '注册成功')
      return ResponseData.ok(null, res)
    else
      return ResponseData.fail(res, 40001)
  }

  @Post('login')
  @APIResponse(LoginRes)
  @ApiOperation({ summary: '用于登录', description: '使用用户名和密码登录（返回的Token添加在请求头Header中）' })
  async loginUser(@Body() loginDto: LoginDto) {
    const res = await this.userService.login(loginDto)
    if (res === '用户不存在' || res === '密码不正确' || res === '密码格式不对') 
      return ResponseData.fail(res, 40001)
    else
      return ResponseData.ok({ token: res }, '登陆成功')
  }

  @Get('findAll')
  @ApiOperation({ summary: '查询所有学生信息', description: '查询所有学生信息' })
  @APIResponse([UserInfosDto])
  async findAll(): Promise<ResponseData<Array<UserInfosDto>>> {
    const res = await this.userService.findAll()
    return ResponseData.ok(res, '查询成功')
  }

}
