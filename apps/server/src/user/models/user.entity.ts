import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'
import * as bcrypt from 'bcryptjs'

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    comment: '用户名',
    length: 100,
    default: '',
  })
  @IsNotEmpty()
  username: string

  @Column({
    comment: '密码',
  })
  password: string

  @Column({
    comment: '头像地址',
    length: 100,
    default: 'https://cdn.jsdelivr.net/gh/ileostar/picx-images@master/20240120/leostar-profile.1aheunrxjl9c.avif',
  })
  avatarUrl: string

  @Column({
    comment: '用户权限',
    length: 100,
    default: '0',
  })
  auth: string

  @Column({
    name: 'create_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date

  @Column({
    name: 'update_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateTime: Date

  /**
   * 插入密码前加密
   * @return {void}
   */
  @BeforeInsert()
  async encryptPwd() {
    this.password = await bcrypt.hashSync(this.password)
  }
}
