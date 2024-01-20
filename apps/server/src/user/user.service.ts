import { Injectable } from '@nestjs/common'
import type { DeepPartial } from 'typeorm'
import { Repository, getRepository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'
import { User } from './models/user.entity'
import { UserInfosDto } from './dto/user.dto'
import type { CreateUserDto, LoginDto } from './dto/user.dto'


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
    private readonly JwtService: JwtService,
  ) {}

  /**
   * 登陆
   * @param loginDto
   * @returns Promise<User>
   */
  async login(loginDto: LoginDto): Promise<string> {
    if (loginDto.password.length < 5 || loginDto.password.length > 16) 
      return '密码格式不对'
    const findUser = await this.UserRepository.findOne({
      where: { username: loginDto.username },
    })
    // 没有找到
    if (!findUser) 
      return '用户不存在'

    // 找到了对比密码
    const compareRes: boolean = bcrypt.compareSync(loginDto.password, findUser.password)
    // 密码不正确
    if (!compareRes) 
      return '密码不正确'
    const payload = { username: findUser.username }

    return this.JwtService.sign(payload)

  }

  /**
   * 创建用户
   * @param createUserDto 
   * @returns Promise<User>
   */
  async createUser(createUserDto: CreateUserDto) {
    const findUser = await this.UserRepository.findOne({
      where: { username: createUserDto.username },
    })
    if (findUser && findUser.username === createUserDto.username) 
      return '用户已存在'
    if (createUserDto.password !== createUserDto.confirmPassword) 
      return '两次密码不一致'
    if (createUserDto.password.length < 5 || createUserDto.password.length > 16) 
      return '密码格式不对'

    // 对密码进行加密处理
    const { username, password } = createUserDto

    const user = new User()
    user.username = username
    user.password = password
    await this.UserRepository.save(user)
    return '注册成功'
  }

  /**
   * 查找所有用户
   * @returns Promise<User>
   */
  async findAll(): Promise<Array<UserInfosDto>> {
    const resData = await this.UserRepository.find()

    const usersData = resData.map((result) => {
      const dto = new UserInfosDto()
      dto.username = result.username
      dto.avatarUrl = result.avatarUrl
      return dto
    })

    return usersData
  }

  /**
   * 根据ID删除用户
   * @param id
   * @returns Promise<User>
   */
  async delUser(id: string): Promise<boolean> {
    const res = await this.UserRepository.delete(id)
    if (res.affected > 0) 
      return true

    return false
  }

  /**
   * 根据ID修改用户
   * @param id
   * @returns Promise<User>
   */
  async updateUser(id: number, entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.update(id, entity)
    if (res.affected > 0) 
      return true

    return false
  }
}
