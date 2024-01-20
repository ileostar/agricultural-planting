import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  username: string

  @ApiProperty({ description: '密码' })
  password: string
  
  @ApiProperty({ description: '校验密码' })
  confirmPassword: string
}

export class UserInfosDto {
  @ApiProperty({ description: '用户名' })
  username: string
  
  @ApiProperty({ description: '头像信息' })
  avatarUrl: string
  
  @ApiProperty({ description: '用户权限' })
  auth: string
}

export class LoginDto {
  @ApiProperty({ description: '用户名' })
  username: string

  @ApiProperty({ description: '密码' })
  password: string
}

export class LoginRes {
  @ApiProperty({ description: '认证Token' })
  token: string
}
