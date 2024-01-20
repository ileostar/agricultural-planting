import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { AppService } from './app.service'
import { ResponseData } from './response/ResponseFormat'

@ApiTags('A18-基于云计算平台构建智能温室种植平台🎉')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Hello, I\'m LeoStar', description: '这是一个测试接口' })
  getHello() {
    const res = this.appService.getHello()
    return ResponseData.ok(res)
  }
}
