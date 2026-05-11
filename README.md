# Element UI 输入框记忆验证 Demo

这个仓库是一个可直接部署到 Vercel 的静态 demo 项目，页面基于 Vue 2 + Element UI CDN，用来验证不同输入框配置在提交后是否更容易被浏览器记住。

## 本地运行

```bash
npm run dev
```

然后访问：

```text
http://localhost:4173/
```

也可以使用任意静态服务，例如：

```bash
python3 -m http.server 4173
```

建议通过 HTTP 服务访问，而不是直接用 `file://` 打开。浏览器对本地文件页面的表单历史记录、密码管理器和自动填充策略可能不稳定。

## 构建

```bash
npm run build
```

构建产物会输出到 `dist/`，Vercel 会使用同一个命令生成部署内容；`api/autocomplete-memory-demo-submit.js` 会作为 Vercel Serverless Function 返回表单提交成功响应，避免静态站点 POST 到不存在路径。

## Vercel 部署

项目已包含 `vercel.json`：

- Build Command：`npm run build`
- Output Directory：`dist`

部署方式：

1. 将当前仓库推送到 GitHub / GitLab / Bitbucket。
2. 在 Vercel 中导入仓库。
3. 保持默认配置或确认输出目录为 `dist`。
4. 点击 Deploy。

## 验证方式

1. 分别填写页面中的不同表单并点击“提交这个表单”。
2. 刷新页面。
3. 再次聚焦相同输入框，观察浏览器是否出现历史输入建议、自动填充候选或密码管理器提示。
4. 对比 `autocomplete="off"` 且缺少稳定 `name` 的手机号输入框，与 `name="phone" autocomplete="tel"`、`name="username" autocomplete="username"` 等方案的差异。

## 覆盖的输入类型

- 标准账号密码登录：`name="username"` + `type="password"`。
- 问题复现：手机号 `autocomplete="off"` + 无稳定 `name`。
- 对照场景：有稳定 `name` 但 `autocomplete="off"`。
- 对照场景：只有 `autocomplete="on"` 但没有稳定 `name`。
- 推荐手机号方案：`type="tel"` + `name="phone"` + `autocomplete="tel"`。
- 手机号作为账号：`name="username"` + `autocomplete="username"`。
- 邮箱和搜索输入对照组。
