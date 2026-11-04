import { motion } from "framer-motion";

const InvoiceMakerPrivacyPolicyChinese = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            隐私政策 – 发票制作器
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
                开发的发票制作器。
              </p>

              <p className="mt-4">
                我们非常重视您的隐私。本隐私政策说明本应用如何处理用户信息，以及应用中使用的第三方服务可能如何处理相关信息。
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                信息收集
              </h2>

              <p>
                发票制作器旨在将发票信息存储在您的设备本地。作为应用的本地功能的一部分，我们不会将您的发票记录或业务数据上传或存储在我们自己的服务器上。
              </p>

              <p className="mt-4">
                除非某项功能明确另有说明，否则本应用不要求用户注册账户或登录。
              </p>

              <p className="mt-4">
                您在发票中填写的信息，例如客户姓名、业务资料、地址、商品描述和价格，可能会存储在您的设备本地。
              </p>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                使用的权限
              </h2>

              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>存储空间 / 文件访问权限</strong> — 在需要时，用于保存、导出或分享应用中创建的发票和 PDF 文件。
                </li>

                <li>
                  <strong>互联网访问权限</strong> — 用于广告、在线服务以及应用中可能提供的其他网络功能。
                </li>
              </ul>

              <p className="mt-4">
                具体权限取决于您的设备、操作系统和应用版本。本应用仅应根据其功能需求，并在您的设备设置允许的范围内访问文件或其他设备资源。
              </p>
            </section>

            {/* Invoice Data and Security */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                发票数据与安全
              </h2>

              <p>
                您的发票数据存储在您的设备本地。作为应用本地功能的一部分，我们不会将您的发票记录或业务数据上传或存储在我们的服务器上。
              </p>

              <p className="mt-4">
                您有责任保护设备安全，并备份重要的发票和导出文件。如果您选择分享或导出发票，接收方或您使用的相关服务可能会根据其自身的数据处理规则处理这些信息。
              </p>
            </section>

            {/* Advertising */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                广告与第三方服务
              </h2>

              <p>
                在应用中实际启用和配置的情况下，发票制作器可能使用{" "}
                <span className="text-cyan-400 font-semibold">
                  Unity LevelPlay
                </span>{" "}
                广告中介平台，以及 Unity Ads 和 ironSource
                等广告合作伙伴。Google Play 服务也可能用于支持应用功能。
              </p>

              <p className="mt-4">
                根据实际集成和启用的服务，第三方广告服务提供商可能会处理相关信息，用于广告展示、分析、广告个性化、广告效果衡量、防止欺诈及其他相关目的。这些信息可能包括：
              </p>

              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>设备类型、型号和操作系统</li>
                <li>广告标识符及其他设备标识符</li>
                <li>IP 地址和一般网络信息</li>
                <li>广告展示记录和互动信息</li>
                <li>与广告相关的应用使用信息和诊断信息</li>
                <li>在适用法律允许的情况下获取的大致位置信息</li>
              </ul>

              <p className="mt-4">
                实际处理的信息取决于应用中启用的广告服务、您的设备设置以及适用法律。第三方服务提供商会按照其自身的隐私政策处理相关信息。我们无法控制这些服务提供商独立进行的数据处理活动。
              </p>

              <p className="mt-4">
                如需了解更多信息，请查看相关服务的隐私政策：
              </p>

              <ul className="list-disc pl-6 space-y-3 mt-4">
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

                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition duration-300"
                  >
                    Google 隐私政策
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
                我们不会出售您的发票记录或业务数据。作为应用本地功能的一部分，存储在设备本地的发票信息不会被发送到我们的服务器。
              </p>

              <p className="mt-4">
                当第三方广告服务启用时，这些服务可能会处理设备信息和广告相关信息。如果您主动导出或分享发票，您分享的信息可能会由您选择的接收方或目标服务接收和处理。
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                儿童隐私
              </h2>

              <p>
                发票制作器并非专门面向13岁以下的儿童。
              </p>

              <p className="mt-4">
                我们不会通过自己的服务器故意直接收集儿童的个人信息。第三方服务可能会根据其自身的隐私政策和适用法律处理相关信息。
              </p>
            </section>

            {/* Privacy Choices */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                您的隐私选择
              </h2>

              <p>
                您可以通过设备的隐私设置管理个性化广告，或限制广告标识符的使用。具体可用选项取决于您的设备、操作系统、所在地区和适用法律。
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                隐私政策的变更
              </h2>

              <p>
                我们可能会不时更新本隐私政策。如有更改，我们将在本页面发布更新后的内容，并修改“最后更新日期”。建议您定期查看本政策。
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                联系我们
              </h2>

              <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  CH TECH GIANT (OPC) PRIVATE LIMITED
                </h3>

                <div className="space-y-2">
                  <p>印度卡纳塔克邦达文盖雷 577001</p>
                  <p>
                    电子邮件：
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

export default InvoiceMakerPrivacyPolicyChinese;