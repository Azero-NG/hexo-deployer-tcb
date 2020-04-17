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
