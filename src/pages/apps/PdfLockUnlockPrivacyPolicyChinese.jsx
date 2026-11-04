import { motion } from "framer-motion";

const PDFLockUnlockPrivacyPolicyChinese = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            隐私政策 – PDF 加锁与解锁
          </h1>

          <p className="text-gray-400 mb-10">
            生效日期：2026年11月4日
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            <section>
              <p>
                欢迎使用{" "}
                <span className="text-cyan-400 font-semibold">
                  PDF 加锁与解锁
                </span>
                （以下简称“本应用”）。我们非常重视您的隐私。
                本隐私政策说明了您使用本应用时，我们如何收集、使用和保护您的信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. 我们收集的信息
              </h2>

              <p>
                本应用旨在帮助您保护和解锁 PDF 文档。
                我们仅在提供相关功能和服务所需的范围内处理信息。
              </p>

              <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">
                PDF 文件
              </h3>

              <p>
                当您选择锁定或解锁 PDF 文件时，所选择的文件会上传到我们的服务器进行处理。
              </p>

              <p className="mt-4">
                上传的文件仅用于执行您请求的操作，包括：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>为 PDF 文件设置密码保护</li>
                <li>在符合相关功能要求的情况下移除 PDF 文件的密码</li>
                <li>生成处理后的 PDF 文件供您下载</li>
              </ul>

              <p className="mt-4">
                我们不会将您的 PDF 文件用于与所请求服务无关的目的。
              </p>

              <p className="mt-4">
                本应用的广告服务及相关 SDK 还可能根据其配置收集或处理某些技术信息，例如设备标识符、IP 地址、广告互动信息及诊断数据。
                具体信息取决于实际集成和启用的服务。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. 临时文件处理与删除
              </h2>

              <p>
                上传的 PDF 文件会在处理您请求的操作时由服务器进行处理。
              </p>

              <p className="mt-4">
                文件处理完成后，我们会按照服务器的实际处理和清理机制删除临时文件。
                我们不会有意永久保存这些上传文件。
              </p>

              <p className="mt-4">
                文件的实际保留时间可能取决于服务器处理流程、临时存储机制及备份配置。
                我们会按照实际实施的数据保留和删除措施处理文件。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. 广告服务
              </h2>

              <p>
                本应用可能使用 Unity LevelPlay、Unity Ads 和 ironSource
                等广告或广告中介服务，具体取决于应用中实际集成和启用的 SDK。
              </p>

              <p className="mt-4">
                在相关服务启用时，广告服务提供商可能会收集或处理某些信息，例如：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>设备信息和设备标识符</li>
                <li>IP 地址及网络相关信息</li>
                <li>广告展示、点击和互动信息</li>
                <li>应用相关信息</li>
                <li>诊断数据和技术信息</li>
                <li>用于广告投放、衡量、防止欺诈及保障服务安全的信息</li>
              </ul>

              <p className="mt-4">
                实际收集的数据类型、处理目的及是否与第三方共享，取决于所使用的 SDK、其配置和适用的隐私设置。
                广告服务提供商会根据其自身的隐私政策及适用法律处理相关信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. 数据安全
              </h2>

              <p>
                我们采取合理的技术和组织措施，以帮助保护通过本应用处理的信息。
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  在服务器和应用之间传输数据时，使用 HTTPS 等安全连接（如已正确配置）。
                </li>
                <li>按照服务器的实际处理机制处理上传的 PDF 文件。</li>
                <li>按照实际实施的文件保留和清理机制处理临时文件。</li>
                <li>第三方广告服务可能根据其自身的安全措施处理相关技术信息。</li>
              </ul>

              <p className="mt-4">
                但是，任何通过互联网进行的数据传输或电子存储方式都无法保证绝对安全。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. 应用权限
              </h2>

              <p>本应用可能需要以下权限或系统功能：</p>

              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>选择或读取您指定的 PDF 文件</li>
                <li>保存或下载处理后的 PDF 文件</li>
                <li>访问互联网以进行服务器处理和下载</li>
                <li>在相关服务启用时加载和显示广告</li>
              </ul>

              <p className="mt-4">
                本应用仅应在相关功能需要时使用相应权限或系统功能。
                实际权限取决于应用的实现和设备系统设置。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. 儿童隐私
              </h2>

              <p>
                本应用并非专门面向13岁以下儿童设计。
              </p>

              <p className="mt-4">
                我们不会在明知的情况下收集儿童的个人信息，除非相关收集行为获得法律允许并符合适用要求。
              </p>

              <p className="mt-4">
                如果您认为儿童向我们提供了个人信息，请通过下方联系方式联系我们，以便我们评估并采取适当措施。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. 第三方服务
              </h2>

              <p>
                本应用可能使用以下第三方服务，具体取决于实际集成和启用的功能：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Unity LevelPlay — 广告中介服务（如已集成）</li>
                <li>Unity Ads — 广告服务（如已启用）</li>
                <li>ironSource — 广告相关服务（如已集成或启用）</li>
                <li>Google Play 服务 — 应用分发及相关平台功能</li>
              </ul>

              <p className="mt-4">
                这些服务可能根据各自的隐私政策和配置收集、处理或共享某些信息。
                我们建议您查看相关服务的隐私政策，以了解其数据处理方式。
              </p>

              <div className="mt-4 space-y-2">
                <a
                  href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300 underline"
                >
                  Unity 隐私政策
                </a>

                <a
                  href="https://www.is.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300 underline"
                >
                  ironSource 隐私政策
                </a>

                <a
                  href="https://play.google.com/about/play-terms/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300 transition duration-300 underline"
                >
                  Google Play 服务条款
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. 您的权利
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>您可以随时停止使用本应用。</li>
                <li>您可以从设备中删除已下载或处理后的文件。</li>
                <li>您可以联系我们咨询与隐私或个人信息处理相关的问题。</li>
                <li>您可以根据适用法律行使相关的数据保护权利。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. 隐私政策的变更
              </h2>

              <p>
                我们可能会不时更新本隐私政策，以反映应用功能、第三方服务或适用法律的变化。
              </p>

              <p className="mt-4">
                如有变更，我们将在本页面发布更新后的政策及生效日期。
                建议您定期查看本页面。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. 联系我们
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>
                    电子邮件：
                    <a
                      href="mailto:support@chtechgiant.com"
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      support@chtechgiant.com
                    </a>
                  </p>
                  <p>
                    网站：
                    <a
                      href="https://chtechgiant.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      https://chtechgiant.com
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PDFLockUnlockPrivacyPolicyChinese;