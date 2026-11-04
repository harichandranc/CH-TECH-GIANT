import { motion } from "framer-motion";

const ImageToPDFPrivacyPolicyChinese = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            隐私政策 – 图片转 PDF
          </h1>

          <p className="text-gray-400 mb-10">
            最后更新日期：2026年11月4日
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            {/* Introduction */}
            <section>
              <p>
                欢迎使用由{" "}
                <span className="text-cyan-400 font-semibold">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </span>{" "}
                开发的{" "}
                <span className="text-cyan-400 font-semibold">
                  图片转 PDF
                </span>{" "}
                应用。
              </p>

              <p className="mt-4">
                我们非常重视您的隐私。本隐私政策说明本应用如何处理用户信息，包括第三方广告服务可能处理的信息。
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                信息收集
              </h2>

              <p>
                图片转 PDF 不会通过我们自己的服务器直接收集、存储或共享您的个人文件。
              </p>

              <p className="mt-4">
                本应用不要求用户注册账户或登录。
              </p>

              <p className="mt-4">
                在应用支持的情况下，图片选择和 PDF 生成操作会在您的设备本地完成。
              </p>

              <p className="mt-4">
                本应用集成的第三方广告服务可能会根据其隐私政策收集或处理某些技术信息、设备信息和广告相关信息，具体内容如下。
              </p>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                使用的权限
              </h2>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>照片或媒体访问权限（如有需要）</li>
                <li>从设备中选择图片</li>
                <li>将生成的 PDF 文件保存到经授权的位置</li>
                <li>根据用户请求分享导出的 PDF 文档</li>
              </ul>

              <p className="mt-4">
                本应用仅访问您主动选择或授权用于相关操作的文件和照片。具体权限取决于您的设备、操作系统和应用版本。
              </p>
            </section>

            {/* File Handling */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                文件处理
              </h2>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>在应用支持的情况下，您选择的图片会在设备本地处理。</li>
                <li>作为本地转换流程的一部分，我们不会将您的图片或生成的 PDF 文件上传到我们的服务器。</li>
                <li>我们不会出售您的图片或生成的 PDF 文档。</li>
                <li>导出的文件会保存到您选择或授权的位置。</li>
              </ul>

              <p className="mt-4">
                如果未来的功能或应用集成需要将文件或信息传输到设备之外，我们应在使用该功能之前说明相关情况。
              </p>
            </section>

            {/* Advertising */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                广告与第三方服务
              </h2>

              <p>
                本应用可能通过{" "}
                <span className="text-cyan-400 font-semibold">
                  Unity LevelPlay
                </span>{" "}
                广告中介平台展示广告，并可能使用 Unity Ads、ironSource
                等广告合作伙伴，具体取决于应用中实际启用和配置的服务。
              </p>

              <p className="mt-4">
                这些广告服务可能会收集或处理某些信息，用于展示广告、衡量广告效果、进行分析、防止欺诈以及改进其服务。根据实际启用的服务、设备设置和适用法律，这些信息可能包括：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>设备类型、型号和操作系统</li>
                <li>广告标识符及其他设备标识符</li>
                <li>IP 地址和一般网络信息</li>
                <li>广告展示、互动及与广告相关的应用使用信息</li>
                <li>在法律允许的情况下，根据 IP 地址或设备设置获取的大致位置信息</li>
                <li>诊断、性能和防欺诈相关信息</li>
              </ul>

              <p className="mt-4">
                实际收集的信息取决于您所使用的应用版本中集成的广告合作伙伴，以及您的设备隐私设置。我们无法控制第三方广告服务提供商独立进行的数据处理活动。
              </p>

              <p className="mt-4">
                如需了解更多信息，请查看相关服务的隐私政策：
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>
                  <a
                    href="https://unity.com/legal/game-player-and-app-user-privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition duration-300"
                  >
                    Unity 隐私政策
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.is.com/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition duration-300"
                  >
                    ironSource 隐私政策
                  </a>
                </li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                数据共享
              </h2>

              <p>
                我们不会出售您的个人文件或生成的 PDF 文档。当第三方广告服务在应用中启用时，这些服务可能会根据其隐私政策和适用法律处理相关信息。
              </p>

              <p className="mt-4">
                在本地转换流程中，我们不会将您选择的图片或生成的 PDF 文档共享给广告合作伙伴。
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                数据安全
              </h2>

              <p>
                在应用支持的情况下，我们通过在您的设备本地处理图片和生成 PDF 文件，尽可能保护您的隐私。
              </p>

              <p className="mt-4">
                作为本地转换流程的一部分，我们不会将您选择的图片或生成的 PDF 文件上传或存储在我们的外部服务器上。
              </p>

              <p className="mt-4">
                第三方广告服务处理的信息将按照其各自的隐私政策和安全措施进行处理。
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                儿童隐私
              </h2>

              <p>
                本应用并非专门面向13岁以下的儿童。
              </p>

              <p className="mt-4">
                我们不会通过自己的服务器故意直接收集儿童的个人信息。第三方广告服务可能会根据其自身政策和适用法律处理相关信息。
              </p>
            </section>

            {/* User Choices */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                您的隐私选择
              </h2>

              <p>
                您可以通过设备的隐私设置管理个性化广告或限制广告标识符的使用。可用的控制选项取决于设备、操作系统、所在地区和适用法律。
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                隐私政策的变更
              </h2>

              <p>
                我们可能会不时更新本隐私政策。任何变更都会发布在本页面，并更新相应的日期。我们建议您定期查看本页面。
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                联系我们
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6">
                <div className="space-y-2">
                  <p>CH TECH GIANT (OPC) PRIVATE LIMITED</p>
                  <p>印度卡纳塔克邦达文盖雷 – 577001</p>
                  <p>
                    电子邮箱：
                    <a
                      href="mailto:info@chtechgiant.com"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      info@chtechgiant.com
                    </a>
                  </p>
                  <p>
                    电话：
                    <a
                      href="tel:+919980785020"
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      +91 9980785020
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

export default ImageToPDFPrivacyPolicyChinese;