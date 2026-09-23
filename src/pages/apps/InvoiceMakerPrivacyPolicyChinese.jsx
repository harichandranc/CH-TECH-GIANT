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
            最后更新日期：2026年5月24日
          </p>

          <div className="space-y-10 text-gray-300 leading-8">

            <section>
              <p>
                欢迎使用由
                <span className="text-cyan-400 font-semibold">
                  {" "}CH TECH GIANT
                </span>
                开发的发票制作器。
              </p>

              <p className="mt-4">
                我们非常重视您的隐私。本隐私政策说明了本应用如何处理用户信息以及我们使用的第三方服务。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                信息收集
              </h2>

              <p>
                发票制作器不会直接收集、存储或分享用户的个人信息。
              </p>

              <p className="mt-4">
                您在应用中创建的所有发票数据都会存储在您的设备本地，
                除非您主动选择导出或分享这些数据。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                使用的权限
              </h2>

              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>存储 / 文件访问</strong> — 用于保存、导出和分享用户创建的发票或 PDF 文件。
                </li>

                <li>
                  <strong>互联网访问</strong> — 用于提供广告以及其他可选的在线功能。
                </li>
              </ul>

              <p className="mt-4">
                未经您的许可，本应用不会访问您的个人联系人、短信、照片或其他敏感信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                数据安全
              </h2>

              <p>
                您的发票数据保存在您的设备上。
                我们不会将您的发票数据或业务数据上传或存储在我们的服务器上。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                广告和第三方服务
              </h2>

              <p>
                发票制作器使用第三方服务在应用中提供广告。
                这些服务可能会根据其自身的隐私政策收集某些设备信息，
                例如广告标识符、设备信息、IP 地址以及与广告互动相关的信息。
              </p>

              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Google Play 服务</li>
                <li>Start.io</li>
              </ul>

              <p className="mt-4">
                Start.io 可能会处理相关信息，用于广告展示、广告个性化、
                广告效果衡量、欺诈防范以及其他相关广告服务。
                此类信息的收集和使用受 Start.io 隐私政策的约束。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                儿童隐私
              </h2>

              <p>
                本应用不面向13岁以下的儿童。
                我们不会在明知的情况下直接收集儿童的个人信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                隐私政策的变更
              </h2>

              <p>
                我们可能会不时更新本隐私政策。
                如有更改，我们将在本页面更新“最后更新日期”。
              </p>
            </section>

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
                  <p>电子邮件：info@chtechgiant.com</p>
                  <p>电话：+91 9980785020</p>
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