# guide/教程
[guide/教程](https://blog.azez.info/%E9%A3%9E%E4%B8%80%E6%A0%B7%E7%9A%84%E6%84%9F%E8%A7%89-hexo%E8%85%BE%E8%AE%AF%E4%BA%91%E5%BC%80%E5%8F%91%E9%83%A8%E7%BD%B2.html)

# hexo-deployer-tcb-static

Tencent CloudBase (TCB) plugin of Hexo

## Installation

### npm

> $ npm install hexo-deployer-tcb-static --save

### yarn

> $ yarn add hexo-deployer-tcb-static

## Options

You can configure in _config.yml as follows:

```yaml
deploy:
  type: tcb
  secretId: yourSecretId
  secretKey: yourSecretKey
  envId: yourEnvId
```

For projects that use pipelines, you may not want to expose TCB properties in the project file, so we support getting them through environment variables.

```shell script
TCB_SECRET_ID=yourSecretId
TCB_SECRET_KEY=yourSecretKey
TCB_ENV_Id=yourEnvId
```

> Environment variables have lower priority than _config.xml configuration

You can get this information from your Tencent Cloud Console.

## License

MIT
