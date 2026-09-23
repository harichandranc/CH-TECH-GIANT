import { motion } from "framer-motion";

const WebCodshopPrivacyPolicyChinese = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            隐私政策 – WEB CODSHOP
          </h1>

          <p className="text-gray-400 mb-10">
            最后更新日期：2026年6月
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            <section>
              <p>
                WEB CODSHOP 由{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>{" "}
                所拥有和运营。
              </p>

              <p className="mt-4">
                本隐私政策说明了当您使用 WEB CODSHOP、我们的网站、移动应用程序
                以及相关服务时，我们如何收集、使用、存储和保护您的信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                我们收集的信息
              </h2>

              <p>
                我们可能会收集以下类型的信息：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>姓名</li>
                <li>电子邮件地址</li>
                <li>电话号码（如果您提供）</li>
                <li>账单信息</li>
                <li>购买记录</li>
                <li>下载记录</li>
                <li>设备信息</li>
                <li>IP 地址</li>
                <li>使用分析数据</li>
                <li>广告标识符</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                我们如何使用您的信息
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>创建和管理您的账户</li>
                <li>处理付款和订单</li>
                <li>提供数字产品</li>
                <li>生成发票</li>
                <li>提供客户支持</li>
                <li>改进我们的服务和用户体验</li>
                <li>展示广告</li>
                <li>防止欺诈和滥用</li>
                <li>遵守法律义务</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                付款处理
              </h2>

              <p>
                WEB CODSHOP 使用值得信赖的第三方付款服务提供商，包括：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Razorpay</li>
                <li>PayPal</li>
              </ul>

              <p className="mt-4">
                我们不会在自己的服务器上存储完整的银行卡信息、银行账户信息
                或付款凭证。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                数字产品交付
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>购买的产品将提供下载。</li>
                <li>
                  下载链接可能会发送至您注册的电子邮件地址。
                </li>
                <li>
                  我们会保留购买记录，以便您今后访问和下载已购买的产品。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                广告与分析
              </h2>

              <p>
                WEB CODSHOP 可能使用以下第三方广告和分析服务：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Start.io</li>
                <li>Google Analytics</li>
                <li>Firebase Analytics</li>
                <li>Firebase Crashlytics</li>
              </ul>

              <p className="mt-4">
                Start.io 以及其他第三方服务可能会收集和处理设备信息、
                广告标识符、IP 地址、使用数据、广告互动信息以及技术或诊断信息。
                这些信息可能用于提供广告、衡量广告效果、改进服务、
                防止欺诈以及支持数据分析。
              </p>

              <a
                href="https://www.start.io/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition duration-300"
              >
                https://www.start.io/privacy
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                电子邮件通信
              </h2>

              <p>
                我们可能会发送与以下事项相关的电子邮件：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>购买确认</li>
                <li>发票</li>
                <li>产品交付通知</li>
                <li>客户支持回复</li>
                <li>重要账户更新</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Cookie 和类似技术
              </h2>

              <p>
                我们可能使用 Cookie 和类似技术来：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>维持用户会话</li>
                <li>改善网站和应用功能</li>
                <li>分析流量和使用情况</li>
                <li>提供广告</li>
                <li>提升用户体验</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                数据安全
              </h2>

              <p>
                我们采取合理的安全措施，以保护您的信息免受未经授权的访问、
                滥用、修改、披露或丢失。
              </p>

              <p className="mt-4">
                但是，任何在线系统都无法保证 100% 的安全性。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                儿童隐私
              </h2>

              <p>
                WEB CODSHOP 不面向 13 岁以下的儿童。
              </p>

              <p className="mt-4">
                我们不会故意收集儿童的个人信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                您的权利
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>访问您的个人数据</li>
                <li>请求更正个人数据</li>
                <li>在适用情况下请求删除个人数据</li>
                <li>请求了解我们存储的数据</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                隐私政策的变更
              </h2>

              <p>
                我们可能会不时更新本隐私政策。任何更改都会发布在本页面，
                并注明更新后的修订日期。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                联系我们
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>电子邮件：contact@chtechgiant.com</p>
                  <p>网站：https://chtechgiant.com</p>
                  <p>所在地：印度卡纳塔克邦达文盖雷 – 577001</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebCodshopPrivacyPolicyChinese;