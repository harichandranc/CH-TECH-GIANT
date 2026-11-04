
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
            最后更新日期：2026年11月
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

              <p>根据您使用的功能，我们可能会收集以下类型的信息：</p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>姓名（如果您提供）</li>
                <li>电子邮件地址</li>
                <li>电话号码（如果您提供）</li>
                <li>账单和交易信息</li>
                <li>购买记录</li>
                <li>下载记录</li>
                <li>设备和技术信息</li>
                <li>IP 地址</li>
                <li>使用分析和诊断数据</li>
                <li>广告标识符（如适用）</li>
                <li>广告展示和互动信息（如适用）</li>
              </ul>

              <p className="mt-4">
                实际收集的信息取决于您使用的功能、设备设置以及我们实际集成和启用的第三方服务。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                我们如何使用您的信息
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>创建和管理您的账户</li>
                <li>处理付款和订单</li>
                <li>提供数字产品和下载服务</li>
                <li>生成发票并维护购买记录</li>
                <li>提供客户支持</li>
                <li>改进我们的服务和用户体验</li>
                <li>展示和衡量广告效果</li>
                <li>分析服务性能并排查错误</li>
                <li>防止欺诈、滥用和未经授权的活动</li>
                <li>遵守适用的法律义务</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                付款处理
              </h2>

              <p>
                WEB CODSHOP 可能使用以下第三方付款服务提供商：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Razorpay</li>
                <li>PayPal</li>
              </ul>

              <p className="mt-4">
                付款将按照相关服务提供商的条款和隐私政策进行处理。
                我们不会有意在自己的服务器上存储完整的银行卡信息。
                付款服务提供商可能会处理完成交易、防止欺诈及遵守法律所需的信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                数字产品交付
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>购买的产品可能会提供下载。</li>
                <li>订单确认和下载链接可能会发送至您注册的电子邮件地址。</li>
                <li>我们可能保留购买和下载记录，以支持订单管理及已购产品访问。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                广告与分析
              </h2>

              <p>
                根据实际集成和启用的功能，WEB CODSHOP 的移动应用程序或相关服务可能使用以下第三方广告和分析服务：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Unity Ads</li>
                <li>Unity LevelPlay（ironSource）</li>
                <li>Google Analytics（如果已集成）</li>
                <li>Firebase Analytics（如果已集成）</li>
                <li>Firebase Crashlytics（如果已集成）</li>
              </ul>

              <p className="mt-4">
                Unity Ads 和 Unity LevelPlay 可用于广告投放、广告中介、广告效果衡量和优化。
                根据实际启用的 SDK、广告网络及相关设置，这些服务及其合作伙伴可能会处理以下信息：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>设备标识符和广告 ID</li>
                <li>设备型号、操作系统及技术信息</li>
                <li>IP 地址及由 IP 地址推断的大致位置</li>
                <li>广告展示、点击和互动信息</li>
                <li>应用活动或会话信息（如已启用）</li>
                <li>诊断、反欺诈和性能数据</li>
              </ul>

              <p className="mt-4">
                这些信息可能用于投放广告、衡量广告效果、控制广告展示频率、
                防止欺诈以及在法律允许和相关设置启用的情况下提供个性化广告。
              </p>

              <p className="mt-4">
                广告合作伙伴可能会接收提供相关服务所需的信息。
                这些第三方对信息的处理受其各自的隐私政策和适用的隐私设置约束。
              </p>

              <p className="mt-4">
                您可以通过设备的隐私或广告设置，以及应用程序提供的同意和隐私控制（如有），
                管理部分个性化广告选项。具体选项取决于您的地区、设备和所使用的服务。
              </p>

              <p className="mt-4">
                您可以通过以下链接了解 Unity 及 ironSource 的隐私政策：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>
                  <a
                    href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition duration-300 underline"
                  >
                    Unity Ads 和应用用户隐私政策
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.is.com/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition duration-300 underline"
                  >
                    ironSource 隐私政策
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                电子邮件通信
              </h2>

              <p>我们可能会发送与以下事项相关的服务电子邮件：</p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>购买确认</li>
                <li>发票和收据</li>
                <li>产品交付通知</li>
                <li>客户支持回复</li>
                <li>重要账户和安全更新</li>
              </ul>

              <p className="mt-4">
                如果我们发送促销电子邮件，将根据适用法律和相关订阅偏好进行处理。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Cookie 和类似技术
              </h2>

              <p>我们的网站可能使用 Cookie 和类似技术来：</p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>维持会话并支持账户登录</li>
                <li>记住用户偏好</li>
                <li>改善网站功能</li>
                <li>分析网站流量和使用情况</li>
                <li>在启用的情况下支持广告和效果衡量</li>
              </ul>

              <p className="mt-4">
                您可以通过浏览器设置管理 Cookie。禁用某些 Cookie 可能会影响网站的部分功能。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                数据共享与第三方服务
              </h2>

              <p>
                为运营 WEB CODSHOP，我们可能会在必要范围内与相关服务提供商共享信息，
                包括付款处理商、数字产品交付服务、托管服务商、客户支持工具以及广告或分析合作伙伴。
              </p>

              <p className="mt-4">
                在适用法律允许或要求的情况下，我们也可能为遵守法律、
                保护合法权益、防止欺诈或处理合法商业交易而披露相关信息。
              </p>

              <p className="mt-4">
                我们无法控制第三方独立的隐私处理方式。有关详细信息，请查看相关第三方的隐私政策。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                数据安全与保留
              </h2>

              <p>
                我们采取合理的技术和组织措施，旨在保护信息免遭未经授权的访问、
                丢失、滥用、修改或披露。
              </p>

              <p className="mt-4">
                我们会在提供服务、维护必要的业务记录、解决争议、防止欺诈及履行法律义务所需的合理期限内保留相关信息。
              </p>

              <p className="mt-4">
                任何在线传输或电子存储方式都无法保证绝对安全。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                儿童隐私
              </h2>

              <p>
                WEB CODSHOP 不面向 13 岁以下的儿童。
                我们不会故意以违反适用法律的方式收集 13 岁以下儿童的个人信息。
              </p>

              <p className="mt-4">
                如果您认为儿童不适当地向我们提供了个人信息，请联系我们，以便我们进行核查。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                您的隐私权利
              </h2>

              <p>根据适用法律，您可能有权：</p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>请求访问您的个人信息</li>
                <li>请求更正不准确的信息</li>
                <li>在适用情况下请求删除信息</li>
                <li>询问我们如何处理您的信息</li>
                <li>使用可用的广告隐私选项</li>
              </ul>

              <p className="mt-4">
                您可以通过下方联系方式提交隐私相关请求。
                在回复前，我们可能需要验证您的身份。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                隐私政策的变更
              </h2>

              <p>
                我们可能会不时更新本隐私政策。
                更新内容将发布在本页面，并注明修订日期。
                建议您定期查看本页面，以了解最新内容。
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
                  <p>
                    电子邮件：
                    <a
                      href="mailto:contact@chtechgiant.com"
                      className="ml-1 text-cyan-400 hover:text-cyan-300"
                    >
                      contact@chtechgiant.com
                    </a>
                  </p>

                  <p>
                    网站：
                    <a
                      href="https://chtechgiant.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-cyan-400 hover:text-cyan-300"
                    >
                      https://chtechgiant.com
                    </a>
                  </p>

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
