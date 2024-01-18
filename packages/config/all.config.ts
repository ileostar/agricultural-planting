interface Config {
    web: {
        projectName: string;
        projectTitle: string;
        projectDesc: string;
        projectVersion: string;
        projectAuthor: string;
    },
    admin: {
        projectName: string;
        projectTitle: string;
        projectDesc: string;
        projectVersion: string;
        projectAuthor: string;
    },
    backend: {
        url: string;
        port: number;
        api: string;
        apiPrefix: string;
        Author: string;
    }
}

const OverConfig:Config  = {
    // 前台项目配置
    web: {
        // 项目名称
        projectName: '植物检测系统',
        // 项目标题
        projectTitle: '植物检测系统',
        // 项目描述
        projectDesc: '植物检测系统',
        // 项目版本
        projectVersion: '1.0.0',
        // 项目作者
        projectAuthor: 'liuxinghao',
    },
    // 前台项目配置
    admin: {
        // 项目名称
        projectName: '植物检测系统后台',
        // 项目标题
        projectTitle: '植物检测系统后台',
        // 项目描述
        projectDesc: '植物检测系统后台',
        // 项目版本
        projectVersion: '1.0.0',
        // 项目作者
        projectAuthor: 'liuxinghao',
    },
    // 后端配置
    backend: {
        // 后台地址
        url: '',
        // 后台端口
        port: 8080,
        // 后台接口地址
        api: '/api',
        // 后台接口地址
        apiPrefix: '/api',
        // 作者
        Author: 'liuxinghao',
    }
}

export default OverConfig
